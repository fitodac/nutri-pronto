import { useEffect } from 'react'
import { useRouter } from 'next/router'
import gsap from 'gsap'

import Image from 'next/image'
import Link from 'next/link'

import '../css/global.css'

export default function HomePage(){

	const router = useRouter()

	// Animation
	useEffect(() => {
		if( sessionStorage.getItem('nutripronto') ) router.push('/pronto')

		gsap.to('#logo', 									{ scale: 1, opacity: 1, delay: .3 })
		gsap.to('#stripe1', 							{ top: 0, opacity: 1, delay: .5 })
		gsap.to('#stripe2', 							{ top: 0, opacity: 1, delay: .5 })
		gsap.to('#abbot', 								{ opacity: 1, delay: .6 })
		gsap.to('#footer', 								{ opacity: 1, delay: .7 })
		gsap.to('#intro', 								{ marginTop: 0, duration: 1, smoothChildTiming: true, delay: 1.3 })
		gsap.to('#stripe1', 							{ height: 0, opacity: 0, delay: 1.5 })
		gsap.to('#intro', 								{ opacity: 1, duration: 1, smoothChildTiming: true, delay: 1.7 })
		gsap.to('#termsConditionsLink', 	{ opacity: 1, delay: 2 })
		gsap.to('#link', 									{ opacity: 1, pointerEvents: 'initial', delay: 2.1 })
	}, [])

	return (<main className="bg-brand-dark text-white min-h-screen">
		<section className="py-12 overflow-hidden">
			
			<div 
				id="stripe1"
				className="stripe-right h-20 -top-5 relative opacity-0"></div>
			
			<div className="flex justify-center max-w-3xl px-6 pt-14 mx-auto">
				<Image
					id="logo"
					className="w-full max-w-xs mx-auto scale-125 opacity-0 md:max-w-[500px]"
					src="/brand.svg"
					alt="Nutri Pronto - Nutrition for oncology patients"
					width={1241}
					height={236}
					priority />
			</div>

			<div 
				id="intro" 
				className="font-light leading-none text-center max-w-3xl px-10 py-10 mx-auto -mt-36 opacity-0 select-none md:text-xl md:leading-tight md:pt-20 3xl:px-0">
				<p className="">Es una nueva herramienta de cribado nutricional aplicado al paciente oncológico<sup className="text-xxs">1</sup> que permite al especialista identificar la desnutrición de manera ágil y fácil, así como poner en marcha las intervenciones nutricionales que puedan ser más adecuadas.</p>
			</div>

			<div id="termsConditionsLink" className="flex justify-center max-w-3xl mx-auto opacity-0">
				<Link href="/terms" className="text-brand-aqua text-sm underline select-none md:text-xl md:leading-tight">Términos y condiciones</Link>
			</div>

			<div 
				id="stripe2"
				className="stripe-left h-28 mt-8 grid place-content-center top-5 relative opacity-0">
				<Link 
					id="link"
					href="/start" 
					className="text-brand-dark transition-all opacity-0 pointer-events-none hover:text-white md:text-2xl">EMPEZAR</Link>
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
				className="text-xxs text-center mt-4 select-none opacity-0 md:mt-0">
				{ process.env.FOOTER_CODE }
			</div>
		</section>
	</main>)
}