import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaBars, FaTimes, FaHome } from "react-icons/fa";

export const Nav = () => {
	const [hovered, setHovered] = useState(false);
	const [hoveredHome, setHoveredHome] = useState(false);
	const [opened, setOpened] = useState(false);
	const [rotated, setRotated] = useState(false);
	const ref = useRef(null);

	const toggleOpened = () => {
		if (opened) {
			setRotated(true);
			setTimeout(() => {
				setOpened(!opened);
				setRotated(false);
			}, 100); // Cambia este valor según la duración de la transición en milisegundos
		} else {
			setOpened(!opened);
		}
	};

	const handleOpened = opened;
	return (
		<header className="container ml-0 mx-0 md:mx-auto">
			<div className="hidden md:block py-4 px-4">
				<div className="navbar relative w-full mx-auto md:bg-white rounded md:rounded-full">
					<div className="hidden md:block absolute left-4 top-4 lg:left-8 md:top-7 md:text-xl">
						<Link href="/">
							<button
								type="button"
								className={`relative flex items-center justify-center border-2 border-x-2 text-purple-900 border-purple-900 rounded-full hover:bg-purple-900  hover:text-white transition-all duration-300 ${
									hoveredHome ? "lg:w-28" : "w-12"
								}`}
								onMouseEnter={() => setHoveredHome(true)}
								onMouseLeave={() => setHoveredHome(false)}
							>
								<FaHome className="m-3" />
								{hoveredHome && (
									<span className="hidden lg:block mr-2">Inicio</span>
								)}
							</button>
						</Link>
					</div>
					<div className="flex items-center justify-center p-4 text-base lg:text-xl">
						<div className="flex items-center">
							<Link
								href="/club"
								className="px-4 transition-all duration-200 ease-linear hover:-translate-y-[2px]"
							>
								El Club
							</Link>
							<Link
								href="/noticias"
								className="px-4 transition-all duration-200 ease-linear hover:-translate-y-[2px]"
							>
								Noticias
							</Link>
							<Link href="/">
								<Image
									src="/images/logo.png"
									alt="Picture of the author"
									height={180}
									width={180}
									className="transition-all duration-200 ease-linear hover:-translate-y-[3px] hover:cursor-pointer"
								></Image>
							</Link>
							<Link
								href="/competicion"
								className="px-4 transition-all duration-200 ease-linear hover:-translate-y-[2px]"
							>
								Competición
							</Link>
							<Link
								href="/contacto"
								className="px-4 transition-all duration-200 ease-linear hover:-translate-y-[2px]"
							>
								Contacto
							</Link>
						</div>
					</div>
					<div className="hidden md:block absolute right-4 top-4 lg:right-8 md:top-7 md:text-xl">
						<button
							type="button"
							className={`relative flex items-center justify-center border-2 border-x-2 text-purple-900 border-purple-900 rounded-full hover:bg-purple-900  hover:text-white transition-all duration-300 ${
								hovered ? "lg:w-32" : "w-12"
							}`}
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
						>
							<FaUser className="m-3" />
							{hovered && <span className="hidden lg:block mr-2">Login</span>}
						</button>
					</div>
				</div>
			</div>
			{/* <div className="md:hidden navbar fixed w-full mx-auto bg-white z-[10] py-4">
				<div className="flex items-center justify-between p-4 text-base text-purple-900">
					<Image
						src="/images/logo.png"
						alt="Picture of the author"
						height={120}
						width={120}
						className=""
					></Image>
					<button
						onClick={toggleOpened}
						className={`transition duration-200 ease-in-out transform hover:scale-110 z-[1] ${
							rotated ? "rotate-90" : ""
						}`}
					>
						{opened ? <FaTimes size={24} /> : <FaBars size={24} />}
					</button>
				</div>
				{opened && (
					<div
						ref={ref}
						className={`bg-white w-full left-0 p-4 text-base z-[0] transition-transform duration-300 transform
						translate-y-0
					`}
						style={{ transitionProperty: "transform, opacity" }}
					>
						<div className="flex flex-col items-center py-2 text-xl">
							<Link href="/" className="py-4">
								Inicio
							</Link>
							<Link href="#" className="py-4">
								Noticias
							</Link>
							<Link href="#" className="py-4">
								El Club
							</Link>
							<Link href="#" className="py-4">
								Contacto
							</Link>
							<div className="py-4 text-xl">
								<button
									type="button"
									className="relative flex items-center justify-center border-2 border-x-2 text-purple-900 border-purple-900 rounded-full hover:bg-purple-900 hover:text-white w-32"
								>
									<FaUser className="m-3" />
									<span className="mr-2">Login</span>
								</button>
							</div>
						</div>
					</div>
				)}
			</div> */}
			<div
				className={`md:hidden fixed w-screen z-50 overflow-y-hidden flex-col flex ${
					opened && "h-full bg-black/50 backdrop-blur-sm top-0 right-0"
				}`}
			>
				<div className="flex items-center justify-between p-4 text-base bg-white text-purple-900 z-50 overflow-y-hidden">
					<Image
						src="/images/logo.png"
						alt="Picture of the author"
						height={120}
						width={120}
						className=""
					></Image>
					<button
						onClick={toggleOpened}
						className={`transition duration-200 ease-in-out transform hover:scale-110 z-[1] ${
							rotated ? "rotate-90" : ""
						}`}
					>
						{opened ? <FaTimes size={24} /> : <FaBars size={24} />}
					</button>
				</div>
				<div
					className={`-translate-y-full transition-all opacity-0 z-40 ${
						opened && "translate-y-0 opacity-100 overflow-y-auto"
					}`}
				>
					<div
						className={`flex flex-col relative bg-white items-center py-2 text-xl top-0 h-auto z-50 w-full ml-0 overflow-y-auto ${
							!opened && "hidden"
						}`}
					>
						<Link href="/" className="py-4" onClick={toggleOpened}>
							Inicio
						</Link>
						<Link href="/club" className="py-4" onClick={toggleOpened}>
							El Club
						</Link>
						<Link href="/competicion" className="py-4" onClick={toggleOpened}>
							Competición
						</Link>
						<Link href="/noticias" className="py-4" onClick={toggleOpened}>
							Noticias
						</Link>
						<Link href="/contacto" className="py-4" onClick={toggleOpened}>
							Contacto
						</Link>
						<div className="py-4 text-xl" onClick={toggleOpened}>
							<button
								type="button"
								className="relative flex items-center justify-center border-2 border-x-2 text-purple-900 border-purple-900 rounded-full hover:bg-purple-900 hover:text-white w-32"
							>
								<FaUser className="m-3" />
								<span className="mr-2">Login</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
