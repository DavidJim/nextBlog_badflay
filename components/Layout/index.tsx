import { ReactNode } from "react";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import Image from "next/image";
import escudo from "../../public/images/escudo_blanco.png";
import logo from "../../public/images/logo_blanco.png";
import logoLoading from "../../public/images/Logo.png";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";
import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading";

export const AppLayout = ({
	children,
	isOpen,
}: {
	children: ReactNode;
	isOpen: boolean;
}) => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return (
			<section className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat">
				<Loading></Loading>
				<Image
					src={logoLoading}
					className="object-cover"
					alt="logo"
					height={200}
					width={200}
				/>
			</section>
		);
	}
	return isOpen ? (
		<main>
			<Nav />
			<GoogleAnalytics GA_MEASUREMENT_ID="G-YQMSQ5M2FD" />
			<>{children}</>
			<CookieBanner />
			<Footer />
		</main>
	) : (
		<div
			className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: "url('/images/home/home_fondo_cta.jpg')" }}
		>
			<div className="md:hidden relative pb-10 pt-10">
				<Image
					src={logo}
					className="object-cover"
					alt="logo"
					height={200}
					width={200}
				/>
			</div>
			<div>
				<div className="font-anton text-[3.5rem] sm:text-[4.75rem] md:text-[8rem] lg:text-[12rem] text-white -skew-x-12 opacity-90">
					MUY PRONTO
				</div>
			</div>
			<div className="flex flex-row justify-center items-center">
				<div className="flex relative pb-10 md:pb-0">
					<Image
						src={escudo}
						className="object-cover"
						alt="escudo"
						height={200}
						width={200}
					/>
				</div>
				<div className="hidden md:flex relative">
					<Image
						src={logo}
						className="object-cover"
						alt="logo"
						height={250}
						width={250}
					/>
				</div>
			</div>
		</div>
	);
};
