import { useState } from 'react'
import gsap from 'gsap'


export default function List(props){

	const [dd, setDd] = useState(false)

	const toggler = () => {
		const status = !dd
		setDd(status)

		if( status ){
			gsap.to(`#list-${props.id}`, { height: 'auto', opacity: 1, ease: 'power1.inOut', duration: .3})
		}else{
			gsap.to(`#list-${props.id}`, { height: 0, opacity: 0, ease: 'power1.inOut', duration: .3})
		}
	}


	return (<div className="select-none mt-4">
		<div 
			className="bg-brand-aqua bg-opacity-20 text-brand-aqua-600 text-sm pl-3 pr-1 py-1 flex justify-between items-center cursor-pointer transition-all hover:bg-opacity-30 md:font-medium"
			onClick={toggler}>
			<span className="">PREGUNTAS EXPLORATORIAS</span>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7" fill="currentColor">
				{ dd ? (<path d="M12 8L18 14H6L12 8Z"></path>) : (<path d="M12 16L6 10H18L12 16Z"></path>) }
			</svg>
		</div>

		<ul id={`list-${props.id}`} className="h-0 opacity-0 overflow-hidden">
			{ props.list.map(li => {
				return (<li 
									className="border-brand-aqua border-opacity-30 leading-tight font-light px-3 py-2 
															[&:not(:first-child)]:border-t [&:not(:first-child)]:border-dashed
															md:text-lg md:font-medium md:leading-tight
															md:[&:not(:first-child)]:border-t-2 md:[&:not(:first-child)]:border-dotted" key={Math.random().toString(16).substring(2)}>
					{ li.map(e => { return (<p key={Math.random().toString(16).substring(2)}>{e}</p>)}) }
				</li>)
			}) }
		</ul>
	</div>)
}