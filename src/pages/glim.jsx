import { useState, useEffect } from 'react'
import gsap from 'gsap'

import Layout from '../layouts/Layout'
import Results from '../components/ResultsGlim'

const form_value = {
	// tall: '',
	// weight: '',
	// usual_weight: '',
	more_than_6_months: null,
	loss_weight: '00,00',
	loss_weight_percent: 0,
	imc: '00,00',

	age: null,
	// muscle_mass: '',
	// reduced_dietary_intake: '',
	// inflammation: '',
	
	tall: '1,55',
	weight: '60',
	usual_weight: '58,3',
	muscle_mass: 'Déficit leve a moderado',
	reduced_dietary_intake: '&lt;50% de las necesidades energéticas &gt;1 semana',
	inflammation: 'Relacionada a enfermedad/lesión aguda',
	
	// reduced_dietary_intake: 'No aplica',
	// inflammation: 'No aplica',
	
	loss_weight_info: 'No aplica',
	low_imc: ''
}


const calcSixMonths = val => val ? 'más de 6 meses' : 'menos de 6 meses'


const calculator = form => {
	const tall = form.tall.indexOf(',') ? parseFloat(form.tall.replace(',','.')) : parseFloat(form.tall)
	const weight = form.weight.indexOf(',') ? parseFloat(form.weight.replace(',','.')) : parseFloat(form.weight)
	const usual_weight = form.usual_weight.indexOf(',') ? parseFloat(form.usual_weight.replace(',','.')) : parseFloat(form.usual_weight)
	const imc = form.imc.indexOf(',') ? parseFloat(form.imc.replace(',','.')) : parseFloat(form.imc)
	const f = {...form}
	
	if( weight && usual_weight ){
		const result = usual_weight - weight
		f.loss_weight = result <= 0 ? 0 : result.toFixed(2).replace('.',',')
		f.loss_weight_percent = (parseFloat(f.loss_weight) / usual_weight) * 100

		if( f.loss_weight_percent <= 10 && f.loss_weight_percent > 5 ) f.loss_weight_info = `5-10% en ${calcSixMonths(f.more_than_6_months)}`
		if( f.loss_weight_percent == 10 ) f.loss_weight_info = `10% en ${calcSixMonths(f.more_than_6_months)}`
		if( f.loss_weight_percent > 10 && f.loss_weight_percent < 20 ) f.loss_weight_info = `10-20% ${calcSixMonths(f.more_than_6_months)}`
		if( f.loss_weight_percent >= 20 ) f.loss_weight_info = `20% en ${calcSixMonths(f.more_than_6_months)}`
	}
	
	if( weight && tall ) f.imc = (weight / Math.pow(tall, 2)).toFixed(2).replace('.',',')


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

		gsap.set('#pageTitle', 	{ top: 60, position: 'relative', opacity: 0 })
		gsap.set('#introText', 	{ top: 60, position: 'relative', opacity: 0 })
		gsap.set('#section1', 	{ top: 60, position: 'relative', opacity: 0 })
		gsap.set('#section2', 	{ top: 60, position: 'relative', opacity: 0 })
		gsap.set('#section3', 	{ top: 60, position: 'relative', opacity: 0 })
		gsap.set('#section4', 	{ top: 60, position: 'relative', opacity: 0 })
		gsap.set('#section5', 	{ top: 60, position: 'relative', opacity: 0 })
		gsap.set('#section6', 	{ top: 60, position: 'relative', opacity: 0 })
		gsap.set('#section10', 	{ top: 60, position: 'relative', opacity: 0 })
		gsap.set('#nextButton', { top: 60, position: 'relative', opacity: 0 })

		gsap.to('#pageTitle', 	{ top: 0, opacity: 1 })
		gsap.to('#introText', 	{ top: 0, opacity: 1, delay: .1 })
		gsap.to('#section1', 		{ top: 0, opacity: 1, delay: .2 })
		gsap.to('#section2', 		{ top: 0, opacity: 1, delay: .3 })
		gsap.to('#section3', 		{ top: 0, opacity: 1, delay: .4 })
		gsap.to('#section4', 		{ top: 0, opacity: 1, delay: .5 })
		gsap.to('#section5', 		{ top: 0, opacity: 1, delay: .6 })
		gsap.to('#section6', 		{ top: 0, opacity: 1, delay: .7 })
		gsap.to('#section10', 	{ top: 0, opacity: 1, delay: .8 })
		gsap.to('#nextButton', 	{ top: 0, opacity: 1, delay: .9 })
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
			forbidenCharacter()
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

		// No se permite una altura mayor al valor de tall_limit
		const tall_limit = 2.5

		if( e.target.name === 'tall' ){
			const tall = e.target.value.indexOf(',') ? Number(e.target.value.replace(',', '.')) : Number(e.target.value)
			if( tall > tall_limit ){
				f.tall = '2,5'
				e.target.value = '2,5'
			}
		}

		setForm(f)
	}


	const handleSelectChange = e => {
		const f = {...form}
		f[e.target.name] = e.target.value
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
		if( 
			!form.tall.length 
			|| !form.weight.length 
			|| !form.usual_weight.length 
			|| null === form.more_than_6_months 
			|| null === form.age 
		){
			showError()
			return
		}

		setStep(2)

		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' })

			gsap.set('#pageTitle2', 		{ top: 60, position: 'relative', opacity: 0 })
			gsap.set('#introText2', 		{ top: 60, position: 'relative', opacity: 0 })
			gsap.set('#bar1', 					{ top: 60, position: 'relative', opacity: 0 })
			gsap.set('#title1', 				{ top: 60, position: 'relative', opacity: 0 })
			gsap.set('#text1', 					{ top: 60, position: 'relative', opacity: 0 })
			gsap.set('#section7', 			{ top: 60, position: 'relative', opacity: 0 })
			gsap.set('#section8', 			{ top: 60, position: 'relative', opacity: 0 })
			gsap.set('#section9', 			{ top: 60, position: 'relative', opacity: 0 })
			gsap.set('#bar2', 					{ top: 60, position: 'relative', opacity: 0 })
			gsap.set('#title2', 				{ top: 60, position: 'relative', opacity: 0 })
			gsap.set('#text2', 					{ top: 60, position: 'relative', opacity: 0 })
			gsap.set('#section11', 			{ top: 60, position: 'relative', opacity: 0 })
			gsap.set('#section12', 			{ top: 60, position: 'relative', opacity: 0 })
			gsap.set('#submitButton', 	{ top: 60, position: 'relative', opacity: 0 })

			gsap.to('#section2', 				{ opacity: 1, delay: .1 })
			gsap.to('#pageTitle2', 			{ top: 0, opacity: 1, delay: .2 })
			gsap.to('#introText2', 			{ top: 0, opacity: 1, delay: .3 })
			gsap.to('#bar1', 						{ top: 0, opacity: 1, delay: .4 })
			gsap.to('#title1', 					{ top: 0, opacity: 1, delay: .5 })
			gsap.to('#text1', 					{ top: 0, opacity: 1, delay: .6 })
			gsap.to('#section7', 				{ top: 0, opacity: 1, delay: .7 })
			gsap.to('#section8', 				{ top: 0, opacity: 1, delay: .8 })
			gsap.to('#section9', 				{ top: 0, opacity: 1, delay: .9 })
			gsap.to('#title2', 					{ top: 0, opacity: 1, delay: 1.1 })
			gsap.to('#bar2', 						{ top: 0, opacity: 1, delay: 1.2 })
			gsap.to('#text2', 					{ top: 0, opacity: 1, delay: 1.3 })
			gsap.to('#section11', 			{ top: 0, opacity: 1, delay: 1.4 })
			gsap.to('#section12', 			{ top: 0, opacity: 1, delay: 1.5 })
			gsap.to('#submitButton', 		{ top: 0, opacity: 1, delay: 1.6 })
		}, 100)
	}


	const submit = e => {
		e.preventDefault()

		if( !form.muscle_mass.length || !form.reduced_dietary_intake.length || !form.inflammation.length ){
			showError()
			return
		}

		( 'No aplica' === form.reduced_dietary_intake && 'No aplica' == form.inflammation ) ? setDiagnosis('NO') : setDiagnosis('SÍ')
		setBreadcrumb('result')
		window.scrollTo({ top: 0, behavior: 'smooth' })
		// console.log('form', form)
		setSent(true)
	}


	return (<Layout status={breadcrumb}>

		{ !sent ? 
			(<form className="mt-6" onSubmit={submit}>
				{ step === 1 ? 
					(<>
						<div className="text-center py-8 md:pt-16 md:pb-10">
							<div id="pageTitle" className="page-title opacity-0">DATOS ANTROPOMÉTRICOS</div>
						</div>

						<section className="max-w-md mx-auto lg:max-w-5xl">
							<div 
								id="introText" 
								className="text-center opacity-0 select-none
													lg:text-brand-aqua lg:text-xl lg:font-semibold lg:text-left">
								Por favor, indique los siguientes datos de su paciente:
							</div>

							<div className="mt-3 space-y-3 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
								<label 
									id="section1" 
									className="bg-brand-aqua-300 border-b-2 border-brand-dark text-brand-aqua-600 flex items-center opacity-0">
									<span className="pl-4 py-2 w-1/2 select-none whitespace-nowrap lg:font-medium">Talla (m):</span>
									<input 
										type="text" 
										className="bg-transparent text-right flex-1 w-1/2 px-4 py-2 focus:outline-none lg:w-full lg:py-3"
										name="tall"
										onChange={handleChange}
										defaultValue={form.tall} />
								</label>

								<label id="section2" className="bg-brand-aqua-300 border-b-2 border-brand-dark text-brand-aqua-600 flex items-center opacity-0">
									<span className="pl-4 py-2 w-1/2 select-none whitespace-nowrap lg:font-medium">Peso actual (kg):</span>
									<input 
										type="text" 
										className="bg-transparent text-right flex-1 w-1/2 px-4 py-2 focus:outline-none lg:w-full lg:py-3"
										name="weight"
										onChange={handleChange}
										defaultValue={form.weight} />
								</label>

								<label id="section3" className="bg-brand-aqua-300 border-b-2 border-brand-dark text-brand-aqua-600 flex items-center opacity-0">
									<span className="pl-4 py-2 w-1/2 select-none whitespace-nowrap lg:font-medium">Peso habitual (kg):</span>
									<input 
										type="text" 
										className="bg-transparent text-right flex-1 w-1/2 px-4 py-2 focus:outline-none lg:w-full lg:py-3"
										name="usual_weight"
										onChange={handleChange}
										defaultValue={form.usual_weight} />
								</label>
							</div>
						</section>

						<div className="lg:grid lg:grid-cols-2 lg:gap-y-3 lg:mt-10">
							<section 
								id="section4" 
								className="mt-8 space-y-2 max-w-md mx-auto opacity-0 lg:mt-0 lg:col-span-1 lg:w-full">
								<div className="text-center lg:text-xl lg:text-left lg:font-medium">Cálculo peso perdido (kg):</div>
								<div className="bg-brand-aqua border-b-4 border-brand-dark text-2xl font-semibold text-center p-2 lg:text-3xl lg:font-extrabold">{form.loss_weight} kg</div>
							</section>

							<div 
								id="section5" 
								className="pt-8 flex gap-x-8 max-w-md mx-auto opacity-0 lg:order-3 lg:w-full lg:items-end">
								<button 
									type="button"
									className={`${form.more_than_6_months === 0 ? 'bg-white' : 'bg-gray-300'} border border-gray-300 p-2 flex-1 select-none lg:text-xl lg:font-medium lg:h-11`}
									onClick={() => setTimeFrame(0)}>
									&lt; 6 MESES
								</button>
								<button 
									type="button"
									className={`${form.more_than_6_months === 1 ? 'bg-white' : 'bg-gray-300'} border border-stone-300 p-2 flex-1 select-none lg:text-xl lg:font-medium lg:h-11`}
									onClick={() => setTimeFrame(1)}>
									&gt; 6 MESES
								</button>
							</div>

							<div id="section10" className="pt-8 max-w-md mx-auto lg:order-4 lg:w-full">
								<div className="text-center lg:text-xl lg:text-left lg:font-medium">Edad:</div>
								<div className="flex gap-x-8 mt-3">
									<button 
										type="button"
										className={`${form.age === 0 ? 'bg-white' : 'bg-gray-300'} border border-gray-300 p-2 flex-1 select-none lg:text-xl lg:font-medium lg:h-11`}
										onClick={() => setAge(0)}>
										&lt; 70 AÑOS
									</button>
									<button 
										type="button"
										className={`${form.age === 1 ? 'bg-white' : 'bg-gray-300'} border border-stone-300 p-2 flex-1 select-none lg:text-xl lg:font-medium lg:h-11`}
										onClick={() => setAge(1)}>
										&gt; 70 AÑOS
									</button>
								</div>
							</div>

							<section 
								id="section6" 
								className="mt-8 space-y-2 max-w-md mx-auto opacity-0 lg:mt-0 lg:col-span-1 lg:w-full">
								<div className="text-center lg:text-xl lg:text-left lg:font-medium">Cálculo de IMC actual (kg/m<sup className="text-xxs">2</sup>):</div>
								<div className="bg-brand-aqua border-b-4 border-brand-dark text-2xl font-semibold text-center p-2 lg:text-3xl lg:font-extrabold">{form.imc} kg/m<sup className="text-xs">2</sup></div>
							</section>
						</div>

						<div id="nextButton" className="pt-14 flex justify-center lg:pt-20">
							<button 
								type="button"
								className="bg-brand-aqua text-white font-bold px-9 py-2.5 transition-all hover:opacity-80 lg:text-2xl lg:tracking-tight lg:px-11"
								onClick={() => validateStep1()}>
								CONTINUAR
							</button>
						</div>
					</>)
					:
					(<div id="section2" className="opacity-0">
						<div className="text-center pt-8 pb-6 max-w-xs mx-auto md:pt-16 md:pb-10 lg:max-w-full lg:pb-2">
							<div id="pageTitle2" className="page-title opacity-0">CRITERIOS GLIM PARA EL DIAGNÓSTICO DE DESNUTRICIÓN*</div>
						</div>

						<div id="introText2" className="text-center max-w-md mx-auto lg:text-xl lg:max-w-full">*Diagnóstico de desnutrición: requiere al menos <br className="lg:hidden"/>1 criterio fenotípico y 1 criterio etiológico.</div>

						<fieldset className="max-w-md mx-auto lg:max-w-full">
							<legend className="text-center">
								<div id="bar1" className="bg-brand-aqua-600 w-24 h-1 mx-auto mt-10"></div>
								<div id="title1" className="page-title text-brand-aqua-600 mt-5">CRITERIO FENOTÍPICO</div>
							</legend>

							<section className="mt-7 lg:space-y-0 lg:max-w-3xl lg:mx-auto">
								<div id="text1" className="text-brand-aqua-600 font-medium leading-tight lg:text-xl">Por favor, responda las siguientes preguntas sobre su paciente:</div>

								<div className="pt-6 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12">
									<div id="section7" className="space-y-2">
										<div className="lg:text-xl">Pérdida de peso (%):</div>
										<div className="bg-brand-aqua font-medium px-3 py-1.5 lg:text-xl">{form.loss_weight_info}</div>
									</div>

									<div id="section8" className="space-y-2">
										<div className="lg:text-xl">Bajo IMC (kg/m<sup className="text-xxs">2</sup>):</div>
										<div className="bg-brand-aqua font-medium px-3 py-1.5 lg:text-xl">{form.low_imc}</div>
									</div>

									<div id="section9" className="space-y-2">
										<div className="lg:text-xl">Masa muscular reducida:</div>
										<select 
											name="muscle_mass" 
											onChange={handleSelectChange}
											className="border border-brand-aqua w-full px-2 py-1 focus:outline-none">
											<option value="">Selecciona</option>
											<option value="Déficit leve a moderado">Déficit leve a moderado</option>
											<option value="Déficit severo">Déficit severo</option>
											<option value="No aplica">No aplica</option>
										</select>
									</div>
								</div>
							</section>
						</fieldset>


						<fieldset className="max-w-md mx-auto lg:max-w-full">
							<legend className="text-center pt-5">
								<div id="bar2" className="bg-brand-aqua-600 w-24 h-1 mx-auto mt-10"></div>
								<div id="title2" className="page-title text-brand-aqua-600 mt-5">CRITERIO ETIOLÓGICO</div>
							</legend>

							<section className="mt-7 lg:max-w-3xl lg:mx-auto">
								<div id="text2" className="text-brand-aqua-600 font-medium leading-tight lg:text-xl">Por favor, responda las siguientes preguntas sobre su paciente:</div>

								<div className="pt-6 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-12">
									<div id="section11" className="space-y-2">
										<div className="lg:text-xl lg:leading-none">Reducción de la ingesta o asimilación de alimentos:</div>
										<select 
											name="reduced_dietary_intake" 
											onChange={handleSelectChange} 
											className="border border-brand-aqua w-full px-2 py-1 focus:outline-none">
											<option value="">Selecciona</option>
											<option value="&lt;50% de las necesidades energéticas &gt;1 semana">&lt;50% de las necesidades energéticas &gt;1 semana</option>
											<option value="Cualquier reducción durante &gt;2 semanas">Cualquier reducción durante &gt;2 semanas</option>
											<option value="Cualquier condición GI crónica que tenga un impacto adverso en la asmilación o absorción de alimentos">Cualquier condición GI crónica que tenga un impacto adverso en la asmilación o absorción de alimentos</option>
											<option value="No aplica">No aplica</option>
										</select>
									</div>

									<div id="section12" className="space-y-2">
										<div className="lg:text-xl lg:h-10">Inflamación:</div>
										<select 
											name="inflammation" 
											onChange={handleSelectChange} 
											className="border border-brand-aqua w-full px-2 py-1 focus:outline-none">
											<option value="">Selecciona</option>
											<option value="Relacionada a enfermedad/lesión aguda">Relacionada a enfermedad/lesión aguda</option>
											<option value="Relacionada a enfermedad/lesión crónica">Relacionada a enfermedad/lesión crónica</option>
											<option value="No aplica">No aplica</option>
										</select>
									</div>
								</div>
							</section>
						</fieldset>

						<div id="submitButton" className="pt-14 flex justify-center lg:pt-20">
							<button className="bg-brand-aqua text-white font-bold px-9 py-2.5 transition-all hover:opacity-80">CONTINUAR</button>
						</div>
					</div>)
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
				className="bg-red-500 text-white text-sm leading-tight px-3 py-2 flex gap-x-2 inset-x-2 bottom-2 fixed opacity-0 pointer-events-none z-30 lg:text-base lg:pb-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-white w-6">
					<path d="M12.865 3.00017L22.3912 19.5002C22.6674 19.9785 22.5035 20.5901 22.0252 20.8662C21.8732 20.954 21.7008 21.0002 21.5252 21.0002H2.47266C1.92037 21.0002 1.47266 20.5525 1.47266 20.0002C1.47266 19.8246 1.51886 19.6522 1.60663 19.5002L11.1329 3.00017C11.4091 2.52187 12.0206 2.358 12.4989 2.63414C12.651 2.72191 12.7772 2.84815 12.865 3.00017ZM10.9989 16.0002V18.0002H12.9989V16.0002H10.9989ZM10.9989 9.00017V14.0002H12.9989V9.00017H10.9989Z"></path>
				</svg>
				<span className="top-1 relative">Debes completar todas las opciones antes de continuar</span>
			</div>) :
			null 
		}

	</Layout>)
}