import Link from "next/link";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { getEventos } from "@/lib/service";
import dayjs from "dayjs";
import luciaFond from "../../public/images/luciafondo.jpg";

const CountdownTimer = dynamic(() => import("../Utils/Timer"), {
	ssr: false,
});

export const Cta = ({ eventos }: { eventos: any }) => {
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
		if (dayjs() > dayjs(evento.detalles.fecha)) evento.detalles.isLive = true;
	});

	return (
		<section
			className="relative mx-auto bg-cover bg-center flex justify-center pt-6"
			style={{ backgroundImage: `url('/images/fondo_cta2.jpg')` }}
		>
			<div className="container mx-auto text-left text-white">
				<div className="flex flex-col items-center md:items-start md:justify-start">
					<h1 className="font-anton relative md:ml-16 -skew-x-12 text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] mb-6">
						PRÓXIMOS EVENTOS
					</h1>
					<section className="my-6 mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
						{/* Inicio Card */}
						{postsOrdered.map((evento: any) => {
							return (
								<div
									key={postsOrdered.slug}
									className="relative w-full h-64 bg-cover bg-top group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
									style={{
										backgroundImage: `url('/images/GusFondo.jpg')`,
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
