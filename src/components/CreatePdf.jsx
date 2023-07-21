export default function CreatePdf(props){
	return (<button 
						className="bg-brand-dark text-white font-bold leading-none text-center w-full max-w-xs p-3 select-none transition-all hover:opacity-90"
						onClick={() => props.generatePDF()}>
						CREAR PDF
					</button>)
}