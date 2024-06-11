import Link from "next/link";
import { useEffect, useState } from "react";
import eventos_choques from "../../public/images/eventosDefault/eventos_choques.jpg";
import eventos_choque from "../../public/images/eventosDefault/eventos_choque.jpg";
import eventos_dobles from "../../public/images/eventosDefault/eventos_dobles.jpg";
import eventos_iker from "../../public/images/eventosDefault/eventos_iker.jpg";
import eventos_lucia from "../../public/images/eventosDefault/eventos_lucia.jpg";
import eventos_mister from "../../public/images/eventosDefault/eventos_mister.jpg";
import eventos_partidos from "../../public/images/eventosDefault/eventos_partidos.jpg";

import dayjs from "dayjs";

const imageList = [
	eventos_choques.src,
	eventos_choque.src,
	eventos_dobles.src,
	eventos_iker.src,
	eventos_lucia.src,
	eventos_mister.src,
	eventos_partidos.src,
];

const getRandomImages = (list: Array<string>, count: number) => {
	const shuffled = [...list].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
};

export const Cta = ({
	eventos,
	oldEvents,
}: {
	eventos: any;
	oldEvents: any;
}) => {
	const [images, setImages] = useState<Array<string>>([
		eventos_choques.src,
		eventos_choque.src,
		eventos_dobles.src,
	]);

	useEffect(() => {
		const selectedImages = getRandomImages(imageList, 3);
		setImages(selectedImages);
	}, []);

	const compararPorFecha = (a: any, b: any) => {
		const fechaA = new Date(a.detalles.fecha);
		const fechaB = new Date(b.detalles.fecha);
		return fechaA.getTime() - fechaB.getTime();
	};
	const postsOrdered = eventos.sort(compararPorFecha);

	postsOrdered.map((evento: any) => {
		evento.detalles.fechaFormato = dayjs(evento.detalles.fecha).format(
			"DD-MM-YYYY"
		);
		if (
			dayjs() > dayjs(evento.detalles.fecha) &&
			dayjs() < dayjs(evento.detalles.fecha).add(3, "day")
		)
			evento.detalles.isLive = true;
	});

	return (
		<section
			className="relative mx-auto bg-cover bg-center flex justify-center pt-6"
			style={{ backgroundImage: `url('/images/home/home_fondo_cta.jpg')` }}
		>
			<div className="container mx-auto text-left text-white">
				<div className="flex flex-col items-center md:items-start md:justify-start">
					<h1 className="font-anton relative md:ml-16 -skew-x-12 text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] mb-6">
						{oldEvents ? "ÚLTIMOS EVENTOS" : "PRÓXIMOS EVENTOS"}
					</h1>
				</div>
				<div className="flex flex-col md:justify-start">
					<section className="my-6 mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
						{/* Inicio Card */}
						{postsOrdered.map((evento: any, i: number) => {
							return (
								<div
									key={evento.slug}
									className="relative w-full h-64 bg-cover bg-top group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
									style={{
										backgroundImage: `url(${images[i]})`,
									}}
								>
									<Link href={`/competicion/${evento.slug}`}>
										<div className="absolute inset-0 bg-black bg-opacity-60 group-hover:opacity-75 transition duration-300 ease-in-out"></div>{" "}
										<div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex flex-col justify-between items-center">
											<h3 className="text-center mt-10">
												<div className="text-white text-2xl font-bold text-center">
													<span className="absolute inset-0"></span>
													{evento.detalles.tituloEvento}
												</div>
											</h3>
											<div className="text-center mb-10">
												{evento.detalles.isLive ? (
													<p className="text-2xl font-bold bg-red-500 rounded-full px-6 ">
														Live!
													</p>
												) : (
													<p className="text-xl font-bold rounded-full px-6 ">
														{evento.detalles.fechaFormato}
													</p>
												)}
											</div>
										</div>
									</Link>
								</div>
							);
						})}
					</section>
				</div>
				<div className="flex justify-center items-center">
					<Link href="/competicion">
						<button className="mb-6 px-8 items-center rounded-full bg-white py-3 text-center text-base text-black hover:scale-105 hover:opacity-80 transition duration-200">
							Ver todos
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};
