import { useEffect } from 'react'
import gsap from 'gsap'

import Image from 'next/image'
import Link from 'next/link'

import '../css/global.css'

export default function HomePage(){

	useEffect(() => {
		gsap.set('#intro', { 
			height: 0,
			opacity: 0
		})
		
		gsap.set('#termsConditionsLink', { 
			visibility: 'hidden',
			opacity: 0
		})

		setTimeout(() => {
			gsap.to('#intro', { 
				height: 'auto',
				opacity: 1,
				duration: .3
			})

			gsap.set('#termsConditionsLink', { 
				visibility: 'visible',
				opacity: 1,
				duration: .3,
				delay: .5
			})
		}, 800)
	}, [])

	return (<main className="bg-brand-dark text-white min-h-screen">
		<section className="py-12">
			<div className="stripe-right h-20"></div>
			
			<div className="flex justify-center px-6 pt-14">
				<Image
					className="w-full max-w-xs mx-auto"
					src="/brand.svg"
					alt="Nutri Pronto - Nutrition for oncology patients"
					width={1241}
					height={236}
					priority />
			</div>

			<div id="intro" className="font-light leading-none text-center px-6 py-14 select-none 3xl:px-0">
				<p className="">Es una nueva herramienta de cribado nutricional aplicado al paciente oncológico1 que permite al especialista identificar la desnutrición de manera ágil y fácil, así como poner en marcha las intervenciones nutricionales que puedan ser más adecuadas.</p>
			</div>

			<div id="termsConditionsLink" className="flex justify-center">
				<Link href="/terms" className="text-brand-aqua text-sm underline">Términos y condiciones</Link>
			</div>

			<div className="stripe-left h-28 mt-10 grid place-content-center">
				<Link href="/start" className="text-brand-dark transition-all hover:text-white">EMPEZAR</Link>
			</div>

			<div className="flex justify-center pt-14 pb-6">
				<Image
					className="w-32"
					src="/abbott.svg"
					alt="Abbott"
					width={474}
					height={119}
					priority />
				
			</div>
			
			<div className="text-xxs text-center select-none">{ process.env.FOOTER_CODE }</div>
		</section>
	</main>)
}