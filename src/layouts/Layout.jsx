import { useEffect } from 'react'
import gsap from 'gsap'

import Header from '../components/Header'

import '../css/global.css'

const bc_class = 'text-sm px-6 py-1 sm:px-8 md:text-xl md:px-12 md:py-2'

export default function Layout({status, children}){

	useEffect(() => {
		gsap.set('#mainFooter', { opacity: 0 })
		gsap.to('#mainFooter', { opacity: 1, delay: 2 })
	}, [])


	return (<main>
		<Header />

		<div className="bg-brand-aqua sm:px-6 3xl:px-0">
			<div className="text-white font-semibold flex justify-center mx-auto select-none overflow-x-hidden">

				<div className={`${bc_class} ${'pronto' === status ? 'bg-brand-aqua-600' : ''}`}>PRONTO</div>

				<div className={`${bc_class} ${'glim' === status ? 'bg-brand-aqua-600' : ''}`}>GLIM</div>

				<div className={`${bc_class} ${'result' === status ? 'bg-brand-aqua-600' : ''}`}>RESULTADO</div>

			</div>
		</div>

		<section className="max-w-3xl px-6 mx-auto 3xl:px-0">{children}</section>

		<div id="mainFooter" className="text-xxs text-center pb-8 pt-10">{ process.env.FOOTER_CODE }</div>
	</main>)
}