import Header from '../components/Header'

import '../css/global.css'

const button_class = 'px-8 py-1 md:text-xl md:px-12 md:py-2'

export default function Layout({status, children}){
	return (<main>
		<Header />

		<div className="bg-brand-aqua px-6 3xl:px-0">
			<div className="text-white font-semibold flex justify-center mx-auto select-none">

				<div className={`${button_class} ${'pronto' === status ? 'bg-brand-aqua-600' : ''}`}>PRONTO</div>

				<div className={`${button_class}`}>GLIM</div>

				<div className={`${button_class}`}>RESULTADO</div>

			</div>
		</div>

		<section className="max-w-3xl px-6 mx-auto 3xl:px-0">{children}</section>
	</main>)
}