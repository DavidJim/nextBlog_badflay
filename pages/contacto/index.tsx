import Link from "next/link";
import Image from "next/image";
import EquipoHome from "../../public/images/EquipoHome.png";

export default function Contacto({ posts }: { posts: any }) {
	return (
		<section className="container mx-auto py-12 md:py-6 md:pt-0 text-center border-b">
			<div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
				<div className="relative flex pt-20 md:py-5 items-center">
					<div className="flex-grow border-t border-gray-400"></div>
					<span className="font-anton flex-shrink -skew-x-12 mx-4 text-[2rem] text-black">
						CONTACTO
					</span>
					<div className="flex-grow border-t border-gray-400"></div>
				</div>
			</div>
			<div className="relative grid grid-cols-12 justify-center items-center mx-4 ">
				<div className="w-full max-w-[50rem] hidden lg:block lg:col-span-6 justify-center pr-10">
					<Image className="z-10" src={EquipoHome} alt="Logo" />
				</div>
				<form className="w-full max-w-[50rem] col-span-12 lg:col-span-6 lg:max-w-[40rem] justify-self">
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
								Nombre
							</label>
							<input
								className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
								id="grid-first-name"
								type="text"
							/>
							{/* <p className="text-red-500 text-xs italic">
								Please fill out this field.
							</p> */}
						</div>
						<div className="w-full md:w-1/2 px-3">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
								Apellidos
							</label>
							<input
								className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-last-name"
								type="text"
							/>
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
								E-mail
							</label>
							<input
								className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="email"
								type="email"
							/>
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
								Mensaje
							</label>
							<textarea
								className=" no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
								id="message"
							></textarea>
							<p className="text-gray-600 text-xs italic"></p>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="flex justify-center items-center">
							<Link href="/competicion">
								<button className="mb-6 px-8 items-center rounded-full bg-purple-800 py-3 text-center text-base text-white hover:scale-105 hover:opacity-80 transition duration-200">
									Enviar
								</button>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
}
