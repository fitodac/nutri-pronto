import { useRef } from 'react'
import Link from 'next/link'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

import LinkToPdf from './LinkToPdf'
import CreatePDF from './CreatePdf'
import RecommendationsY from './RecommendationsY'
import RecommendationsN from './RecommendationsN'

export default function ResultsPage({props}){

	const diagnosis = sessionStorage.getItem('nutripronto_result')
	const mainContainer = useRef(null)
	const linkContainer = useRef(null)

	// PDF
	const generatePDF = async () => {
		var doc = new jsPDF()
		
		await html2canvas(mainContainer.current).then(canvas => {
			doc.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 43, 6, 
				120, 
				diagnosis === 'SÍ' ? 150 : 130, 
				'mainContainer', 'NONE')
		})

		if( diagnosis === 'SÍ' ){
			await html2canvas(linkContainer.current).then(canvas => {
				doc.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 55, 160, 100, 20, 'linkContainer', 'NONE')
				doc.link(55, 160, 100, 20, {url: process.env.LINK_2_PDF_DOCUMENT})
			})
		}

		// doc.output('dataurlnewwindow')
		doc.save(`pronto-${Date.now()}.pdf`)
	}


	return (<section>
		<section className="max-w-md mx-auto lg:max-w-xl">
			<div ref={mainContainer} className="pb-10">
				<div className="text-center pt-8 pb-5 md:pt-16 md:pb-10">
					<div id="pageTitle" className="page-title">CUESTIONARIO PRONTO</div>
				</div>

				<div className="text-center lg:text-xl lg:text-left lg:font-medium">Sospecha de desnutrición</div>

				<div className="bg-brand-dark border-b-4 border-brand-aqua text-white text-3xl font-bold text-center leading-none pt-3 pb-2 mt-3 select-none">{ diagnosis }</div>

				<div className="page-title text-center mt-7">RECOMENDACIONES</div>
				{ diagnosis === 'SÍ' ? <RecommendationsY /> : <RecommendationsN /> }
			</div>
			
			<div className="flex flex-col gap-4">
				<div ref={linkContainer}>{ diagnosis === 'SÍ' ? <LinkToPdf /> : null }</div>

				<Link href="/glim" className="bg-brand-aqua text-white font-bold text-center leading-none w-full max-w-xs p-4 mx-auto select-none transition-all hover:opacity-80 md:max-w-md lg:text-2xl lg:leading-tight">REALIZAR DIAGNÓSTICO GLIM</Link>
			</div>
		</section>


		<div className="bg-brand-dark bg-opacity-20 leading-tight px-6 pt-5 pb-20 -mx-6 -mb-24 mt-8">
			<div className="max-w-md mx-auto lg:max-w-2xl">
				<p className="lg:text-xl lg:leading-tight">
					<span className="underline">Una vez que cierre o reinicie</span> este formulario, 
					todos <span className="underline">los datos introducidos serán borrados permanentemente</span>. 
					Abbott no tiene acceso en ningún momento a los datos introducidos.
				</p>

				<div className="w-full mt-6 flex flex-col items-center gap-4 lg:flex-row">
					<button 
						onClick={() => props.formReset()}
						className="bg-brand-dark text-white font-bold leading-none text-center w-full max-w-xs p-3 select-none transition-all hover:opacity-90 lg:text-xl">
						NUEVA VALORACIÓN PRONTO
					</button>

					<CreatePDF generatePDF={() => generatePDF()}/>
				</div>
			</div>
		</div>

	</section>)
}