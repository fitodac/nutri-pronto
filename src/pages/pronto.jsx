import { useState } from 'react'

import Image from 'next/image'

import Layout from '../layouts/Layout'

const label_class = 'flex items-center gap-x-2 leading-none cursor-pointer'
const radio_class = 'bg-white border border-brand-aqua w-6 h-6 rounded-full'

export default function ProntoPage(){

	const [form, setForm] = useState({
		option1: false,
		option2: false,
		option3: false
	})

	const handleChange = e => {
		const f = {...form}


		console.log(e.target.value)
	}

	const submit = () => {}


	return (<Layout status="pronto">
		<div className="text-center py-8 md:pt-16 md:pb-10">
			<div className="page-title">CUESTIONARIO PRONTO</div>
		</div>
		
		<div className="text-brand-aqua-600 font-medium">Por favor, responda las siguientes preguntas sobre su paciente:</div>

		<form className="mt-6" onSubmit={submit}>
			
			<div className="space-y-8">
				<section className="space-y-3">
					<div className="">
						<span className="font-semibold pr-1">1.</span>
						<span className="">¿Ha perdido peso involuntariamente (5% a 10% o más) en los últimos 3-6 meses/ desde nuestra última consulta?</span>
					</div>

					<div className="flex gap-x-5">
						<label className={label_class}>
							<input type="radio" name="option1" value="1" onChange={handleChange} className="hidden" />
							<span className={radio_class} />
							<span className="font-medium">SÍ</span>
						</label>

						<label className={label_class}>
							<input type="radio" name="option1" value="0" onChange={handleChange} className="hidden" />
							<span className={radio_class} />
							<span className="font-medium">No</span>
						</label>
					</div>

					<div className="">
						<div className="bg-brand-aqua text-brand-aqua-600 bg-opacity-20 text-sm font-medium px-3 py-1">
							<span className="">PREGUNTAS EXPLORATORIAS</span>
							<Image
								className="text-brand-aqua-600 w-6"
								style={{background: 'red'}}
								src="/ri-arrow-down-s-fill.svg"
								alt="Mostrar información adicional"
								width={1241}
								height={236}
								priority />
						</div>
					</div>
				</section>



				<section className="">
					<div className="">
						<span className="font-semibold pr-1">2.</span>
						<span className="">¿Ha estado comiendo menos de lo habitual en la última semana/ desde nuestra última consulta?</span>
					</div>
				</section>



				<section className="">
					<div className="">
						<span className="font-semibold pr-1">3.</span>
						<span className="">¿Ha perdido fuersa o se siente más débil que lo usual desde nuestra última consulta?</span>
					</div>
				</section>
			</div>

		</form>
	</Layout>)
}