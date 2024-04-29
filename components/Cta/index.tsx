import Link from "next/link";

export const Cta = () => {
	return (
		<section
			className="relative mx-auto bg-cover bg-center flex justify-center pt-6"
			style={{ backgroundImage: `url('/images/fondo_cta2.jpg')` }}
		>
			<div className="container mx-auto text-left text-white">
				<div className="flex flex-col items-center md:items-start md:justify-start">
					<h1 className="font-anton relative md:ml-16 -skew-x-12 text-[3rem] md:text-[4rem] lg:text-[4.5rem] mb-6">
						PRÓXIMOS EVENTOS
					</h1>
					<section className="my-6 mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
						<article
							className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
							style={{
								backgroundImage: `url('https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
							}}
						>
							<div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
							<div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
								<h3 className="text-center">
									<a
										className="text-white text-2xl font-bold text-center"
										href="#"
									>
										<span className="absolute inset-0"></span>
										Campeonato de España Sénior 2024
									</a>
								</h3>
							</div>
						</article>
						<article
							className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
							style={{
								backgroundImage: `url('https://images.unsplash.com/photo-1599391398131-cd12dfc6c24e?q=80&w=2511&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
							}}
						>
							<div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
							<div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
								<h3 className="text-center">
									<a
										className="text-white text-2xl font-bold text-center"
										href="#"
									>
										<span className="absolute inset-0"></span>
										Andalucía Autonómico Benalmádena sub-15 y sub-19
									</a>
								</h3>
							</div>
						</article>
						<article
							className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
							style={{
								backgroundImage: `url('https://images.unsplash.com/photo-1595220427358-8cf2ce3d7f89?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
							}}
						>
							<div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
							<div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
								<h3 className="text-center">
									<a
										className="text-white text-2xl font-bold text-center"
										href="#"
									>
										<span className="absolute inset-0"></span>
										Andalucía Top TTR Humilladero sub-15 y sub-19
									</a>
								</h3>
							</div>
						</article>
					</section>
				</div>
				<div className="flex justify-center items-center">
					<button className="mb-6 px-8 items-center rounded-full bg-white py-3 text-center text-base text-black hover:scale-105 hover:opacity-80 transition duration-200">
						Ver todos
					</button>
				</div>
			</div>
		</section>
	);
};
