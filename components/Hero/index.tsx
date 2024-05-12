import Link from "next/link";
import Image from "next/image";
import EquipoHome from "../../public/images/EquipoHome.png";
import MobileHome from "../../public/images/mobile2.png";

export const Hero = () => {
	return (
		<section className="container mx-auto py-12 md:py-6 md:pt-0 text-center border-b">
			<div className="mx-auto relative grid max-w-screen-xl px-4 py-2 md:grid-cols-12 md:gap-8 lg:py-16 xl:gap-0">
				<div className="mt-6 md:mt-auto md:col-span-6 md:mr-auto md:place-self-center">
					<div className="hidden md:left-20 md:top-2 md:flex md:ml-12 md:h-48 md:w-48 md:rounded-full">
						<Image
							className="z-10 object-contain"
							src="https://i.ibb.co/WxTBGvc/badflay-removebg-preview.png"
							alt="Logo"
							width={500}
							height={500}
						/>
					</div>
					<div className="flex justify-center text-center md:ml-16 md:justify-start md:text-start">
						<h1 className="font-anton mb-4 max-w-2xl py-6 text-[2.5rem]/[3rem] -skew-x-12 md:text-5xl/[4rem] xl:text-6xl/[4rem] dark:text-black">
							Tu club de bádminton en Jaén
						</h1>
					</div>
					<div className="hidden md:flex justify-center md:ml-16 md:justify-start">
						<Link href="/contacto" className="z-50">
							<button className="mr-3 inline-flex items-center justify-center rounded-full bg-purple-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-purple-800 hover:scale-105 transition duration-200">
								Únete
								<svg
									className="-mr-1 ml-2 h-5 w-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clip-rule="evenodd"
									></path>
								</svg>
							</button>
						</Link>
					</div>
				</div>
				<div className="relative items-center md:col-span-6 md:mt-0 md:flex md:mb-0 ">
					<div className="absolute -z-10 right-0 -top-8 mr-8 md:mr-auto md:top-28 flex bg-purple-800 h-36 w-36 md:h-36 md:w-36 rounded-full lg:h-40 lg:w-40 lg:top-2 xl:top-0 xl:mr-8"></div>
					<Image
						className="flex sm:relative md:pt-40 md:absolute z-10 object-contain lg:pt-24 md:scale-[1.2] xl:scale-100"
						src={EquipoHome}
						alt="mockup"
					/>
					<div className="relative md:absolute md:-left-7 bottom-7 md:-bottom-6 md:justify-self items-center md:h-[3rem] -z-10 lg:hidden">
						<h1 className="font-robotReavers bottom-0 text-6xl md:text-[5rem] tracking-tighter text-white opacity-60">
							<span className="inline-block">BADFLAY</span>
						</h1>
					</div>
				</div>
				<div className="flex md:hidden justify-center md:ml-16 md:justify-start">
					<Link href="/contacto" className="z-50">
						<button className="mr-3 inline-flex items-center justify-center rounded-full bg-purple-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-purple-800">
							Únete
							<svg
								className="-mr-1 ml-2 h-5 w-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>
					</Link>
				</div>
				<div className="absolute bottom-28">
					<div className="hidden lg:block lg:h-4 top-0">
						<h1 className="font-robotReavers mx-auto lg:text-[13rem] xl:text-[16rem] tracking-tighter text-white opacity-60">
							BADFLAY
						</h1>
					</div>
				</div>
			</div>
			<div className="flex mt-10 h-12 md:mt-16 lg:pt-24 xl:pt-32">
				<Link href="/noticias" className="z-50">
					<div className="absolute right-0 h-14 w-60 flex md:w-72 items-center justify-start bg-green-800 hover:scale-125 transition duration-100 hover:opacity-75 hover:cursor-pointer">
						<div className="absolute right-3 h-14 w-64 flex md:w-80 -skew-x-12 items-center justify-start bg-green-800 pt-4">
							<h1 className="mb-4 ml-6 flex max-w-xl text-4xl font-bold tracking-tight text-white md:text-4xl xl:text-4xl">
								ÚLTIMO POST
							</h1>
						</div>
					</div>
				</Link>
			</div>
			<div className="mx-auto grid max-w-screen-xl px-4 md:grid-cols-12 md:gap-8 md:py-0 xl:gap-0">
				<div className="relative hidden md:items-center md:justify-start md:col-span-5 md:mt-0 md:flex">
					<div className="absolute md:right-16 top-4 md:flex bg-purple-800 md:h-1/3 md:w-1/2 md:rounded-full lg:h-1/3 lg:w-1/2"></div>
					<Image
						className="hidden md:flex z-10 object-contain md:h-4/5 md:w-4/5 lg:h-4/5 lg:w-4/5"
						src={MobileHome}
						alt="mockup"
					/>
					<div className="absolute bottom-8 left-4 flex h-1/5 w-1/4 bg-purple-800 md:rotate-45 lg:h-1/5 lg:w-1/4"></div>
				</div>
				<div className="md:col-span-1"></div>
				<div className="grid md:col-span-6 md:mr-auto md:place-self-center">
					<div className="xs:hidden md:flex justify-center pt-10 text-center md:-mt-40 md:justify-start md:pt-0 md:text-start">
						<h1 className="font-anton -skew-x-12 mb-4 max-w-2xl py-6 text-[2.75rem]/[3rem] md:text-5xl/[4rem] xl:text-6xl/[4rem] dark:text-dark">
							Síguenos en redes
						</h1>
						<Image
							className="md:hidden z-10 object-contain h-96 mb-8"
							src={MobileHome}
							alt="mockup"
						/>
					</div>
					<div className="flex justify-center md:justify-start"></div>
					<div className="flex flex-col justify-center md:justify-center">
						<div className="flex flex-row gap-2 justify-start items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								viewBox="0 0 50 50"
								fill="purple"
								className="w-12 h-12 hover:scale-105 hover:opacity-75 hover:cursor-pointer transition duration-300"
							>
								<path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
							</svg>
							<h2 className="font-anton -skew-x-12 text-xl lg:text-3xl">
								@clubbadmintonbadflayjaen
							</h2>
						</div>
						<div className="flex flex-row gap-2 justify-start items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								viewBox="0 0 50 50"
								fill="purple"
								className="w-12 h-12 hover:scale-105 hover:opacity-75 hover:cursor-pointer transition duration-300"
							>
								<path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
							</svg>
							<h2 className="font-anton -skew-x-12 text-xl lg:text-3xl">
								@badflayjaen
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
