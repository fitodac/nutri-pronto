import Content from '../utils/content'
import Image from 'next/image'

export default function RecommendationsY(){
	return (<>
		<div className="text-center mt-3 lg:text-xl lg:font-medium">{ Content.recommendations.y.title }</div>

		<div className="leading-tight space-y-6 mt-6">
			<div className="flex gap-x-4">
				<div className="">
					<Image
						className="w-12 max-w-xs mx-auto sm:w-14"
						src="../bottles.svg"
						alt="Tramaiento nutricional"
						id="recommendationIcon1"
						width={1}
						height={1} />
				</div>
				<div className="pl-4 relative">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-brand-dark w-2 left-0 top-2 absolute">
						<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
					</svg>
					<p className="lg:text-xl lg:font-medium lg:leading-tight">{ Content.recommendations.y.a }</p>
				</div>
			</div>

			<div className="flex gap-x-4">
				<div className="">
					<Image
						className="w-12 max-w-xs mx-auto sm:w-14"
						src="../diagram.svg"
						alt="Diagrama"
						id="recommendationIcon2"
						width={1}
						height={1} />
				</div>
				<div className="pl-4 relative">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-brand-dark w-2 left-0 top-2 absolute">
						<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
					</svg>
					<p className="lg:text-xl lg:font-medium lg:leading-tight">{ Content.recommendations.y.b }</p>
				</div>
			</div>
		</div>
	</>)
}