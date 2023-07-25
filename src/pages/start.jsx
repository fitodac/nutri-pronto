import { useState } from 'react'

import Header from '../components/Header'
import Link from 'next/link'

import '../css/global.css'

const button_class = `bg-brand-dark text-sm font-bold text-white text-center leading-none w-full p-3 block select-none transition-all hover:opacity-90 
											md:text-3xl md:leading-none md:pt-4 md:pb-3 md:pb-2`

export default function StartPage(){

	const [forbiden, setForbiden] = useState(false)


	return (<main className="bg-brand-aqua text-brand-dark min-h-screen flex flex-col">
		<Header />

		<div className="flex flex-col justify-between flex-1 pt-12 md:pt-20">
			{ !forbiden ? 
				(<section className="px-6 3xl:px-0">
					<div className="text-center max-w-3xl space-y-12 mx-auto md:space-y-20 md:max-w-5xl">
						<p className="leading-tight select-none md:text-3xl md:font-medium md:leading-none">Esta aplicación está dirigida exclusivamente a profesionales sanitarios y sólo tiene fines informativos. En cumplimiento de lo dispuesto en la ley de garantías y uso racional de medicamentos y productos sanitarios, le informamos que esta aplicación contiene información dirigida únicamente a profesionales sanitarios, por lo que se requiere de formación especializada para su correcta interpretación. El contenido al que intenta acceder es exclusivo para profesionales sanitarios que trabajan en España y están sujetos a la legislación española. Absténgase de entrar si no cumple con estas condiciones.</p>

						<div className="page-title md:text-5xl">¿ES USTED PROFESIONAL SANITARIO?</div>

						<div className="max-w-sm mx-auto grid grid-cols-2 gap-x-6 md:max-w-xl md:gap-x-16">
							<div className="">
								<Link href="/pronto" className={button_class}>SÍ</Link>
							</div>

							<div className="">
								<button onClick={() => setForbiden(true)} className={button_class}>NO</button>
							</div>
						</div>
					</div>
				</section>) : 
				(
					<section className="px-6 3xl:px-0">
						<div className="text-center max-w-3xl space-y-12 mx-auto md:space-y-16 md:max-w-5xl">

							<div className="page-title">LO SENTIMOS</div>

							<div className="leading-tight select-none space-y-5 md:text-4xl md:font-medium md:leading-none">
								<p>El contenido al que intenta acceder es exclusivo para profesionales sanitarios que trabajan en España y está sujeto a la legislación española.</p>
								<p>Absténgase de entrar si no cumple con estas condiciones.</p>
							</div>

							<div className="flex justify-center">
								<div className="">
									<Link href="/" className={`${button_class} px-20 md:px-28`}>OK</Link>
								</div>
							</div>

						</div>
					</section>
				) 
			}

			<div className="text-white text-xxs text-center pb-4 select-none lg:text-sm">{ process.env.FOOTER_CODE }</div>
		</div>

	</main>)
}