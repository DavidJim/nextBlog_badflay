import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { IoOpenOutline } from "react-icons/io5";
import { GetStaticProps } from "next";
import { getEventos } from "@/lib/service";
import dayjs from "dayjs";

const CountdownTimer = dynamic(() => import("../../components/Utils/Timer"), {
	ssr: false,
});

export default function Competicion({ posts }: { posts: any }) {
	const compararPorFecha = (a: any, b: any) => {
		const fechaA = new Date(a.detalles.fecha);
		const fechaB = new Date(b.detalles.fecha);
		return fechaA.getTime() - fechaB.getTime();
	};
	const postsOrdered = posts.sort(compararPorFecha);

	postsOrdered.map((post: any) => {
		post.detalles.fechaFormato = dayjs(post.detalles.fecha).format(
			"DD/MM/YYYY"
		);
	});

	return (
		<section className="container mx-auto py-12 md:py-6 md:pt-0 items-center text-center border-b">
			<div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
				<div className="relative flex pt-20 md:py-5 items-center">
					<div className="flex-grow border-t border-gray-400"></div>
					<span className="font-anton flex-shrink -skew-x-12 mx-4 text-[2rem] text-black">
						COMPETICIÓN
					</span>
					<div className="flex-grow border-t border-gray-400"></div>
				</div>
			</div>
			<div className="relative grid grid-cols-12 gap-4 justify-center mx-2">
				{/* Inicio Card */}
				{postsOrdered.map((post: any) => {
					return (
						<div
							key={post.id}
							className="col-span-12 md:col-span-6 xl:col-span-4 flex justify-center items-center"
						>
							<div className="w-full max-w-sm rounded-lg shadow-md transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
								<div
									className="relative transform overflow-hidden rounded-xl text-white shadow-lg"
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
														{post?.detalles?.tituloEvento}
													</h3>
													<div className="mb-0 text-lg text-gray-400">
														{post?.detalles?.federacion[0]}
													</div>
												</div>
												<div className="flex flex-row justify-between">
													<div className="flex flex-col">
														<div className="text-sm text-gray-400">
															Categorías
														</div>
														{post?.detalles?.categorias.map((category: any) => {
															return (
																<div key={category} className="text-[0.83rem]">
																	{category}
																</div>
															);
														})}
													</div>
													<div className="flex flex-col">
														<div className="text-sm text-gray-400">Fecha</div>
														<div className="text-[0.83rem]">
															{post.detalles.fechaFormato}
														</div>
													</div>
													<div className="flex flex-col">
														<div className="text-sm text-gray-400">URL</div>
														<div className="text-[0.83rem]">
															<Link
																href={post?.detalles?.urlEvento}
																target="_blank"
															>
																<IoOpenOutline
																	href={post?.detalles?.urlEvento}
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
														{post?.detalles?.descripcionEvento}
													</p>
												</div>
											</div>
										</div>
									</div>
									<Image
										className="absolute inset-0 w-full -translate-y-4 transform"
										width={500}
										height={500}
										alt={post?.slug}
										src={post?.detalles?.imagen?.node?.sourceUrl}
									/>
									<div className="poster__footer relative z-10 flex flex-row space-x-4 pb-10">
										<Link
											className="mx-auto flex items-center rounded-full bg-purple-800 px-4 py-2 text-white hover:bg-purple-900"
											href={`/competicion/${post.slug}`}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
												></path>
											</svg>
											<div className="ml-2 text-sm text-white">
												Ver detalles
											</div>
										</Link>
									</div>
									<div className="relative z-20 inset-x-0 bottom-0 mx-auto w-full mb-5 text-center text-2xl font-bold uppercase text-white drop-shadow-sm">
										<CountdownTimer targetDate={post.detalles.fecha} />
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getEventos(10); // retrieve first 100 posts

	return {
		props: {
			posts,
		},
		revalidate: 3600,
	};
};
