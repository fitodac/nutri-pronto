import { useState } from 'react'
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
	const [breadcrumb, setBreadcrumb] = useState('pronto')

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


	return (<Layout status="glim">
		<div className="text-center py-8 md:pt-16 md:pb-10">
			<div id="pageTitle" className="page-title">DATOS ANTROPOMÉTRICOS</div>
		</div>

		{ !sent ? 
			(<>
				<div id="introText" className="text-brand-aqua-600 font-medium">Por favor, indique los siguientes datos de su paciente:</div>
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