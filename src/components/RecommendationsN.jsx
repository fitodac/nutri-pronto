import Content from '../utils/content'
import Image from 'next/image'

export default function RecommendationsN(){
	return (<>
		<div className="text-center mt-3 lg:text-xl lg:font-medium">{Content.recommendations.n.title}</div>

		<div className="leading-tight space-y-6 mt-6">
			<div className="flex gap-x-4">
				<div className="">
					<Image
						className="w-12 max-w-xs mx-auto sm:w-14"
						src="../scales.svg"
						alt="Balanza"
						id="recommendationIcon1"
						width={1}
						height={1} />
				</div>
				<div className="pl-4 relative">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-brand-dark w-2 left-0 top-2 absolute">
						<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
					</svg>
					<p className="lg:text-xl lg:font-medium lg:leading-tight">{Content.recommendations.n.a[0]} <span className="text-brand-aqua font-medium">{Content.recommendations.n.a[1]}</span>{Content.recommendations.n.a[2]}</p>
				</div>
			</div>

			<div className="flex gap-x-4">
				<div className="">
					<Image
						className="w-12 max-w-xs mx-auto sm:w-14"
						src="../bottle-apple.svg"
						alt="Balanza"
						id="recommendationIcon2"
						width={1}
						height={1} />
				</div>
				<div className="pl-4 relative">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-brand-dark w-2 left-0 top-2 absolute">
						<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
					</svg>
					<p className="lg:text-xl lg:font-medium lg:leading-tight">{Content.recommendations.n.b[0]} <span className="text-brand-aqua font-medium">{Content.recommendations.n.b[1]}</span>{Content.recommendations.n.b[2]}</p>
				</div>
			</div>
		</div>
	</>)
}