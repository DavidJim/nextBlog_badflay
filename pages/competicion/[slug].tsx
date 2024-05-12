import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Badflay from "../../public/images/Badflay.jpeg";
import { GetStaticProps, GetStaticPaths } from "next";
import { getEventoBySlug, getEventos } from "@/lib/service";
import dayjs from "dayjs";

export default function CompeticionDetalle({ post }: { post: any }) {
	post.detalles.fechaFormato = dayjs(post.detalles.fecha).format("DD/MM/YYYY");
	return (
		<section className="container mx-auto py-12 md:py-6 md:pt-0 text-center border-b">
			<div className="relative flex justify-center items-center pt-16 md:pt-8 pb-8 px-8">
				<div className="bg-purple-900 rounded-xl flex-shrink -skew-x-12">
					<h1 className="font-anton text-white text-[2rem] md:text-[2.5rem] mx-8">
						{post?.detalles?.tituloEvento}
					</h1>
				</div>
			</div>
			{post.detalles.streamlinks.length > 0 && (
				<div className="w-full lg:pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:space-y-8 md:space-y-16 max-w-7xl">
					<div className="relative flex items-center">
						<div className="flex-grow border-t border-gray-400 mr-2"></div>
						<div className="rounded-full hover:scale-105 transition duration-200 bg-red-600">
							<span className="font-robotReavers flex-shrink -skew-x-12 mx-4 text-[1.5rem] md:text-[2rem] text-white">
								STREAMING LIVE!
							</span>
						</div>
						<div className="flex-grow border-t border-gray-400 ml-2"></div>
					</div>
					<div className="relative flex flex-col lg:flex-row lg:flex-wrap pb-8 justify-center">
						{post.detalles.streamlinks.map((link: any) => {
							return (
								<div
									key="cualquiera"
									className="relative flex flex-col lg:w-1/2 justify-center px-2"
								>
									<div className="relative flex flex-col justify-center items-center pt-4 lg:px-2">
										<div className="rounded-full bg-purple-800">
											<span className="font-robotReavers flex-shrink -skew-x-12 mx-4 text-[1rem] md:text-[1.5rem] text-white">
												{link.title}
											</span>
										</div>
									</div>
									<div className="relative flex items-center pt-4 px-2">
										<iframe
											className="w-full aspect-video rounded-xl"
											src={link.url}
											title="YouTube video player"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										></iframe>
									</div>
								</div>
							);
						})}
					</div>
					<div className="relative flex items-center">
						<div className="flex-grow border-t border-gray-400"></div>
						<span className="flex-shrink mx-4 text-xl text-gray-500">
							Detalles Competición
						</span>
						<div className="flex-grow border-t border-gray-400"></div>
					</div>
				</div>
			)}
			<div className="relative flex justify-center items-center lg:items-start flex-col-reverse lg:flex-row transition duration-200">
				<div className="lg:w-1/3 max-w-[100%] lg:max-w-[40%] rounded-lg p-2 px-8 md:px-auto lg:pr-4">
					<Image
						className="rounded-lg shadow-md"
						src={post?.detalles?.imagen?.node?.sourceUrl}
						width={500}
						height={500}
						alt={post?.slug}
					/>
				</div>
				<div className="lg:w-2/3 lg:max-w-[70%]">
					{/* <!-- Details Section Start Here  --> */}
					<div
						id="detalles"
						className="flex pt-4 pb-8 lg:pt-12 justify-center items-center text-start"
					>
						<div className="mx-8 px-4 md:px-8 md:mb-12">
							<div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-2 xl:gap-16">
								{/* <!-- feature - start --> */}
								<div className="flex gap-4 md:gap-6">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
										<svg
											viewBox="0 0 24 24"
											fill="currentColor"
											height="2em"
											width="2em"
										>
											<path d="M6 1v2H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h6.1c1.26 1.24 2.99 2 4.9 2 3.87 0 7-3.13 7-7 0-1.91-.76-3.64-2-4.9V5a2 2 0 00-2-2h-1V1h-2v2H8V1M5 5h14v2H5m0 2h14v.67c-.91-.43-1.93-.67-3-.67-3.87 0-7 3.13-7 7 0 1.07.24 2.09.67 3H5m11-7.85c2.68 0 4.85 2.17 4.85 4.85 0 2.68-2.17 4.85-4.85 4.85-2.68 0-4.85-2.17-4.85-4.85 0-2.68 2.17-4.85 4.85-4.85M15 13v3.69l3.19 1.84.75-1.3-2.44-1.41V13z" />
										</svg>
									</div>

									<div>
										<h3 className="text-lg font-semibold md:text-xl">Fecha</h3>
										<p className="mb-2">{post.detalles.fechaFormato}</p>
									</div>
								</div>
								{/* <!-- feature - end --> */}

								{/* <!-- feature - start --> */}
								<div className="flex gap-4 md:gap-6">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
										<svg
											fill="currentColor"
											viewBox="0 0 16 16"
											height="2em"
											width="2em"
										>
											<path d="M1 11a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1H2a1 1 0 01-1-1v-3zm5-4a1 1 0 011-1h2a1 1 0 011 1v7a1 1 0 01-1 1H7a1 1 0 01-1-1V7zm5-5a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V2z" />
										</svg>
									</div>

									<div>
										<h3 className="text-lg font-semibold md:text-xl">
											Categorías
										</h3>
										{post?.detalles?.categorias.map((category: any) => {
											return (
												<div key={category} className="mb-2">
													{category}
												</div>
											);
										})}
									</div>
								</div>
								{/* <!-- feature - end --> */}
								{/* <!-- feature - start --> */}
								<div className="flex gap-4 md:gap-6">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											viewBox="0 0 24 24"
											height="2em"
											width="2em"
										>
											<path stroke="none" d="M0 0h24v24H0z" />
											<path d="M14 3v4a1 1 0 001 1h4" />
											<path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2zM9 17h6M9 13h6" />
										</svg>
									</div>

									<div>
										<h3 className="text-lg font-semibold md:text-xl">
											Descripción:
										</h3>
										<p className="mb-2">{post?.detalles?.descripcionEvento}</p>
									</div>
								</div>
								{/* <!-- feature - end --> */}
								{/* <!-- feature - start --> */}
								<div className="flex gap-4 md:gap-6">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											viewBox="0 0 24 24"
											height="2em"
											width="2em"
										>
											<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
											<path d="M15 10 A3 3 0 0 1 12 13 A3 3 0 0 1 9 10 A3 3 0 0 1 15 10 z" />
										</svg>
									</div>

									<div>
										<h3 className="text-lg font-semibold md:text-xl">
											Localización:
										</h3>
										<p className="mb-2 text-purple-900">
											<a href={post?.detalles?.direccion} target="_blank">
												Ir a mapa
											</a>
										</p>
									</div>
								</div>
								{/* <!-- feature - end --> */}
								{/* <!-- feature - start --> */}
								<div className="flex gap-4 md:gap-6">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
										<svg
											viewBox="0 0 24 24"
											fill="currentColor"
											height="2em"
											width="2em"
										>
											<path d="M12.3 2c-.97.03-1.72.84-1.69 1.8.01.24.06.47.16.7l.29.64c.04.13-.03.27-.17.31-.09.05-.19 0-.26-.08l-.42-.55c-.33-.42-.83-.68-1.36-.69-.97-.02-1.77.75-1.79 1.71-.01.42.13.82.39 1.16l.42.5h.01c.08.13.05.29-.06.37-.09.07-.21.07-.29 0L7 7.45c-.34-.26-.75-.4-1.16-.39-.96.02-1.73.82-1.71 1.79.01.53.27 1.03.69 1.36l.57.44c.11.1.11.26-.01.35a.23.23 0 01-.26.05h-.01l-.61-.28c-.23-.09-.46-.15-.7-.16-.96-.03-1.77.73-1.8 1.7 0 .72.4 1.38 1.06 1.66l11.39 5.07 4.59-4.59-5.07-11.39C13.69 2.39 13 1.97 12.3 2m.83 4.1c.42-.01.8.23.96.61l3.05 6.84-3.95-3.94-.93-2.11c-.3-.63.16-1.38.87-1.4M9.85 8.85c.27 0 .52.1.71.3l4.81 4.81c.4.38.41 1.01.03 1.41-.4.4-1.02.41-1.44 0l-4.81-4.81a.987.987 0 01-.02-1.41c.19-.2.45-.3.72-.3m-2.72 3.32c.13 0 .27.04.37.09l2.13.94 3.94 3.94-6.86-3.05c-1.02-.44-.68-1.95.42-1.92m13.15 3.87l-4.24 4.24.85.85c.76.75 1.86 1.04 2.89.77a3.024 3.024 0 002.12-2.12c.27-1.03-.02-2.13-.77-2.89l-.85-.85z" />
										</svg>
									</div>

									<div>
										<h3 className="text-lg font-semibold md:text-xl">
											Sorteos y cuadros:
										</h3>
										<p className="mb-2 text-purple-900">
											<a href={post?.detalles?.urlEvento}>Ver</a>
										</p>
									</div>
								</div>
								{/* <!-- feature - end --> */}
								{/* <!-- feature - start --> */}
								<div className="flex gap-4 md:gap-6">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
										<svg
											viewBox="0 0 1000 1000"
											fill="currentColor"
											height="2em"
											width="2em"
										>
											<path d="M1000 940H776V790c0-36-10-63-30-81s-71.333-47.667-154-89c26.667-20 40-48 40-84 0-10.667-4.333-21.667-13-33-8.667-11.333-15-28.333-19-51-1.333-5.333-6-10.667-14-16s-12.667-19.333-14-42c0-16 4-26 12-30-4-22.667-6.667-42.667-8-60-2.667-25.333 5-51.333 23-78s49.667-40 95-40 77.333 13.333 96 40 26.667 52.667 24 78l-8 60c8 4 12 14 12 30-1.333 22.667-6 36.667-14 42-8 5.333-12.667 10.667-14 16-4 22.667-10.333 39.667-19 51-8.667 11.333-13 22.333-13 33 0 28 7 50 21 66s39.667 32 77 48c74.667 30.667 118 57.333 130 80 4 5.333 7 25.667 9 61s3.667 69 5 101v48M512 678c121.333 52 182 93.333 182 124v138H0V756c0-29.333 28-55.333 84-78 50.667-21.333 85.333-42.667 104-64s28-50.667 28-88c0-13.333-6.333-28-19-44s-21-38.667-25-68c-1.333-6.667-7.333-14-18-22s-17.333-26.667-20-56c0-9.333 1-17 3-23s4.333-10.333 7-13l4-2c-4-30.667-7.333-58-10-82-2.667-33.333 8.333-67.667 33-103s67-53 127-53 102.333 17.667 127 53 35.667 69.667 33 103l-10 82c9.333 5.333 14 18 14 38-2.667 29.333-9.333 48-20 56s-16.667 15.333-18 22c-4 29.333-12.333 52-25 68s-19 30.667-19 44c0 37.333 9.333 66.667 28 88s53.333 42.667 104 64" />
										</svg>
									</div>

									<div>
										<h3 className="text-lg font-semibold md:text-xl">
											Participantes:
										</h3>
										{post?.detalles?.categorias.map((category: any) => {
											return (
												<div key={category} className="mb-2">
													{category}
												</div>
											);
										})}
									</div>
								</div>
								{/* <!-- feature - end --> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getEventos(100);

	return {
		paths: posts.map((post: any) => `/competicion/${post.slug}`),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post = await getEventoBySlug(params?.slug as string);

	return {
		props: { post },
	};
};
