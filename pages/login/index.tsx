import Image from "next/image";
import shuttle from "../../public/images/shuttle.jpg";

export default function Custom404() {
	return (
		<div className="justify-center">
			<div className="w-full h-full flex justify-center items-center pt-12">
				<Image
					src={shuttle}
					className="object-cover rounded-lg"
					alt="404"
					height={500}
					width={500}
				/>
			</div>
			<div className="relative flex justify-center items-center pt-4 pb-24 px-8">
				<div className="rounded-xl flex-shrink">
					<h1 className="font-anton text-black text-[1.5rem] md:text-[2.5rem] mx-8">
						Página en construcción
					</h1>
				</div>
			</div>
		</div>
	);
}
