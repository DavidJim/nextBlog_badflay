import { ReactNode } from "react";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { useState } from "react";
import Image from "next/image";
import escudo from "../../public/images/escudo_blanco.png";
import logo from "../../public/images/logo_blanco.png";

export const AppLayout = ({ children }: { children: ReactNode }) => {
	const [open, setOpen] = useState<boolean>(true);
	return open ? (
		<main>
			<Nav />
			<>{children}</>
			<Footer />
		</main>
	) : (
		<div
			className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: "url('/images/home/home_fondo_cta.jpg')" }}
		>
			<div>
				<div className="font-anton text-[4rem] md:text-[8rem] lg:text-[12rem] text-white -skew-x-12 opacity-90">
					MUY PRONTO
				</div>
			</div>
			<div className="flex flex-row justify-center items-center max-w-48">
				<div className="flex relative">
					<Image
						src={escudo}
						className="object-cover"
						alt="escudo"
						height={300}
						width={300}
					/>
				</div>
				<div className="flex relative">
					<Image
						src={logo}
						className="object-cover"
						alt="logo"
						height={300}
						width={300}
					/>
				</div>
			</div>
		</div>
	);
};
