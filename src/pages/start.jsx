import Header from '../components/Header'
import Link from 'next/link'

import '../css/global.css'

export default function StartPage(){

	return (<main className="bg-brand-aqua text-brand-dark min-h-screen flex flex-col justify-between">
		<Header />

		<section className="px-6 3xl:px-0">
			<div className="text-center space-y-12">
				<p className="leading-tight">Esta aplicación está dirigida exclusivamente a profesionales sanitarios y sólo tiene fines informativos. En cumplimiento de lo dispuesto en la ley de garantías y uso racional de medicamentos y productos sanitarios, le informamos que esta aplicación contiene información dirigida únicamente a profesionales sanitarios, por lo que se requiere de formación especializada para su correcta interpretación. El contenido al que intenta acceder es exclusivo para profesionales sanitarios que trabajan en España y están sujetos a la legislación española. Absténgase de entrar si no cumple con estas condiciones.</p>

				<div className="text-2xl font-bold">¿ES USTED PROFESIONAL SANITARIO?</div>

				<div className="grid grid-cols-2 gap-x-6">
					<div className="">
						<Link href="/start" className="bg-brand-dark text-sm font-bold text-white text-center leading-none w-full p-3 block select-none transition-all hover:opacity-90">SÍ</Link>
					</div>

					<div className="">
						<Link href="/start" className="bg-brand-dark text-sm font-bold text-white text-center leading-none w-full p-3 block select-none transition-all hover:opacity-90">NO</Link>
					</div>
				</div>
			</div>
		</section>

		<div className="text-white text-xxs text-center pb-4 select-none">{ process.env.FOOTER_CODE }</div>
	</main>)
}