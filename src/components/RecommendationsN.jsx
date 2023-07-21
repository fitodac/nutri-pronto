import Image from 'next/image'

export default function RecommendationsN(){
	return (<>
		<div className="text-center mt-3">Realice seguimiento nutricional del paciente:</div>

		<div className="leading-tight space-y-6 mt-6">
			<div className="flex gap-x-4">
				<div className="">
					<Image
						className="w-12 max-w-xs mx-auto sm:w-14"
						src="../scales.svg"
						alt="Balanza"
						width={1}
						height={1} />
				</div>
				<div className="pl-4 relative">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-brand-dark w-2 left-0 top-2 absolute">
						<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
					</svg>
					<p>Pida al paciente que lleve un <span className="text-brand-aqua font-medium">seguimiento de su peso habitual</span>, especialmente si experimenta pérdida de peso.</p>
				</div>
			</div>

			<div className="flex gap-x-4">
				<div className="">
					<Image
						className="w-12 max-w-xs mx-auto sm:w-14"
						src="../bottle-apple.svg"
						alt="Balanza"
						width={1}
						height={1} />
				</div>
				<div className="pl-4 relative">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-brand-dark w-2 left-0 top-2 absolute">
						<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
					</svg>
					<p>Acoseje a su paciente <span className="text-brand-aqua font-medium">continuar o incluso incrementar su ingesta oral</span>, evitando en todo caso dietas no restricciones alimenticias.</p>
				</div>
			</div>
		</div>
	</>)
}