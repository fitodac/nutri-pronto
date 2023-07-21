import Image from 'next/image'

export default function RecommendationsY(){
	return (<>
		<div className="text-center mt-3">Intervención nutricional recomendada:</div>

		<div className="leading-tight space-y-6 mt-6">
			<div className="flex gap-x-4">
				<div className="">
					<Image
						className="w-12 max-w-xs mx-auto sm:w-14"
						src="../bottles.svg"
						alt="Tramaiento nutricional"
						width={1}
						height={1} />
				</div>
				<div className="pl-4 relative">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-brand-dark w-2 left-0 top-2 absolute">
						<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
					</svg>
					<p>Es posible que su paciente necesite un tratamiento nutricional basándonos en las guías ESPEN/ESMO para pacientes con cáncer.</p>
				</div>
			</div>

			<div className="flex gap-x-4">
				<div className="">
					<Image
						className="w-12 max-w-xs mx-auto sm:w-14"
						src="../diagram.svg"
						alt="Diagrama"
						width={1}
						height={1} />
				</div>
				<div className="pl-4 relative">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-brand-dark w-2 left-0 top-2 absolute">
						<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
					</svg>
					<p>A continuación, desde Abbott Nutrition le facilitamos un algoritmo de decisión de nutrición enteral en paciente oncológico, donde podrá igualmente valorar los suplementos nutricionales valorar los suplementos nutricionales que mejor respondan a las necesidades de su paciente.</p>
				</div>
			</div>
		</div>
	</>)
}