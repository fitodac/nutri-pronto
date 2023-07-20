import { useState, useEffect } from 'react'
import Link from 'next/link'

import LinkToPdf from './LinkToPdf'
import CreatePDF from './CreatePdf'

export default function ResultsPage({props}){

	const [diagnosis, setDiagnosis] = useState(sessionStorage.getItem('nutripronto_result'))

	return (<section>
		<section className="max-w-md mx-auto pb-8">
			<div className="text-center pt-8 pb-4 max-w-xs mx-auto md:pt-16 md:pb-10">
				<div className="page-title">RESULTADO</div>
			</div>

			<div className="text-center">Sospecha de desnutrición:</div>

			<div className="bg-brand-dark border-b-4 border-brand-aqua text-white text-3xl font-bold text-center leading-none pt-3 pb-2 mt-3">{ diagnosis }</div>

			<div className="bg-brand-aqua-600 w-24 h-1 mx-auto mt-10"></div>
			<div className="page-title text-brand-aqua-600 text-center mt-4">CRITERIOS GLIM</div>

			<div className="mt-4">El diagnóstico de desnutrición de su paciente mediante los criterios GLIM es:</div>
			<div className="bg-brand-aqua border-b-4 border-brand-dark text-brand-dark text-3xl font-bold text-center leading-none pt-3 pb-2 mt-3">{props.diagnosis}</div>


			<div className="text-center py-4 max-w-xs mx-auto md:pt-16 md:pb-10">
				<div className="page-title">RECOMENDACIONES</div>
			</div>

			<div className="text-center">Realice seguimiento nutricional del paciente:</div>

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

			<div className="bg-brand-aqua-600 w-24 h-1 mx-auto mt-10"></div>
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

		</section>


		<div className="bg-brand-dark bg-opacity-20 leading-tight px-6 pt-5 pb-24 -mx-6 -mb-24 mt-8">
			<div className="max-w-md mx-auto ">
				<p className="">
					<span className="underline">Una vez que cierre o reinicie</span> este formulario, 
					todos <span className="underline">los datos introducidos serán borrados permanentemente</span>. 
					Abbott no tiene acceso en ningún momento a los datos introducidos.
				</p>

				<div className="w-full mt-6 flex flex-col items-center gap-4">
					<Link 
						href="/pronto"
						className="bg-brand-dark text-white font-bold leading-none text-center w-full max-w-xs p-3 select-none transition-all hover:opacity-90">
						NUEVA VALORACIÓN
					</Link>

					<CreatePDF />
				</div>
			</div>
		</div>

	</section>)
}