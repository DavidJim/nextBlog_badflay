import Link from "next/link";
import Image from "next/image";
import cajaRural from "../../public/images/CajaRural.png";

export const Partners = () => {
	return (
		<section
			id="partners"
			className="flex flex-col mx-auto relative justify-center text-center md:justify-start md:text-start bg-white"
		>
			<div className="container mx-auto">
				<h1 className="font-anton md:ml-16 py-6 -skew-x-12 text-[2.5rem] md:text-[4rem] lg:text-[4.5rem]">
					COLABORADORES
				</h1>
				<div className="flex flex-col items-center mb-14">
					<a href="https://www.cajaruraldejaen.com/es" target="_blank">
						<Image
							src={cajaRural}
							alt="Caja Rural"
							height={250}
							width={250}
							className="transition-all duration-200 ease-linear hover:-translate-y-[3px] hover:cursor-pointer"
							priority
						></Image>
					</a>
					<a href="https://www.badflay.com/noticias/colaboracion-con-caja-rural-jaen">
						<div className="bg-purple-800 text-white rounded-full px-3 hover:opacity-80 transition duration-200 cursor-pointer">
							<p className="text-center text-sm">Información</p>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};
