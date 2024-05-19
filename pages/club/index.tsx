import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Badflay from "../../public/images/Badflay.jpeg";

export default function Club({ posts }: { posts: any }) {
	const [selectedButton, setSelectedButton] = useState<String>("elClub");
	const [activeTab, setActiveTab] = useState(1);

	const handleButtonClick = (buttonName: String) => {
		setSelectedButton(buttonName);
	};

	const handleTabClick = (tabIndex: any) => {
		setActiveTab(tabIndex);
	};
	return (
		<section className="container mx-auto py-12 md:py-6 md:pt-0 text-center border-b">
			<div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:pt-12 sm:space-y-8 md:space-y-16 max-w-7xl">
				<div className="relative flex pt-20 md:py-5 items-center">
					<div className="flex-grow border-t border-gray-400 mr-2"></div>
					<button
						onClick={() => handleTabClick(1)}
						className={`rounded-full hover:scale-105 transition duration-200 hover:cursor-pointer ${
							activeTab === 1
								? "bg-purple-800 text-white"
								: "text-black border-2 border-green-700 md:border-none md:bg-transparent"
						}`}
					>
						<span className="font-anton flex-shrink -skew-x-12 mx-4 text-[1.5rem] sm:text-[2rem]">
							EL CLUB
						</span>
					</button>
					<span className="font-anton flex-shrink -skew-x-12 mx-4 text-[2rem] text-black">
						/
					</span>
					<button
						onClick={() => handleTabClick(2)}
						className={`rounded-full hover:scale-105 transition duration-200 hover:cursor-pointer ${
							activeTab === 2
								? "bg-green-700 text-white"
								: "text-black border-2 border-purple-800 md:border-none md:bg-transparent"
						}`}
					>
						<span className="font-anton flex-shrink -skew-x-12 mx-4 text-[1.5rem] sm:text-[2rem]">
							ESCUELA
						</span>
					</button>
					<div className="flex-grow border-t border-gray-400 ml-2"></div>
				</div>
			</div>
			<div
				className={`relative flex justify-center items-start ${
					activeTab === 1
						? "flex-col lg:flex-row transition duration-200"
						: "flex-col lg:flex-row-reverse transition duration-200"
				}`}
			>
				<div className="lg:w-1/2 lg:max-w-[40%]">
					<h1
						className={`rounded-xl font-robotReavers text-white flex-shrink -skew-x-12 mx-4 text-[3rem] ${
							activeTab === 1 ? "bg-purple-900" : "bg-green-700"
						}`}
					>
						{activeTab === 1 ? "BADFLAY" : "ESCUELA"}
					</h1>
					<div className="justify-center items-center text-justify px-2 mx-4 mb-6 text-black text-[1rem] pt-4">
						{activeTab === 1 ? (
							`Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
						qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
						sed quia non numquam eius modi tempora incidunt ut labore et dolore
						magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
						nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
						aliquid ex ea commodi consequatur? Quis autem vel eum iure
						reprehenderit qui in ea voluptate velit esse quam nihil molestiae
						consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
						pariatur?`
						) : (
							<span>
								<p className="mb-2">
									¡Descubre el mundo del bádminton de nuestra mano!
								</p>
								<p className="mb-2">
									En nuestra escuela, no solo aprenderás las técnicas
									fundamentales del bádminton, sino que también desarrollarás
									habilidades físicas, mentales y sociales clave. Nuestro equipo
									de entrenadores del primer equipo está dedicado a proporcionar
									una experiencia divertida y enriquecedora, sin importar el
									nivel de habilidad inicial.
								</p>
								<p className="mb-2">
									El bádminton es un deporte emocionante y dinámico que promueve
									la agilidad, la coordinación, la táctica y la estrategia.
									Además, es una excelente manera de fomentar la disciplina, la
									concentración y el compañerismo, valores deportivos muy
									importantes en cualquier ámbito.
								</p>
								<p className="mb-2">
									No pierdas la oportunidad de formar parte de nuestro club.
									Inscríbete en la Escuela Deportiva Municipal de Bádminton y
									descubre todo lo que este increíble deporte tiene para
									ofrecer. ¡Te esperamos en la pista! ¡Badflay!
								</p>
							</span>
						)}
					</div>
				</div>
				<div
					className={`lg:w-1/2 lg:max-w-[40%] rounded-lg ${
						activeTab === 1 ? "p-2 lg:pr-4" : "p-2 lg:pr-4"
					}`}
				>
					<Image
						className="rounded-lg"
						src={activeTab === 1 ? Badflay : Badflay}
						alt="club"
					/>
				</div>
			</div>
			{/* <!-- Details Section Start Here  --> */}
			{activeTab === 2 && (
				<div
					id="detalles"
					className="flex pt-4 pb-8 lg:pt-12 justify-center items-center text-start"
				>
					<div className="mx-8 px-4 md:px-8 md:mb-12">
						{/* <!-- text - start --> */}
						<div className="mb-10 md:mb-16">
							<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
								Detalles curso 2023/24
							</h2>
						</div>
						{/* <!-- text - end --> */}

						<div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-2 xl:gap-16">
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
										Localización
									</h3>
									<p className="mb-2 text-gray-500">Gimnasio de La Salobreja</p>
									<a
										href="https://maps.app.goo.gl/4aBpA9T2ueuJTY9a7"
										className="font-bold text-purple-800 transition duration-100 hover:text-purple-900 active:text-purple-900"
										target="_blank"
									>
										Mapa
									</a>
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
										<path d="M6 1v2H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h6.1c1.26 1.24 2.99 2 4.9 2 3.87 0 7-3.13 7-7 0-1.91-.76-3.64-2-4.9V5a2 2 0 00-2-2h-1V1h-2v2H8V1M5 5h14v2H5m0 2h14v.67c-.91-.43-1.93-.67-3-.67-3.87 0-7 3.13-7 7 0 1.07.24 2.09.67 3H5m11-7.85c2.68 0 4.85 2.17 4.85 4.85 0 2.68-2.17 4.85-4.85 4.85-2.68 0-4.85-2.17-4.85-4.85 0-2.68 2.17-4.85 4.85-4.85M15 13v3.69l3.19 1.84.75-1.3-2.44-1.41V13z" />
									</svg>
								</div>

								<div>
									<h3 className="text-lg font-semibold md:text-xl">
										Días y Horario
									</h3>
									<p className="mb-2 text-gray-500">
										Martes y viernes de 16:30 a 18:00 horas
									</p>
								</div>
							</div>
							{/* <!-- feature - end --> */}
						</div>
					</div>
				</div>
			)}
			<div className="flex justify-center">
				<div className="flex justify-center items-center">
					<Link href="/contacto">
						<button className="mb-6 px-8 items-center rounded-full bg-purple-800 py-3 text-center text-base text-white hover:scale-105 hover:opacity-80 transition duration-200">
							Escríbenos
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
