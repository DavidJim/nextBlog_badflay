import Link from "next/link";

export const About = () => {
	return (
		<section
			id="club"
			className="bg-cover bg-center h-screen flex justify-center items-center pt-6"
			style={{ backgroundImage: `url('/images/familia.png')` }}
		>
			<div className="container mx-auto text-left text-white">
				<div className="flex items-center">
					<div className="md:ml-8 lg:ml-16 w-2/3">
						<h1 className="font-anton -skew-x-12 text-[3rem] mb-6">
							SOBRE NUESTRA FAMILIA BADFLAYERA
						</h1>
						<p className="text-xl mb-12">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							viverra euismod odio, gravida pellentesque urna varius vitae.
						</p>
						<button className="mr-3 inline-flex justify-center items-center bg-purple-800 text-white py-4 px-12 rounded-full hover:scale-105 hover:opacity-80 transition duration-200">
							Continúa Leyendo
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
					</div>
				</div>
			</div>
		</section>
	);
};
