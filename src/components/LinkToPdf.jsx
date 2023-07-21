export default function LinkToPdf(){
	return (<a 
						href={process.env.LINK_2_PDF_DOCUMENT} 
						className="bg-brand-aqua text-white font-bold text-center leading-none w-full max-w-xs p-4 mx-auto block select-none transition-all hover:opacity-80">
						ALGORITMO DE DECISIÓN DE NUTRICIÓN ENTERAL EN PACIENTE ONCOLÓGICO
					</a>)
}