import Image from 'next/image'
import Link from 'next/link'

export default function Header(){
	return (<header className="bg-brand-dark px-6 py-3.5 md:py-10 3xl:px-0">
		<div className="flex justify-between items-center max-w-5xl md:mx-auto">

			<div className="">
				<Image
					className="w-16 md:w-40"
					src="/abbott.svg"
					alt="Abbott"
					width={474}
					height={119}
					priority />
			</div>
			
			<div className="">
				<Link href="/">
					<Image
						className="w-40 md:w-[350px]"
						src="/logo.svg"
						alt="Nutri Pronto - Nutrition for oncology patients"
						width={1241}
						height={132}
						priority />
				</Link>
			</div>

		</div>
	</header>)
}