import Link from "next/link";
import Image from "next/image";
import liga from "../../public/images/LigaClubes.png";
import jornadas from "../../components/Utils/calendar.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export const Results = () => {
	const [menuVisible, setMenuVisible] = useState(false);
	const [jornada, setJornada] = useState("1");

	const toggleMenu = () => {
		setMenuVisible(!menuVisible);
	};

	const selectJornada = (jornadaSeleccionada: string) => {
		setJornada(jornadaSeleccionada);
		setMenuVisible(false); // Cierra el menú
	};
	useEffect(() => {
		document.documentElement.style.setProperty(
			"--swiper-theme-color",
			"#7123b1"
		);
	}, []);
	return (
		<section
			id="news"
			className="flex flex-col mx-auto relative justify-center text-center md:justify-start md:text-start bg-white"
		>
			<div className="container mx-auto">
				<h1 className="font-anton md:ml-16 py-6 -skew-x-12 text-[2.5rem] md:text-[4rem] lg:text-[4.5rem]">
					LIGA: PRIMERA BRONCE
				</h1>
				<div className="flex text-center justify-center items-center pb-8">
					<div className="group relative cursor-pointer py-2">
						<div
							onClick={toggleMenu}
							className="flex items-center justify-between space-x-5 bg-white px-4 border-2 border-purple-800 rounded-xl hover:bg-purple-800 hover:text-white"
						>
							<a className="menu-hover my-2 py-2 text-base font-medium lg:mx-4">
								Jornada {jornada}
							</a>
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</span>
						</div>

						{menuVisible && (
							<div className="absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl">
								<a
									className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
									onClick={() => selectJornada("1")}
								>
									Jornada 1
								</a>

								<a
									className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
									onClick={() => selectJornada("2")}
								>
									Jornada 2
								</a>

								<a
									className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
									onClick={() => selectJornada("3")}
								>
									Jornada 3
								</a>

								<a
									className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
									onClick={() => selectJornada("4")}
								>
									Jornada 4
								</a>
							</div>
						)}
					</div>
				</div>
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="h-full"
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						1268: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
					}}
				>
					{jornadas[jornada as keyof typeof jornadas]?.map((item: any) => {
						return (
							<SwiperSlide
								key="key"
								className="flex text-center justify-center items-center pb-8"
							>
								<div
									key="1"
									className="flex flex-col md:flex-row items-center justify-center pt-6 rounded-lg p-2 md:p-0 pb-8 md:pb-0"
								>
									<div className="flex flex-col items-center pb-4 md:pb-0">
										{/* <span className="text-lg font-semibold mb-8">CD Badlfay</span> */}
										<Image
											src={`/images/clubes/${item.imagenLocal}`}
											alt="Picture of the author"
											height={120}
											width={120}
											className="transition-all duration-200 ease-linear hover:-translate-y-[3px] hover:cursor-pointer"
											priority
										></Image>
									</div>

									{item.resultado ? (
										<div className="text-center items-center p-2 md:p-8 md:bg-white rounded-lg">
											<h2 className="text-sm md:text-xl font-bold">
												Resultado
											</h2>
											<p className="text-[3rem] font-bold mt-1">
												{item.resultado}
											</p>
										</div>
									) : (
										<div className="text-center items-center p-2 md:p-8 md:bg-white rounded-lg">
											<h2 className="text-sm md:text-xl font-bold">
												{item.fecha}
											</h2>
											<p className="text-xs md:text-md md:text-sm text-gray-500">
												Jornada {jornada}
											</p>
											<p className="text-sm md:text-xl font-medium mt-1">
												{item.hora}
											</p>
											<p className="text-sm md:text-lg font-medium mt-1">
												{item.sede}
											</p>
										</div>
									)}

									<div className="flex flex-col items-center pt-4 md:pt-0">
										{/* <span className="text-lg font-semibold mb-8">CD Arroyo Tejada</span> */}
										<Image
											src={`/images/clubes/${item.imagenVisitante}`}
											alt="Picture of the author"
											height={120}
											width={120}
											className="transition-all duration-200 ease-linear hover:-translate-y-[3px] hover:cursor-pointer"
											priority
										></Image>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div className="flex flex-col items-center">
					<Image
						src={liga}
						alt="Liga de Clubes"
						height={100}
						width={100}
						className="transition-all duration-200 ease-linear hover:-translate-y-[3px] hover:cursor-pointer"
						priority
					></Image>
				</div>
			</div>
			<div className="flex justify-center">
				<Link
					href="https://liga.badminton.es/calendario-primera-bronce/"
					target="_blank"
				>
					<button className="mb-6 px-8 items-center rounded-full bg-purple-800 py-3 text-center text-base text-white hover:scale-105 hover:opacity-80 transition duration-200">
						Ver más
					</button>
				</Link>
			</div>
		</section>
	);
};
