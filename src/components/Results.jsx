export default function ResultsPage({props, children}){

	return (<section>
		<div className="text-center -mt-4">Sospecha de desnutrición</div>

		<div className="bg-brand-dark border-b-4 border-brand-aqua text-white text-3xl font-bold text-center leading-none pt-3 pb-2 mt-3">{ props.malnutrition }</div>

		<div className="page-title text-center mt-7">RECOMENDACIONES</div>

		{ children }

		<div className="bg-brand-dark bg-opacity-20 leading-tight px-6 pt-5 pb-24 -mx-6 -mb-24 mt-8">
			<p className="">
				<span className="underline">Una vez que cierre o reinicie</span> este formulario, 
				todos <span className="underline">los datos introducidos serán borrados permanentemente</span>. 
				Abbott no tiene acceso en ningún momento a los datos introducidos.
			</p>

			<div className="w-full mt-6 flex flex-col items-center gap-4">
				{ props.footer_reset_btn ? 
					(<button 
						onClick={() => props.formReset()}
						className="bg-brand-dark text-white font-bold leading-none text-center w-full max-w-xs p-3">
						{ props.footer_reset_btn }
					</button>)
				: null }
				<button className="bg-brand-dark text-white font-bold leading-none text-center w-full max-w-xs p-3">CREAR PDF</button>
			</div>
		</div>

	</section>)
}