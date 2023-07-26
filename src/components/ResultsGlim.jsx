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
	const secondaryContainer = useRef(null)
	const linkContainer = useRef(null)

	// PDF
	const generatePDF = async () => {
		var doc = new jsPDF('p', 'mm', [200, (props.diagnosis === 'SÍ' ? 310 : 280)])
		
		await html2canvas(mainContainer.current).then(canvas => {
			doc.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 43, 0, 
				120, 
				props.diagnosis === 'SÍ' ? 190 : 190, 
				'mainContainer', 'NONE')
		})

		if( props.diagnosis === 'SÍ' ){
			await html2canvas(linkContainer.current).then(canvas => {
				doc.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 55, 190, 100, 20, 'linkContainer', 'NONE')
				doc.link(55, 190, 100, 20, {url: process.env.LINK_2_PDF_DOCUMENT})
			})
		}

		await html2canvas(secondaryContainer.current).then(canvas => {
			doc.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 48, 
				props.diagnosis === 'SÍ' ? 218 : 190, 
				115, 
				70, 
				'secondaryContainer', 'NONE')
		})

		// doc.output('dataurlnewwindow')
		doc.save(`pronto-${Date.now()}.pdf`)
	}


	return (<section>
		<section className="max-w-md mx-auto pb-8">
			<div ref={mainContainer} className="pb-10">
				<div className="text-center pt-8 pb-4 max-w-xs mx-auto md:pt-16 md:pb-10">
					<div className="page-title">RESULTADO</div>
				</div>

				<div className="text-center">Sospecha de desnutrición:</div>

				<div className="bg-brand-dark border-b-4 border-brand-aqua text-white text-3xl font-bold text-center leading-none pt-3 pb-2 mt-3 select-none">{ diagnosis }</div>

				<div className="bg-brand-aqua-600 w-24 h-1 mx-auto mt-10"></div>
				<div className="page-title text-brand-aqua-600 text-center mt-4">CRITERIOS GLIM</div>

				<div className="mt-4">El diagnóstico de desnutrición de su paciente mediante los criterios GLIM es:</div>
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
					<div className="space-y-2 max-w-md mx-auto">
						<div className="">Cálculo de IMC actual (kg/m<sup className="text-xs">2</sup>):</div>
						<div className="bg-brand-aqua border-b-4 border-brand-dark text-2xl font-semibold text-center p-2">{props.imc} kg</div>
					</div>

					<div className="space-y-2 max-w-md mx-auto">
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