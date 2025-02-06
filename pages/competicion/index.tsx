import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { IoOpenOutline } from "react-icons/io5";
import { GetServerSideProps, GetStaticProps } from "next";
import { getEventos } from "@/lib/service";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const CountdownTimer = dynamic(() => import("../../components/Utils/Timer"), {
	ssr: false,
});

const compararPorFecha = (a: any, b: any) => {
	const fechaA = new Date(a.detalles.fecha);
	const fechaB = new Date(b.detalles.fecha);
	return fechaA.getTime() - fechaB.getTime();
};

const orderPosts = (eventos: any, sort: boolean = true) => {
	let postsOrdered = sort ? eventos.sort(compararPorFecha) : eventos;
	postsOrdered.map((evento: any) => {
		evento.detalles.fechaFormato = dayjs(evento.detalles.fecha).format(
			"DD/MM/YYYY"
		);
		evento.detalles.fechaFin
			? (evento.detalles.fechaFinFormato = dayjs(
					evento.detalles.fechaFin
			  ).format("DD/MM/YYYY"))
			: null;
	});
	return postsOrdered;
};

export default function Competicion({ eventos }: { eventos: any }) {
	const [oldEvents, setOldEvents] = useState<boolean>(false);
	const [events, setEvents] = useState<any>([]);
	const [loading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		setEvents(orderPosts(eventos));
	}, []);

	const cargarMasEventos = async (cursor: string) => {
		const fechaObjeto = {
			year: dayjs().year(),
			month: 1,
			day: 1,
		};
		const fechaFiltro = dayjs().subtract(4, "day").format("YYYY-MM-DD");
		const eventosAnteriores = await getEventos(
			3,
			cursor,
			fechaObjeto,
			fechaFiltro,
			true
		);
		const totalEventos = [...events, ...eventosAnteriores];
		setEvents(orderPosts(totalEventos, false));
	};

	const handleEventsType = async () => {
		setIsLoading(true);
		if (oldEvents) {
			setOldEvents(false);
			setEvents(orderPosts(eventos));
			setIsLoading(false);
		} else {
			let fechaObjeto = {
				year: dayjs().year() - 1,
				month: dayjs().month(),
				day: dayjs().day(),
			};
			const fechaFiltro = dayjs().subtract(4, "day").format("YYYY-MM-DD");
			const eventosPasados = await getEventos(
				10,
				"",
				fechaObjeto,
				fechaFiltro,
				true
			);
			setOldEvents(true);
			setEvents(orderPosts(eventosPasados, false));
			setIsLoading(false);
		}
	};

	return (
		<section className="container mx-auto py-12 md:py-6 md:pt-0 items-center text-center border-b">
			<div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
				<div className="relative flex pt-20 md:pt-5 items-center">
					<div className="flex-grow border-t border-gray-400"></div>
					<span className="font-anton flex-shrink -skew-x-12 mx-4 text-[2rem] text-black">
						COMPETICIÓN
					</span>
					<div className="flex-grow border-t border-gray-400"></div>
				</div>
			</div>
			<div className="relative flex justify-center items-center pt-4 md:pt-2 pb-8 px-8">
				<div className="bg-purple-900 rounded-xl flex-shrink -skew-x-12">
					<h1 className="font-anton text-white text-[2rem] md:text-[2.5rem] mx-8">
						{oldEvents ? "EVENTOS PASADOS" : "PRÓXIMOS EVENTOS"}
					</h1>
				</div>
			</div>
			{events.length > 0 ? (
				<div className="relative grid grid-cols-12 gap-4 justify-center mx-2">
					{/* Inicio Card */}
					{events.map((evento: any) => {
						return (
							<div
								key={evento.id}
								className={`col-span-12 ${
									events.length === 1
										? "md:col-span-12"
										: events.length === 2
										? "md:col-span-6"
										: "md:col-span-6 xl:col-span-4"
								} flex justify-center items-center`}
							>
								<div className="w-full max-w-sm rounded-lg shadow-md transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl h-full">
									<div
										className="relative transform overflow-hidden rounded-xl text-white shadow-lg bg-black h-full"
										data-movie-id="438631"
									>
										<div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-gray-900 to-transparent transition duration-300 ease-in-out"></div>
										<div className="group relative z-10 cursor-pointer space-y-6 px-10 pt-10">
											<div className="align-self-end w-full">
												<div className="h-32"></div>
												<div className="space-y-6 z-96">
													<div className="inner flex flex-col space-y-2">
														<h3
															className="text-2xl font-bold text-white"
															data-unsp-sanitized="clean"
														>
															{evento?.detalles?.tituloEvento}
														</h3>
														<div className="mb-0 text-lg text-gray-400">
															{evento?.detalles?.federacion[0]}
														</div>
													</div>
													<div className="flex flex-row justify-between">
														<div className="flex flex-col">
															<div className="text-sm text-gray-400">
																Categorías
															</div>
															{evento?.detalles?.categorias.map(
																(category: any) => {
																	return (
																		<div
																			key={category}
																			className="text-[0.83rem]"
																		>
																			{category}
																		</div>
																	);
																}
															)}
														</div>
														<div className="flex flex-col">
															<div className="text-sm text-gray-400">Fecha</div>
															<div className="text-[0.83rem]">
																{evento.detalles.fechaFormato}
															</div>
															{evento.detalles.fechaFin && (
																<div className="text-[0.83rem]">
																	a {evento.detalles.fechaFinFormato}
																</div>
															)}
														</div>
														<div className="flex flex-col">
															<div className="text-sm text-gray-400">URL</div>
															<div className="text-[0.83rem]">
																<Link
																	href={evento?.detalles?.urlEvento}
																	target="_blank"
																>
																	<IoOpenOutline
																		href={evento?.detalles?.urlEvento}
																		className="text-2xl"
																	/>
																</Link>
															</div>
														</div>
													</div>
													<div className="overview flex flex-col">
														<div className="flex flex-col"></div>
														<div className="mb-2 text-sm text-gray-400">
															Descripción:
														</div>
														<p className="mb-6 text-sm text-gray-100">
															{evento?.detalles?.descripcionEvento}
														</p>
													</div>
												</div>
											</div>
										</div>
										<Image
											className="absolute inset-0 w-full -translate-y-4 transform"
											width={500}
											height={500}
											alt={evento?.slug}
											src={evento?.detalles?.imagen?.node?.sourceUrl}
										/>
										<div className="poster__footer relative z-10 flex flex-row space-x-4 pb-5">
											<Link
												className="mx-auto flex items-center rounded-full bg-purple-800 px-4 py-2 text-white hover:bg-purple-900"
												href={`/competicion/${evento.slug}`}
											>
												<svg
													viewBox="0 0 24 24"
													fill="currentColor"
													height="2em"
													width="2em"
												>
													<path d="M12.3 2c-.97.03-1.72.84-1.69 1.8.01.24.06.47.16.7l.29.64c.04.13-.03.27-.17.31-.09.05-.19 0-.26-.08l-.42-.55c-.33-.42-.83-.68-1.36-.69-.97-.02-1.77.75-1.79 1.71-.01.42.13.82.39 1.16l.42.5h.01c.08.13.05.29-.06.37-.09.07-.21.07-.29 0L7 7.45c-.34-.26-.75-.4-1.16-.39-.96.02-1.73.82-1.71 1.79.01.53.27 1.03.69 1.36l.57.44c.11.1.11.26-.01.35a.23.23 0 01-.26.05h-.01l-.61-.28c-.23-.09-.46-.15-.7-.16-.96-.03-1.77.73-1.8 1.7 0 .72.4 1.38 1.06 1.66l11.39 5.07 4.59-4.59-5.07-11.39C13.69 2.39 13 1.97 12.3 2m.83 4.1c.42-.01.8.23.96.61l3.05 6.84-3.95-3.94-.93-2.11c-.3-.63.16-1.38.87-1.4M9.85 8.85c.27 0 .52.1.71.3l4.81 4.81c.4.38.41 1.01.03 1.41-.4.4-1.02.41-1.44 0l-4.81-4.81a.987.987 0 01-.02-1.41c.19-.2.45-.3.72-.3m-2.72 3.32c.13 0 .27.04.37.09l2.13.94 3.94 3.94-6.86-3.05c-1.02-.44-.68-1.95.42-1.92m13.15 3.87l-4.24 4.24.85.85c.76.75 1.86 1.04 2.89.77a3.024 3.024 0 002.12-2.12c.27-1.03-.02-2.13-.77-2.89l-.85-.85z" />
												</svg>
												<div className="ml-2 text-sm text-white">
													Ver detalles
												</div>
											</Link>
										</div>
										<div className="relative z-20 inset-x-0 bottom-0 mx-10 mb-5 text-center text-2xl font-bold uppercase text-white drop-shadow-sm ">
											<CountdownTimer
												targetDate={evento.detalles.fecha}
												endDate={evento.detalles.fechaFin}
											/>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div className="relative flex justify-center items-center pt-4 pb-8 px-8">
					<div className="rounded-xl flex-shrink">
						<h1 className="font-anton text-black text-[2rem] md:text-[2.5rem] mx-8">
							{oldEvents
								? "NO HAY EVENTOS PASADOS"
								: "NO HAY PRÓXIMOS EVENTOS PROGRAMADOS"}
						</h1>
					</div>
				</div>
			)}
			{oldEvents && events[events.length - 1]?.hasNextPage && (
				<div className="flex justify-center items-center pt-8">
					<button
						onClick={() => {
							cargarMasEventos(events[events.length - 1].endCursor);
						}}
						className="mb-6 px-8 items-center rounded-full py-3 text-center text-base text-purple-800 hover:scale-105 hover:opacity-80 transition duration-200"
					>
						Mostrar más
					</button>
				</div>
			)}
			{loading ? (
				<div className="flex justify-center items-center pt-4">
					<button className="mb-6 px-8 items-center rounded-full bg-purple-400 py-3 text-center text-base text-white hover:scale-105 hover:opacity-80 transition duration-200">
						Cargando...
					</button>
				</div>
			) : (
				<div className="flex justify-center items-center pt-4">
					<button
						onClick={() => {
							handleEventsType();
						}}
						className="mb-6 px-8 items-center rounded-full bg-purple-800 py-3 text-center text-base text-white hover:scale-105 hover:opacity-80 transition duration-200"
					>
						{oldEvents ? "Próximos Eventos" : "Eventos Pasados"}
					</button>
				</div>
			)}
		</section>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	// Crear un objeto con el año actual y los valores deseados para el mes y el día
	const fechaObjeto = {
		year: dayjs().year(),
		month: 1,
		day: 1,
	};
	const fechaFiltro = dayjs().subtract(4, "day").format("YYYY-MM-DD");
	const eventos = await getEventos(6, "", fechaObjeto, fechaFiltro);

	return {
		props: {
			eventos,
		},
	};
};
