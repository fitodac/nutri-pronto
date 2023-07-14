import Image from 'next/image'

export default function Header(){
	return (<header className="bg-brand-dark px-6 py-3.5 3xl:px-0">
		<div className="flex justify-between items-center">

			<div className="">
				<Image
					className="w-16"
					src="/abbott.svg"
					alt="Abbott"
					width={474}
					height={119}
					priority />
			</div>
			
			<div className="">
				<Image
					className="w-40"
					src="/logo.svg"
					alt="Nutri Pronto - Nutrition for oncology patients"
					width={1241}
					height={132}
					priority />
			</div>

		</div>
	</header>)
}