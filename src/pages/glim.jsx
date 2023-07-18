import { useState, useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

import Layout from '../layouts/Layout'
import List from '../components/List'
import Results from '../components/Results'

const form_value = {option1: null, option2: null, option3: null }

export default function GlimPage(){

	const [form, setForm] = useState({...form_value})
	const [sent, setSent] = useState(false)
	const [error, setError] = useState(false)
	const [malnutrition, setMalnutrition] = useState(null)
	const [breadcrumb, setBreadcrumb] = useState('glim')
	const [step, setStep] = useState(1)

	useEffect(() => {

	}, [])

	const handleChange = e => {
		const f = {...form}
		f[e.target.name] = parseInt(e.target.value)
		setForm(f)
	}

	const formReset = () => setForm({...form_value})

	const submit = e => {
		e.preventDefault()
	}


	return (<Layout status={breadcrumb}>

		{ !sent ? 
			(<form className="mt-6" onSubmit={submit}>
				{ step === 1 ? 
					(<>
						<div className="text-center py-8 md:pt-16 md:pb-10">
							<div id="pageTitle" className="page-title">DATOS ANTROPOMÉTRICOS</div>
						</div>

						<div id="introText" className="text-center">Por favor, indique los siguientes datos de su paciente:</div>

						
						<section className="space-y-3 max-w-sm mx-auto">

							<label className="bg-brand-aqua-300 border-b-2 border-brand-dark text-brand-aqua-600 flex items-center">
								<span className="pl-4 py-2">Talla (m):</span>
								<input 
									type="text" 
									className="bg-transparent flex-1 px-4 py-2 focus:outline-none" />
							</label>

							<label className="bg-brand-aqua-300 border-b-2 border-brand-dark text-brand-aqua-600 flex items-center">
								<span className="pl-4 py-2">Peso actual (kg):</span>
								<input 
									type="text" 
									className="bg-transparent flex-1 px-4 py-2 focus:outline-none" />
							</label>

							<label className="bg-brand-aqua-300 border-b-2 border-brand-dark text-brand-aqua-600 flex items-center">
								<span className="pl-4 py-2">Peso habitual (kg):</span>
								<input 
									type="text" 
									className="bg-transparent flex-1 px-4 py-2 focus:outline-none" />
							</label>

						</section>

						<section className="mt-8 space-y-2 max-w-sm mx-auto">
							<div className="text-center">Cálculo peso perdido (kg):</div>
							<div className="bg-brand-aqua border-b-4 border-brand-dark text-2xl font-semibold text-center p-2">00,00 kg</div>
						</section>

						<div className="mt-4 flex gap-x-8 max-w-sm mx-auto">
							<button className="bg-white border border-stone-300 p-2 flex-1">&lt; 6 MESES</button>
							<button className="bg-white border border-stone-300 p-2 flex-1">&gt; 6 MESES</button>
						</div>

						<section className="mt-8 space-y-2 max-w-sm mx-auto">
							<div className="text-center">Cálculo de IMC actual (kg/m<sup className="text-xxs">2</sup>):</div>
							<div className="bg-brand-aqua border-b-4 border-brand-dark text-2xl font-semibold text-center p-2">00,00 kg</div>
						</section>

						<div id="nextButton" className="pt-14 flex justify-center">
							<button 
								type="button"
								className="bg-brand-aqua text-white font-bold px-9 py-2.5 transition-all hover:opacity-80"
								onClick={() => setStep(2)}>
								CONTINUAR
							</button>
						</div>
					</>)
					:
					(<>
						<div className="text-center pt-8 pb-6 max-w-xs mx-auto md:pt-16 md:pb-10">
							<div className="page-title">CRITERIOS GLIM PARA EL DIAGNÓSTICO DE DESNUTRICIÓN*</div>
						</div>

						<div className="text-center max-w-sm mx-auto">*Diagnóstico de desnutrición: requiere al menos 1 criterio fenotípico y 1 criterio etiológico.</div>

						<fieldset>
							<legend className="text-center">
								<div className="bg-brand-aqua w-24 h-1 mx-auto mt-10"></div>
								<div className="page-title text-brand-aqua mt-5">CRITERIO FENOTÍPICO</div>
							</legend>

							<section className="mt-7 space-y-6">
								<div className="text-brand-aqua font-medium">Por favor, responda las siguientes preguntas sobre su paciente:</div>

								<div className="space-y-2">
									<div className="">Pérdida de peso (%):</div>
									<div className="bg-brand-aqua font-medium px-3 py-1.5">5-10% en los últimos 6 meses</div>
								</div>

								<div className="space-y-2">
									<div className="">Bajo IMC (kg/m<sup className="text-xxs">2</sup>):</div>
									<div className="bg-brand-aqua font-medium px-3 py-1.5">&lt; 20 en &lt; 70 años</div>
								</div>

								<div className="space-y-2">
									<div className="">Masa muscular reducida:</div>
									<select name="" id="" className="border border-brand-aqua w-full px-2 py-1 focus:outline-none">
										<option value="">Selecciona</option>
										<option value="">Déficit leve a moderado</option>
										<option value="">Déficit severo</option>
										<option value="">No aplica</option>
									</select>
								</div>
							</section>
						</fieldset>


						<fieldset>
							<legend className="text-center pt-5">
								<div className="bg-brand-aqua w-24 h-1 mx-auto mt-10"></div>
								<div className="page-title text-brand-aqua mt-5">CRITERIO ETIOLÓGICO</div>
							</legend>

							<section className="mt-7 space-y-6">
								<div className="text-brand-aqua font-medium">Por favor, responda las siguientes preguntas sobre su paciente:</div>

								<div className="space-y-2">
									<div className="">Reducción de la ingesta o asimilación de alimentos:</div>
									<select name="" id="" className="border border-brand-aqua w-full px-2 py-1 focus:outline-none">
										<option value="">Selecciona</option>
										<option value="">&lt;50% de las necesidades energéticas &gt;1 semana</option>
										<option value="">Cualquier reducción durante &gt;2 semanas</option>
										<option value="">Cualquier condición GI crónica que tenga un impacto adverso en la asmilación o absorción de alimentos</option>
										<option value="">No aplica</option>
									</select>
								</div>

								<div className="space-y-2">
									<div className="">Inflamación:</div>
									<select name="" id="" className="border border-brand-aqua w-full px-2 py-1 focus:outline-none">
										<option value="">Selecciona</option>
										<option value="">Relacionada a enfermedad/lesión aguda</option>
										<option value="">Relacionada a enfermedad/lesión crónica</option>
										<option value="">No aplica</option>
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
					<div className="bg-brand-aqua text-white font-bold text-center leading-none w-full max-w-xs p-4 mx-auto select-none transition-all hover:opacity-80">ALGORITMO DE DECISIÓN DE NUTRICIÓN ENTERAL EN PACIENTE ONCOLÓGICO</div>
					<Link href="/glim" className="bg-brand-aqua text-white font-bold text-center leading-none w-full max-w-xs p-4 mx-auto select-none transition-all hover:opacity-80">REALIZAR DIAGNÓSTICO GLIM</Link>
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