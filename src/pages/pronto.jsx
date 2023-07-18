import { useState } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

import Layout from '../layouts/Layout'
import List from '../components/List'
import Results from '../components/Results'

const label_class = 'flex items-center gap-x-2 leading-none cursor-pointer select-none group'
const input_class = `hidden 
											[&:checked+span]:bg-brand-aqua [&:checked+span]:ring-white [&:checked+span]:ring-4 [&:checked+span]:ring-inset 
											group-hover:[&:not(:checked)+span]:bg-gray-100 group-hover:[&:not(:checked)+span]:ring-white group-hover:[&:not(:checked)+span]:ring-4 group-hover:[&:not(:checked)+span]:ring-inset`
const radio_class = 'bg-white border border-brand-aqua w-6 h-6 transition-all rounded-full'

const list1 = [
	['¿Cuál es su peso habitual?'],
	['¿Su ropa/anillos/dentaduras postizas se ajustan de manera mas holgadas de lo habitual?'],
	['¿Ha tenido que añadir agujeros a su cinturón?']
]

const list2 = [
	[
		'¿Tiene algún síntoma que esté afectando su capacidad para comer y beber?',
		'Por ejemplo: dolor de boca, náuseas, vómitos o cambios de sabor'
	]
]

const list3 = [
	['¿Cuál es su peso habitual?'],
	['¿Su ropa/anillos/dentaduras postizas se ajustan de manera mas holgadas de lo habitual?'],
	['¿Ha tenido que añadir agujeros a su cinturón?']
]

const form_value = {option1: null, option2: null, option3: null }

export default function ProntoPage(){

	const [form, setForm] = useState({...form_value})

	const [sent, setSent] = useState(false)
	const [error, setError] = useState(false)
	const [malnutrition, setMalnutrition] = useState(null)
	const [breadcrumb, setBreadcrumb] = useState('pronto')

	const handleChange = e => {
		const f = {...form}
		f[e.target.name] = parseInt(e.target.value)
		setForm(f)
	}

	const formReset = () => setForm({...form_value})

	const submit = e => {
		e.preventDefault()
		console.log('form', form)

		if( form.option1 === null || form.option2 === null || form.option3 === null ){
			setError(true)
			setTimeout(() => {
				gsap.to('#errorBox', { 
					opacity: 1, 
					onComplete: () => setTimeout(() => {
						gsap.to('#errorBox', { opacity: 0, onComplete: () => setError(false) })
					}, 2000)
				})
			}, 100)
		}else{
			if( form.option1 === 1 && form.option2 === 1 && form.option3 === 1 ){ setMalnutrition('SÍ') }else{ setMalnutrition('NO') }
			setBreadcrumb('result')
			setSent(true)
		}
	}


	return (<Layout status={breadcrumb}>
		<div className="text-center py-8 md:pt-16 md:pb-10">
			<div className="page-title">CUESTIONARIO PRONTO</div>
		</div>

		{ !sent ? 
			(<>
				<div className="text-brand-aqua-600 font-medium">Por favor, responda las siguientes preguntas sobre su paciente:</div>

				<form className="mt-6" onSubmit={submit}>
					
					<div className="space-y-10">
						<section className="space-y-3">
							<div className="">
								<span className="font-semibold pr-1">1.</span>
								<span className="">¿Ha perdido peso involuntariamente (5% a 10% o más) en los últimos 3-6 meses/ desde nuestra última consulta?</span>
							</div>

							<div className="flex gap-x-5">
								<label className={label_class}>
									<input type="radio" name="option1" value="1" onChange={handleChange} className={input_class} />
									<span className={radio_class} />
									<span className="font-medium">SÍ</span>
								</label>

								<label className={label_class}>
									<input type="radio" name="option1" value="0" onChange={handleChange} className={input_class} />
									<span className={radio_class} />
									<span className="font-medium">No</span>
								</label>
							</div>

							<List list={list1} id="list1" />
						</section>



						<section className="space-y-3">
							<div className="">
								<span className="font-semibold pr-1">2.</span>
								<span className="">¿Ha estado comiendo menos de lo habitual en la última semana/ desde nuestra última consulta?</span>
							</div>

							<div className="flex gap-x-5">
								<label className={label_class}>
									<input type="radio" name="option2" value="1" onChange={handleChange} className={input_class} />
									<span className={radio_class} />
									<span className="font-medium">SÍ</span>
								</label>

								<label className={label_class}>
									<input type="radio" name="option2" value="0" onChange={handleChange} className={input_class} />
									<span className={radio_class} />
									<span className="font-medium">No</span>
								</label>
							</div>

							<List list={list2} id="list2" />
						</section>



						<section className="space-y-3">
							<div className="">
								<span className="font-semibold pr-1">3.</span>
								<span className="">¿Ha perdido fuerza o se siente más débil que lo usual desde nuestra última consulta?</span>
							</div>

							<div className="flex gap-x-5">
								<label className={label_class}>
									<input type="radio" name="option3" value="1" onChange={handleChange} className={input_class} />
									<span className={radio_class} />
									<span className="font-medium">SÍ</span>
								</label>

								<label className={label_class}>
									<input type="radio" name="option3" value="0" onChange={handleChange} className={input_class} />
									<span className={radio_class} />
									<span className="font-medium">No</span>
								</label>
							</div>

							<List list={list3} id="list3" />
						</section>
					</div>


					<div className="pt-14 flex justify-center">
						<button className="bg-brand-aqua text-white font-bold px-9 py-2.5 transition-all hover:opacity-80">CONTINUAR</button>
					</div>

				</form>
			</>) 
			
			
			:
			
			
			(<Results 
				props={{
					malnutrition,
					footer_reset_btn: "NUEVA VALORACIÓN PRONTO",
					formReset: () => { 
						setSent(false); 
						formReset(); 
						setMalnutrition(null); 
						setBreadcrumb('pronto'); 
					}
				}}>
				<div className="text-center mt-3">Intervención nutricional recomendada:</div>

				<div className="leading-tight space-y-6 mt-6">
					<div className="flex gap-x-4">
						<div className=""></div>
						<div className="pl-4 relative">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-brand-dark w-2 left-0 top-2 absolute">
								<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
							</svg>
							<p>Es posible que su paciente necesite un tratamiento nutricional basándonos en las guías ESPEN/ESMO para pacientes con cáncer.</p>
						</div>
					</div>

					<div className="flex gap-x-4">
						<div className=""></div>
						<div className="pl-4 relative">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-brand-dark w-2 left-0 top-2 absolute">
								<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
							</svg>
							<p>A continuación, desde Abbott Nutrition le facilitamos un algoritmo de decisión de nutrición enteral en paciente oncológico, donde podrá igualmente valorar los suplementos nutricionales valorar los suplementos nutricionales que mejor respondan a las necesidades de su paciente.</p>
						</div>
					</div>
				</div>

				<div className="mt-10 flex flex-col gap-4">
					<div className="bg-brand-aqua text-white font-bold text-center leading-none max-w-xs p-4 mx-auto">ALGORITMO DE DECISIÓN DE NUTRICIÓN ENTERAL EN PACIENTE ONCOLÓGICO</div>
					<Link href="/glim" className="bg-brand-aqua text-white font-bold text-center leading-none max-w-xs p-4 mx-auto">REALIZAR DIAGNÓSTICO GLIM</Link>
				</div>
			</Results>) 
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