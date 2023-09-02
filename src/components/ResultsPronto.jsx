import { useRef } from 'react'
import Link from 'next/link'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import Content from '../utils/content'

import LinkToPdf from './LinkToPdf'
import CreatePDF from './CreatePdf'
import RecommendationsY from './RecommendationsY'
import RecommendationsN from './RecommendationsN'

export default function ResultsPage({props}){

	const diagnosis = sessionStorage.getItem('nutripronto_result')
	const mainContainer = useRef(null)
	const secondaryContainer = useRef(null)
	const linkContainer = useRef(null)

	// PDF
	const generatePDF = async () => {
		var doc = new jsPDF()

		doc.setTextColor(30, 39, 46)
		doc.setFont('helvetica', 'bold')
		doc.setFontSize(24)
		doc.text('CUESTIONARIO PRONTO', 100, 20, { align: 'center' })
		
		doc.setFontSize(12)
		doc.setFont('helvetica', 'normal')
		doc.text('Sospecha de desnutrición', 45, 31)

		doc.setFillColor(30, 39, 46)
		doc.rect(45, 34, 110, 13, 'F')
		doc.setFillColor(113, 195, 189)
		doc.rect(45, 47, 110, .6, 'F')
		doc.setTextColor(255, 255, 255)
		doc.setFont('helvetica', 'bold')
		doc.setFontSize(20)
		doc.text(diagnosis, 100, 43, { align: 'center' })

		doc.setTextColor(30, 39, 46)
		doc.setFont('helvetica', 'bold')
		doc.setFontSize(24)
		doc.text('RECOMENDACIONES', 100, 63, { align: 'center' })

		doc.setFontSize(10)
		doc.setFont('helvetica', 'normal')
		doc.text(diagnosis === 'SÍ' ? Content.recommendations.y.title : Content.recommendations.n.title, 100, 69, { align: 'center' })

		if( diagnosis === 'SÍ' ){
			doc.addImage('../pdf-images/bottles.png', 'PNG', 45, 80, 10, 13, 'recommendationIcon1', 'NONE')
		}else{
			doc.addImage('../pdf-images/scales.png', 'PNG', 45, 80, 10, 11, 'recommendationIcon1', 'NONE')
		}
		doc.text(diagnosis === 'SÍ' ? Content.recommendations.y.a : `${Content.recommendations.n.a[0]} ${Content.recommendations.n.a[1]} ${Content.recommendations.n.a[2]}`, 63, 83, { maxWidth: 95})


		if( diagnosis === 'SÍ' ){
			doc.addImage('../pdf-images/diagram.png', 'PNG', 45, 100, 12, 13, 'recommendationIcon2', 'NONE')
		}else{
			doc.addImage('../pdf-images/bottle-apple.png', 'PNG', 45, 100, 12, 13, 'recommendationIcon2', 'NONE')
		}
		doc.text(diagnosis === 'SÍ' ? Content.recommendations.y.b : `${Content.recommendations.n.b[0]} ${Content.recommendations.n.b[1]} ${Content.recommendations.n.b[2]}`, 63, 103, { maxWidth: 95 })

		if( diagnosis === 'SÍ' ){
			doc.setFillColor(113, 195, 189)
			doc.rect(60, 130, 78, 30, 'F')
			doc.setFont('helvetica', 'bold')
			doc.setFontSize(13)
			doc.setTextColor(255, 255, 255)
			doc.text(Content.recommendations.algorithm_link, 100, 138, { maxWidth: 60, align: 'center' })
			doc.link(60, 130, 78, 30, {url: process.env.LINK_2_PDF_DOCUMENT})
		}

		// doc.output('dataurlnewwindow')
		doc.save(`pronto-${Date.now()}.pdf`)
	}


	return (<section>
		<section className="max-w-md mx-auto lg:max-w-xl">
			<div className="pb-10">
				<div ref={mainContainer} className="pb-3">
					<div className="text-center pt-8 pb-5 md:pt-16 md:pb-10">
						<div id="pageTitle" className="page-title">CUESTIONARIO PRONTO</div>
					</div>

					<div className="text-center lg:text-xl lg:text-left lg:font-medium">Sospecha de desnutrición</div>
				</div>

				<div 
					id="ignoreThis"
					className="bg-brand-dark border-b-4 border-brand-aqua text-white text-3xl font-bold text-center leading-none pt-4 pb-3 select-none">
					{ diagnosis }
				</div>

				<div ref={secondaryContainer} className="pb-3">
					<div className="page-title text-center mt-7">RECOMENDACIONES</div>
					{ diagnosis === 'SÍ' ? <RecommendationsY /> : <RecommendationsN /> }
				</div>
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