import { useState, useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

import Layout from '../layouts/Layout'
import Results from '../components/ResultsGlim'

const form_value = {
	tall: '1,55',
	weight: '50',
	usual_weight: '58,3',
	// tall: '',
	// weight: '',
	// usual_weight: '',
	more_than_6_months: 0,
	loss_weight: '00,00',
	loss_weight_percent: 0,
	imc: '00,00',

	age: 0,
	// muscle_mass: '',
	// reduced_dietary_intake: '',
	// inflammation: '',
	
	reduced_dietary_intake: '&lt;50% de las necesidades energéticas &gt;1 semana',
	muscle_mass: 'Déficit leve a moderado',
	inflammation: 'Relacionada a enfermedad/lesión aguda',
	
	loss_weight_info: '',
	low_imc: ''
}


const calcSixMonths = val => val ? 'más de 6 meses' : 'menos de 6 meses'


const calculator = form => {
	const tall = parseFloat(form.tall.replace(',','.'))
	const weight = parseFloat(form.weight.replace(',','.'))
	const usual_weight = parseFloat(form.usual_weight.replace(',','.'))
	const imc = parseFloat(form.imc.replace(',','.'))
	const f = {...form}
	
	if( weight && usual_weight ){
		const result = usual_weight - weight
		f.loss_weight = result <= 0 ? 0 : result.toFixed(2).replace('.',',')
		f.loss_weight_percent = (parseFloat(f.loss_weight.replace(',','.')) / usual_weight) * 100

		if( f.loss_weight_percent <= 10 && f.loss_weight_percent > 5 ) f.loss_weight_info = `5-10% en ${calcSixMonths(f.more_than_6_months)}`
		if( f.loss_weight_percent == 10 ) f.loss_weight_info = `10% en ${calcSixMonths(f.more_than_6_months)}`
		if( f.loss_weight_percent > 10 && f.loss_weight_percent < 20 ) f.loss_weight_info = `10-20% ${calcSixMonths(f.more_than_6_months)}`
		if( f.loss_weight_percent >= 20 ) f.loss_weight_info = `20% en ${calcSixMonths(f.more_than_6_months)}`
	}
	
	if( weight && tall ){
		f.imc = (weight / Math.pow(tall, 2)).toFixed(2).replace('.',',')
	}


	if( imc < 22 ){
		if( imc < 20 ){
			if( form.age ){
				f.low_imc = '< 20 en > 70 años'
			}else{
				if( imc < 18.5 ){
					if( !form.age ){}
					f.low_imc = '< 18,5 en < 70 años'
				}else{
					if( !form.age ){}
				}
			}
		}else{
			if( form.age ) f.low_imc = '< 22 en > 70 años'
		}
	}

	console.log('f', f)

	return f
}


export default function GlimPage(){

	const [form, setForm] = useState({...form_value})
	const [sent, setSent] = useState(false)
	const [error, setError] = useState(false)
	const [diagnosis, setDiagnosis] = useState(null)
	const [breadcrumb, setBreadcrumb] = useState('glim')
	const [step, setStep] = useState(1)

	useEffect(() => {
		setForm(calculator(form))
	}, [])

	useEffect(() => setForm(calculator(form)), [form.tall, form.weight, form.usual_weight, form.more_than_6_months, form.age])


	const showError = () => {
		setError(true)
		setTimeout(() => {
			gsap.to('#errorBox', { 
				opacity: 1, 
				onComplete: () => setTimeout(() => {
					gsap.to('#errorBox', { opacity: 0, onComplete: () => setError(false) })
				}, 2000)
			})
		}, 100)
	}


	const handleChange = e => {
		const regex = /^[\d,.]+$/
		const f = {...form}

		const forbidenCharacter = () => {
			e.target.value = e.target.value.slice(0,-1)
			return
		}

		if( isNaN( parseFloat(e.target.value) ) ){
			f[e.target.name] = e.target.value
			console.log('f', f)
		}else{
			if( regex.test(e.target.value) ){
				if( e.target.value[0] === ',' || e.target.value[0] === '.' ) return forbidenCharacter()

				if( '.' === e.target.value[e.target.value.length - 1] ){
					e.target.value = e.target.value.slice(0,-1)
					e.target.value += ','
				}

				const countPeriods = e.target.value.split(',')
				if( countPeriods.length > 2 ) return forbidenCharacter()

				f[e.target.name] = e.target.value
			}else{
				e.target.value = e.target.value.slice(0,-1)
			}
		}

		setForm(f)
	}

	const setTimeFrame = val => {
		if( form.more_than_6_months === val ) return
		const f = {...form}
		f.more_than_6_months = val
		setForm(f)
	}

	const setAge = val => {
		if( form.age === val ) return
		const f = {...form}
		f.age = val
		setForm(f)
	}

	const validateStep1 = () => {
		console.log('validate')
		if( !form.tall.length || !form.weight.length || !form.usual_weight.length ){
			showError()
			return
		}
		setStep(2)
	}


	const submit = e => {
		e.preventDefault()

		if( !form.muscle_mass.length || !form.reduced_dietary_intake.length || !form.inflammation.length ){
			showError()
			return
		}

		( 'No aplica' === form.reduced_dietary_intake && 'No aplica' == form.inflammation ) ? setDiagnosis('NO') : setDiagnosis('SÍ')
		setBreadcrumb('result')
		setSent(true)

		console.log('FORM:', form)
	}


	return (<Layout status={breadcrumb}>

		{ !sent ? 
			(<form className="mt-6" onSubmit={submit}>
				{ step === 1 ? 
					(<>
						<div className="text-center py-8 md:pt-16 md:pb-10">
							<div id="pageTitle" className="page-title">DATOS ANTROPOMÉTRICOS</div>
						</div>

						<section className="space-y-3 max-w-md mx-auto">
							<div className="text-center">Por favor, indique los siguientes datos de su paciente:</div>

							<label className="bg-brand-aqua-300 border-b-2 border-brand-dark text-brand-aqua-600 flex items-center">
								<span className="pl-4 py-2 w-40">Talla (m):</span>
								<input 
									type="text" 
									className="bg-transparent text-right flex-1 px-4 py-2 focus:outline-none"
									name="tall"
									onChange={handleChange}
									defaultValue={form.tall} />
							</label>

							<label className="bg-brand-aqua-300 border-b-2 border-brand-dark text-brand-aqua-600 flex items-center">
								<span className="pl-4 py-2 w-40">Peso actual (kg):</span>
								<input 
									type="text" 
									className="bg-transparent text-right flex-1 px-4 py-2 focus:outline-none"
									name="weight"
									onChange={handleChange}
									defaultValue={form.weight} />
							</label>

							<label className="bg-brand-aqua-300 border-b-2 border-brand-dark text-brand-aqua-600 flex items-center">
								<span className="pl-4 py-2 w-40">Peso habitual (kg):</span>
								<input 
									type="text" 
									className="bg-transparent text-right flex-1 px-4 py-2 focus:outline-none"
									name="usual_weight"
									onChange={handleChange}
									defaultValue={form.usual_weight} />
							</label>

						</section>

						<section className="mt-8 space-y-2 max-w-md mx-auto">
							<div className="text-center">Cálculo peso perdido (kg):</div>
							<div className="bg-brand-aqua border-b-4 border-brand-dark text-2xl font-semibold text-center p-2">{form.loss_weight} kg</div>
						</section>

						<div className="mt-4 flex gap-x-8 max-w-md mx-auto">
							<button 
								className={`${form.more_than_6_months ? 'bg-white' : 'bg-gray-300'} border border-gray-300 p-2 flex-1`}
								onClick={() => setTimeFrame(0)}>
								&lt; 6 MESES
							</button>
							<button 
								className={`${form.more_than_6_months ? 'bg-gray-300' : 'bg-white'} border border-stone-300 p-2 flex-1`}
								onClick={() => setTimeFrame(1)}>
								&gt; 6 MESES
							</button>
						</div>

						<section className="mt-8 space-y-2 max-w-md mx-auto">
							<div className="text-center">Cálculo de IMC actual (kg/m<sup className="text-xxs">2</sup>):</div>
							<div className="bg-brand-aqua border-b-4 border-brand-dark text-2xl font-semibold text-center p-2">{form.imc} kg/m<sup className="text-xs">2</sup></div>
						</section>

						<div id="nextButton" className="pt-14 flex justify-center">
							<button 
								type="button"
								className="bg-brand-aqua text-white font-bold px-9 py-2.5 transition-all hover:opacity-80"
								onClick={() => validateStep1()}>
								CONTINUAR
							</button>
						</div>
					</>)
					:
					(<>
						<div className="text-center pt-8 pb-6 max-w-xs mx-auto md:pt-16 md:pb-10">
							<div className="page-title">CRITERIOS GLIM PARA EL DIAGNÓSTICO DE DESNUTRICIÓN*</div>
						</div>

						<div className="text-center max-w-md mx-auto">*Diagnóstico de desnutrición: requiere al menos <br/>1 criterio fenotípico y 1 criterio etiológico.</div>

						<fieldset className="max-w-md mx-auto">
							<legend className="text-center">
								<div className="bg-brand-aqua-600 w-24 h-1 mx-auto mt-10"></div>
								<div className="page-title text-brand-aqua-600 mt-5">CRITERIO FENOTÍPICO</div>
							</legend>

							<section className="mt-7 space-y-6">
								<div className="text-brand-aqua-600 font-medium leading-tight">Por favor, responda las siguientes preguntas sobre su paciente:</div>

								<div className="space-y-2">
									<div className="">Pérdida de peso (%):</div>
									<div className="bg-brand-aqua font-medium px-3 py-1.5">{form.loss_weight_info}</div>
								</div>

								<div className="space-y-2">
									<div className="">Bajo IMC (kg/m<sup className="text-xxs">2</sup>):</div>
									<div className="bg-brand-aqua font-medium px-3 py-1.5">{form.low_imc} &lt; 20 en &lt; 70 años</div>
								</div>

								<div className="space-y-2">
									<div className="">Masa muscular reducida:</div>
									<select 
										name="muscle_mass" 
										onChange={handleChange}
										className="border border-brand-aqua w-full px-2 py-1 focus:outline-none">
										<option value="">Selecciona</option>
										<option value="Déficit leve a moderado">Déficit leve a moderado</option>
										<option value="Déficit severo">Déficit severo</option>
										<option value="No aplica">No aplica</option>
									</select>
								</div>

								<div className="mt-4 flex gap-x-8 max-w-md mx-auto">
									<button 
										className={`${form.age ? 'bg-white' : 'bg-gray-300'} border border-gray-300 p-2 flex-1`}
										onClick={() => setAge(0)}>
										&lt; 70 AÑOS
									</button>
									<button 
										className={`${form.age ? 'bg-gray-300' : 'bg-white'} border border-stone-300 p-2 flex-1`}
										onClick={() => setAge(1)}>
										&gt; 70 AÑOS
									</button>
								</div>
							</section>
						</fieldset>


						<fieldset className="max-w-md mx-auto">
							<legend className="text-center pt-5">
								<div className="bg-brand-aqua-600 w-24 h-1 mx-auto mt-10"></div>
								<div className="page-title text-brand-aqua-600 mt-5">CRITERIO ETIOLÓGICO</div>
							</legend>

							<section className="mt-7 space-y-6">
								<div className="text-brand-aqua-600 font-medium leading-tight">Por favor, responda las siguientes preguntas sobre su paciente:</div>

								<div className="space-y-2">
									<div className="">Reducción de la ingesta o asimilación de alimentos:</div>
									<select 
										name="reduced_dietary_intake" 
										onChange={handleChange} 
										className="border border-brand-aqua w-full px-2 py-1 focus:outline-none">
										<option value="">Selecciona</option>
										<option value="&lt;50% de las necesidades energéticas &gt;1 semana">&lt;50% de las necesidades energéticas &gt;1 semana</option>
										<option value="Cualquier reducción durante &gt;2 semanas">Cualquier reducción durante &gt;2 semanas</option>
										<option value="Cualquier condición GI crónica que tenga un impacto adverso en la asmilación o absorción de alimentos">Cualquier condición GI crónica que tenga un impacto adverso en la asmilación o absorción de alimentos</option>
										<option value="No aplica">No aplica</option>
									</select>
								</div>

								<div className="space-y-2">
									<div className="">Inflamación:</div>
									<select 
										name="inflammation" 
										onChange={handleChange} 
										className="border border-brand-aqua w-full px-2 py-1 focus:outline-none">
										<option value="">Selecciona</option>
										<option value="Relacionada a enfermedad/lesión aguda">Relacionada a enfermedad/lesión aguda</option>
										<option value="Relacionada a enfermedad/lesión crónica">Relacionada a enfermedad/lesión crónica</option>
										<option value="No aplica">No aplica</option>
									</select>
								</div>
							</section>
						</fieldset>

						<div id="submitButton" className="pt-14 flex justify-center">
							<button className="bg-brand-aqua text-white font-bold px-9 py-2.5 transition-all hover:opacity-80">CONTINUAR</button>
						</div>
					</>)
				}
			</form>)
			
			:

			(
			<>
				<Results props={{diagnosis, ...form}}/>
			</>)
		}


		{ error ? 
			(<div 
				id="errorBox" 
				className="bg-red-500 text-white text-sm leading-tight px-3 py-2 flex gap-x-2 inset-x-2 bottom-2 fixed opacity-0 pointer-events-none z-30">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-white w-6">
					<path d="M12.865 3.00017L22.3912 19.5002C22.6674 19.9785 22.5035 20.5901 22.0252 20.8662C21.8732 20.954 21.7008 21.0002 21.5252 21.0002H2.47266C1.92037 21.0002 1.47266 20.5525 1.47266 20.0002C1.47266 19.8246 1.51886 19.6522 1.60663 19.5002L11.1329 3.00017C11.4091 2.52187 12.0206 2.358 12.4989 2.63414C12.651 2.72191 12.7772 2.84815 12.865 3.00017ZM10.9989 16.0002V18.0002H12.9989V16.0002H10.9989ZM10.9989 9.00017V14.0002H12.9989V9.00017H10.9989Z"></path>
				</svg>
				<span className="top-1 relative">Debes completar todas las opciones antes de continuar</span>
			</div>) :
			null 
		}

	</Layout>)
}