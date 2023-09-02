import { useState, useEffect } from 'react'
import gsap from 'gsap'

import Layout from '../layouts/Layout'
import List from '../components/List'
import Results from '../components/ResultsPronto'
import Matomo from '../utils/matomo'

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
	['¿Ha notado cambios en su capacidad de llevar a cabo actividades de la vida diaria?',
	'Por ejemplo: abrir botellas, levantarse de una silla, subir escaleras o llevar objetos pesados'],
	['¿Se siente cansado?'],
	['¿Siente a sus músculos más débiles?']
]

const form_value = { option1: null, option2: null, option3: null }
// const form_value = { option1: 1, option2: 1, option3: 1 }


export default function ProntoPage(){

	const [form, setForm] = useState({...form_value})
	const [sent, setSent] = useState(false)
	const [error, setError] = useState(false)
	const [breadcrumb, setBreadcrumb] = useState('pronto')

	useEffect(() => {
		Matomo()

		sessionStorage.setItem('nutripronto', 1)
		sessionStorage.removeItem('nutripronto_result')

		gsap.set('#pageTitle', { top: 60, position: 'relative', opacity: 0 })
		gsap.set('#introText', { top: 60, position: 'relative', opacity: 0 })
		gsap.set('#section1', { top: 60, position: 'relative', opacity: 0 })
		gsap.set('#section2', { top: 60, position: 'relative', opacity: 0 })
		gsap.set('#section3', { top: 60, position: 'relative', opacity: 0 })
		gsap.set('#submitButton', { top: 60, position: 'relative', opacity: 0 })

		gsap.to('#pageTitle', { top: 0, opacity: 1 })
		gsap.to('#introText', { top: 0, opacity: 1, delay: .2 })
		gsap.to('#section1', { top: 0, opacity: 1, delay: .4 })
		gsap.to('#section2', { top: 0, opacity: 1, delay: .6 })
		gsap.to('#section3', { top: 0, opacity: 1, delay: .8 })
		gsap.to('#submitButton', { top: 0, opacity: 1, delay: 1 })
	}, [])

	const handleChange = e => {
		const f = {...form}
		f[e.target.name] = parseInt(e.target.value)
		setForm(f)
	}

	const formReset = () => {
		setForm({...form_value})
		setBreadcrumb('pronto')
		sessionStorage.removeItem('nutripronto_result')
		setSent(false)
	}

	const submit = e => {
		e.preventDefault()

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
			if( form.option1 === 1 || form.option2 === 1 || form.option3 === 1 ){ 
				sessionStorage.setItem('nutripronto_result', 'SÍ')
			}else{ 
				sessionStorage.setItem('nutripronto_result', 'NO')
			}
			setBreadcrumb('result')
			window.scrollTo({ top: 0, behavior: 'smooth' })
			setSent(true)
		}
	}


	return (<Layout status={breadcrumb}>
		{ !sent ? 
			(<div className="max-w-md mx-auto lg:max-w-full">
				<div className="text-center py-8 md:pt-16 md:pb-10">
					<div id="pageTitle" className="page-title">CUESTIONARIO PRONTO</div>
				</div>

				<div id="introText" className="text-brand-aqua-600 font-medium lg:text-xl lg:font-semibold">Por favor, responda las siguientes preguntas sobre su paciente:</div>

				<form className="mt-6" onSubmit={submit}>
					
					<div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-10">
						<section id="section1" className="space-y-3">
							<div className="lg:text-xl lg:font-semibold lg:leading-tight">
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



						<section id="section2" className="space-y-3">
							<div className="lg:text-xl lg:font-semibold lg:leading-tight">
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



						<section id="section3" className="space-y-3">
							<div className="lg:text-xl lg:font-semibold lg:leading-tight">
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


					<div id="submitButton" className="pt-14 flex justify-center">
						<button className="bg-brand-aqua text-white font-bold px-9 py-2.5 transition-all hover:opacity-80 lg:text-2xl lg:tracking-tight lg:px-11">CONTINUAR</button>
					</div>

				</form>
			</div>) 
			
			
			:
			
			// RESULTS
			(<Results props={{ formReset: () => formReset() }} />)
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