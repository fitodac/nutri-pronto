import { useEffect } from 'react'
import gsap from 'gsap'

import Image from 'next/image'
import Link from 'next/link'

import '../css/global.css'

export default function HomePage(){

	// Animation
	useEffect(() => {
		gsap.to('#logo', 									{ scale: 1, opacity: 1, delay: .3 })
		gsap.to('#stripe1', 							{ top: 0, opacity: 1, delay: .5 })
		gsap.to('#stripe2', 							{ top: 0, opacity: 1, delay: .5 })
		gsap.to('#abbot', 								{ opacity: 1, delay: .6 })
		gsap.to('#footer', 								{ opacity: 1, delay: .7 })
		gsap.to('#intro', 								{ marginTop: 0, duration: 1, smoothChildTiming: true, delay: 1.3 })
		gsap.to('#intro', 								{ opacity: 1, duration: 1, smoothChildTiming: true, delay: 1.7 })
		gsap.to('#termsConditionsLink', 	{ opacity: 1, delay: 2 })
		gsap.to('#link', 									{ opacity: 1, delay: 2.1 })
	}, [])

	return (<main className="bg-brand-dark text-white min-h-screen">
		<section className="py-12 overflow-hidden">
			
			<div 
				id="stripe1"
				className="stripe-right h-20 -top-5 relative opacity-0"></div>
			
			<div className="flex justify-center px-6 pt-14">
				<Image
					id="logo"
					className="w-full max-w-xs mx-auto scale-125 opacity-0"
					src="/brand.svg"
					alt="Nutri Pronto - Nutrition for oncology patients"
					width={1241}
					height={236}
					priority />
			</div>

			<div id="intro" className="font-light leading-none text-center px-10 py-10 -mt-36 opacity-0 select-none 3xl:px-0">
				<p className="">Es una nueva herramienta de cribado nutricional aplicado al paciente oncológico<sup className="text-xxs">1</sup> que permite al especialista identificar la desnutrición de manera ágil y fácil, así como poner en marcha las intervenciones nutricionales que puedan ser más adecuadas.</p>
			</div>

			<div id="termsConditionsLink" className="flex justify-center opacity-0">
				<Link href="/terms" className="text-brand-aqua text-sm underline select-none">Términos y condiciones</Link>
			</div>

			<div 
				id="stripe2"
				className="stripe-left h-28 mt-8 grid place-content-center top-5 relative opacity-0">
				<Link 
					id="link"
					href="/start" 
					className="text-brand-dark transition-all opacity-0 hover:text-white">EMPEZAR</Link>
			</div>

			<div className="flex justify-center pt-10 pb-6">
				<Image
					id="abbot"
					className="w-32 opacity-0"
					src="/abbott.svg"
					alt="Abbott"
					width={474}
					height={119}
					priority />
				
			</div>
			
			<div 
				id="footer"
				className="text-xxs text-center mt-4 select-none opacity-0">{ process.env.FOOTER_CODE }</div>
		</section>
	</main>)
}