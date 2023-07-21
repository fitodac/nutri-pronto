import { useState } from 'react'
import Link from 'next/link'
import { jsPDF } from 'jspdf'

import LinkToPdf from './LinkToPdf'
import CreatePDF from './CreatePdf'
import RecommendationsY from './RecommendationsY'
import RecommendationsN from './RecommendationsN'

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

			<div className="bg-brand-dark border-b-4 border-brand-aqua text-white text-3xl font-bold text-center leading-none pt-3 pb-2 mt-3 select-none">{ diagnosis }</div>

			<div className="page-title text-center mt-7">RECOMENDACIONES</div>
			{ diagnosis === 'SÍ' ? <RecommendationsY /> : <RecommendationsN /> }
			
			<div className="mt-10 flex flex-col gap-4">
				{ diagnosis === 'SÍ' ? <LinkToPdf /> : null }

				<Link href="/glim" className="bg-brand-aqua text-white font-bold text-center leading-none w-full max-w-xs p-4 mx-auto select-none transition-all hover:opacity-80">REALIZAR DIAGNÓSTICO GLIM</Link>
			</div>
		</section>


		<div className="bg-brand-dark bg-opacity-20 leading-tight px-6 pt-5 pb-20 -mx-6 -mb-24 mt-8">
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