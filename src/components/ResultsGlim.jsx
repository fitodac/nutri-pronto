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
		console.log('props', props)
		var doc = new jsPDF('p', 'mm', [200, (props.diagnosis === 'SÍ' ? 310 : 280)])

		doc.setTextColor(30, 39, 46)
		doc.setFont('helvetica', 'bold')
		doc.setFontSize(24)
		doc.text('RESULTADO', 100, 20, { align: 'center' })
		
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

		doc.setFillColor(113, 195, 189)
		doc.rect(90, 55, 20, 1, 'F')

		doc.setTextColor(113, 195, 189)
		doc.setFont('helvetica', 'bold')
		doc.setFontSize(22)
		doc.text('CRITERIOS GLIM', 100, 65, { align: 'center' })

		doc.setTextColor(30, 39, 46)
		doc.setFontSize(10)
		doc.setFont('helvetica', 'normal')
		doc.text(Content.glim.results_intro, 100, 74, { align: 'center' })

		doc.setFillColor(113, 195, 189)
		doc.rect(45, 80, 110, 13, 'F')
		doc.setFillColor(30, 39, 46)
		doc.rect(45, 93, 110, .6, 'F')
		doc.setTextColor(30, 39, 46)
		doc.setFont('helvetica', 'bold')
		doc.setFontSize(20)
		doc.text(props.diagnosis, 100, 89, { align: 'center' })

		doc.setTextColor(30, 39, 46)
		doc.setFont('helvetica', 'bold')
		doc.setFontSize(22)
		doc.text('RECOMENDACIONES', 100, 106, { align: 'center' })

		doc.setFontSize(12)
		doc.setFont('helvetica', 'normal')
		doc.text(props.diagnosis === 'SÍ' ? Content.recommendations.y.title : Content.recommendations.n.title, 100, 114, { align: 'center' })

		await html2canvas(document.getElementById('recommendationIcon1'))
		.then(canvas => {
			doc.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 45, 122, 10, diagnosis === 'SÍ' ? 13 : 11, 'recommendationIcon1', 'NONE')
		})
		doc.text(props.diagnosis === 'SÍ' ? Content.recommendations.y.a : `${Content.recommendations.n.a[0]} ${Content.recommendations.n.a[1]} ${Content.recommendations.n.a[2]}`, 63, 125, { maxWidth: 95})

		await html2canvas(document.getElementById('recommendationIcon2'))
		.then(canvas => {
			doc.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 45, 142, 12, 13, 'recommendationIcon2', 'NONE')
		})
		doc.text(props.diagnosis === 'SÍ' ? Content.recommendations.y.b : `${Content.recommendations.n.b[0]} ${Content.recommendations.n.b[1]} ${Content.recommendations.n.b[2]}`, 63, 145, { maxWidth: 95 })

		if( props.diagnosis === 'SÍ' ){
			doc.setFillColor(113, 195, 189)
			doc.rect(60, 180, 78, 30, 'F')
			doc.setFont('helvetica', 'bold')
			doc.setFontSize(13)
			doc.setTextColor(255, 255, 255)
			doc.text(Content.recommendations.algorithm_link, 100, 188, { maxWidth: 60, align: 'center' })
			doc.link(60, 180, 78, 30, {url: process.env.LINK_2_PDF_DOCUMENT})
		}

		const top = props.diagnosis === 'SÍ' ? 220 : 168

		doc.setFillColor(113, 195, 189)
		doc.rect(90, top, 20, 1, 'F')

		doc.setTextColor(113, 195, 189)
		doc.setFont('helvetica', 'bold')
		doc.setFontSize(22)
		doc.text('DATOS ANTROPOMÉTRICOS', 100, top+12, { align: 'center' })

		doc.setTextColor(30, 39, 46)
		doc.setFontSize(12)
		doc.setFont('helvetica', 'normal')
		doc.text('Cálculo de IMC actual (kg/m2):', 45, top+23)

		doc.setFillColor(113, 195, 189)
		doc.rect(45, top+26, 110, 13, 'F')
		doc.setFillColor(30, 39, 46)
		doc.rect(45, top+39, 110, .6, 'F')
		doc.setTextColor(30, 39, 46)
		doc.setFont('helvetica', 'bold')
		doc.setFontSize(18)
		doc.text(props.imc, 100, top+35, { align: 'center' })

		doc.setTextColor(30, 39, 46)
		doc.setFontSize(12)
		doc.setFont('helvetica', 'normal')
		doc.text('Cálculo peso perdido (kg):', 45, top+48)

		doc.setFillColor(113, 195, 189)
		doc.rect(45, top+51, 110, 13, 'F')
		doc.setFillColor(30, 39, 46)
		doc.rect(45, top+64, 110, .6, 'F')
		doc.setTextColor(30, 39, 46)
		doc.setFont('helvetica', 'bold')
		doc.setFontSize(18)
		doc.text(`${props.loss_weight.toString()} kg`, 100, top+60, { align: 'center' })

		// doc.output('dataurlnewwindow')
		doc.save(`pronto-${Date.now()}.pdf`)
	}


	return (<section>
		<section className="max-w-md mx-auto pb-8 lg:max-w-xl">
			<div ref={mainContainer} className="pb-10">
				<div className="text-center pt-8 pb-4 max-w-xs mx-auto md:pt-16 md:pb-10">
					<div className="page-title">RESULTADO</div>
				</div>

				<div className="text-center">Sospecha de desnutrición:</div>

				<div 
					id="ignoreThis"
					className="bg-brand-dark border-b-4 border-brand-aqua text-white text-3xl font-bold text-center leading-none pt-4 pb-3 mt-3 select-none">
					{ diagnosis }
				</div>

				<div className="bg-brand-aqua-600 w-24 h-1 mx-auto mt-10"></div>
				<div className="page-title text-brand-aqua-600 text-center mt-4">CRITERIOS GLIM</div>

				<div className="mt-4">{Content.glim.results_intro}</div>
				<div className="bg-brand-aqua bg-opacity-90 border-b-4 border-brand-dark text-brand-dark text-3xl font-bold text-center leading-none pt-3 pb-2 mt-3 select-none">{props.diagnosis}</div>

				<div className="page-title text-center mt-7">RECOMENDACIONES</div>
				{ props.diagnosis === 'SÍ' ? <RecommendationsY /> : <RecommendationsN /> }
			</div>

			<div className="flex flex-col gap-4">
				<div ref={linkContainer}>{ props.diagnosis === 'SÍ' ? (<><LinkToPdf /><div className="h-10" /></>) : null }</div>
			</div>

			<div ref={secondaryContainer}>
				<div className="bg-brand-aqua-600 w-24 h-1 mx-auto"></div>
				<div className="page-title text-brand-aqua-600 text-center mt-4">DATOS ANTROPOMÉTRICOS</div>

				<div className="mt-6 space-y-4">
					<div className="space-y-2 max-w-md mx-auto lg:max-w-xl">
						<div className="">Cálculo de IMC actual (kg/m<sup className="text-xs">2</sup>):</div>
						<div className="bg-brand-aqua border-b-4 border-brand-dark text-2xl font-semibold text-center p-2">{props.imc} kg</div>
					</div>

					<div className="space-y-2 max-w-md mx-auto lg:max-w-xl">
						<div className="">Cálculo peso perdido (kg):</div>
						<div className="bg-brand-aqua border-b-4 border-brand-dark text-2xl font-semibold text-center p-2">{props.loss_weight} kg</div>
					</div>
				</div>
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
					<Link 
						href="/pronto"
						className="bg-brand-dark text-white font-bold leading-none text-center w-full max-w-xs p-3 select-none transition-all hover:opacity-90 lg:text-xl">
						NUEVA VALORACIÓN
					</Link>

					<CreatePDF generatePDF={() => generatePDF()} />
				</div>
			</div>
		</div>

	</section>)
}