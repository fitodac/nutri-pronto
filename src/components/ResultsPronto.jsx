import { useState } from 'react'
import Link from 'next/link'
import { jsPDF } from 'jspdf'

import LinkToPdf from './LinkToPdf'
import CreatePDF from './CreatePdf'

export default function ResultsPage({props}){

	const [diagnosis, setDiagnosis] = useState(sessionStorage.getItem('nutripronto_result'))
	const doc = new jsPDF()

	const generatePDF = () => {
		console.log('generatePDF')
		doc.text('Hola mundo!', 10, 10)
		doc.output("dataurlnewwindow")

	}

	return (<section>
		<section className="max-w-md mx-auto">

			<div className="text-center -mt-4">Sospecha de desnutrición</div>

			<div className="bg-brand-dark border-b-4 border-brand-aqua text-white text-3xl font-bold text-center leading-none pt-3 pb-2 mt-3">{ diagnosis }</div>

			<div className="page-title text-center mt-7">RECOMENDACIONES</div>

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
				<LinkToPdf />

				<Link href="/glim" className="bg-brand-aqua text-white font-bold text-center leading-none w-full max-w-xs p-4 mx-auto select-none transition-all hover:opacity-80">REALIZAR DIAGNÓSTICO GLIM</Link>
			</div>
		</section>


		<div className="bg-brand-dark bg-opacity-20 leading-tight px-6 pt-5 pb-24 -mx-6 -mb-24 mt-8">
			<div className="max-w-md mx-auto ">
				<p className="">
					<span className="underline">Una vez que cierre o reinicie</span> este formulario, 
					todos <span className="underline">los datos introducidos serán borrados permanentemente</span>. 
					Abbott no tiene acceso en ningún momento a los datos introducidos.
				</p>

				<div className="w-full mt-6 flex flex-col items-center gap-4">
					<button 
						onClick={() => props.formReset()}
						className="bg-brand-dark text-white font-bold leading-none text-center w-full max-w-xs p-3 select-none transition-all hover:opacity-90">
						NUEVA VALORACIÓN PRONTO
					</button>

					<CreatePDF generatePDF={() => generatePDF()}/>
				</div>
			</div>
		</div>

	</section>)
}