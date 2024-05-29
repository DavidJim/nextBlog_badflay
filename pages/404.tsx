import Image from "next/image";
import notFound from "../public/images/404.png";

export default function Custom404() {
	return (
		<div className="justify-center">
			<div className="w-full h-full flex justify-center items-center pt-28">
				<Image
					src={notFound}
					className="object-cover"
					alt="404"
					height={500}
					width={500}
				/>
			</div>
			<div className="relative flex justify-center items-center pt-4 pb-36 px-8">
				<div className="rounded-xl flex-shrink">
					<h1 className="font-anton text-black text-[1.5rem] md:text-[2.5rem] mx-8">
						PÁGINA NO ENCONTRADA
					</h1>
				</div>
			</div>
		</div>
	);
}
