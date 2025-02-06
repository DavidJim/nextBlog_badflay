import Link from "next/link";
import Image from "next/image";
import EquipoHome from "../../public/images/contacto_club.jpg";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";

export default function Contacto({ posts }: { posts: any }) {
	const [nombre, setNombre] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [apellidos, setApellidos] = useState<string>("");
	const [mensaje, setMensaje] = useState<string>("");
	const [errors, setErrors] = useState<any[]>([]);
	const [errorPopup, setErrorPopup] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);

	const onSubmit = async (e: any) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const mySchema = z.object({
				nombre: z
					.string({ message: "Solo se acepta cadena de texto" })
					.min(3, { message: "Longitud mínima de 3 caracteres" }),
				email: z.coerce
					.string({ message: "Solo se acepta cadena de texto" })
					.email({ message: "Formato de email incorrecto" })
					.min(5, { message: "Longitud mínima de 5 caracteres" }),
				apellidos: z.string({ message: "Solo se acepta cadena de texto" }),
				mensaje: z
					.string({ message: "Solo se acepta cadena de texto" })
					.min(20, { message: "Longitud mínima de 20 caracteres" })
					.max(1000, { message: "Longitud máxima de 1000 caracteres" }),
			});

			// store validation response
			const response = mySchema.safeParse({
				nombre: nombre,
				email: email,
				apellidos: apellidos,
				mensaje: mensaje,
			});

			// refine errors
			if (!response.success) {
				let errArr: any[] = [];
				const { errors: err } = response.error;
				for (var i = 0; i < err.length; i++) {
					errArr.push({ for: err[i].path[0], message: err[i].message });
				}
				setErrors(errArr);
				setIsLoading(false);
				throw err;
			}

			try {
				await emailjs
					.send(
						"service_4mzviaj",
						"template_1dq4d2r",
						{
							from_name: nombre + " " + apellidos + " con email " + email,
							from_email: email,
							message: mensaje,
						},
						{
							publicKey: "J7eOtlNC1ZRgysHBy",
						}
					)
					.then(
						() => {
							setSuccess(true);
						},
						(error) => {
							setErrorPopup(true);
						}
					);
			} catch (err) {
				setIsLoading(false);
				setErrorPopup(true);
			}
			setNombre("");
			setApellidos("");
			setEmail("");
			setMensaje("");
			setErrors([]);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const closeSuccessPopup = () => {
		setSuccess(false);
	};

	const closeErrorPopup = () => {
		setErrorPopup(false);
	};

	return (
		<section className="container mx-auto py-12 md:py-6 md:pt-0 text-center border-b">
			<div className="w-full pt-4 pr-5 lg:pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 lg:space-y-16 max-w-7xl">
				<div className="relative flex pt-20 lg:py-5 items-center">
					<div className="flex-grow border-t border-gray-400"></div>
					<span className="font-anton flex-shrink -skew-x-12 mx-4 text-[2rem] text-black">
						CONTACTO
					</span>
					<div className="flex-grow border-t border-gray-400"></div>
				</div>
			</div>
			<div className="relative grid grid-cols-12 justify-center mx-4">
				<div className="relative w-full col-span-12 lg:block lg:col-span-6 lg:scale-90 xl:scale-90 justify-center pt-6 pb-12 lg:pb-0 lg:pt-0">
					<Image
						className="z-10 rounded-lg shadow-lg"
						src={EquipoHome}
						alt="Logo"
						priority
					/>
				</div>
				<form
					className="relative w-full col-span-12 lg:col-span-6 lg:max-w-[40rem] justify-self"
					onSubmit={onSubmit}
				>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
								Nombre
							</label>
							<input
								className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
								id="grid-first-name"
								type="text"
								value={nombre}
								onChange={(e) => setNombre(e.target.value)}
							/>
							<div className="mt-1 text-xs text-red-500">
								{errors.find((error) => error.for === "nombre")?.message}
							</div>
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
								value={apellidos}
								onChange={(e) => setApellidos(e.target.value)}
							/>
							<div className="mt-1 text-xs text-red-500">
								{errors.find((error) => error.for === "apellidos")?.message}
							</div>
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
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<div className="mt-1 text-xs text-red-500">
								{errors.find((error) => error.for === "email")?.message}
							</div>
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
								value={mensaje}
								onChange={(e) => setMensaje(e.target.value)}
							></textarea>
							<p className="text-gray-600 text-xs italic"></p>
							<div className="mt-1 text-xs text-red-500">
								{errors.find((error) => error.for === "mensaje")?.message}
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="flex justify-center items-center">
							<button
								type="submit"
								className="mb-6 px-8 items-center rounded-full bg-purple-800 py-3 text-center text-base text-white hover:scale-105 hover:opacity-80 transition duration-200"
							>
								{isLoading ? "Enviando..." : "Enviar"}
							</button>
						</div>
					</div>
				</form>
				{errorPopup && (
					<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
						<div className="bg-red-50 border-b border-red-400 text-red-800 text-sm p-4 rounded-md flex justify-between">
							<div>
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 mr-2"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
											clip-rule="evenodd"
										/>
									</svg>
									<p>
										<span className="font-bold"> Info: </span>
										Ha ocurrido un error. Inténtalo de nuevo más tarde o ponte
										en contacto a través de badflayjaen@gmail.com
									</p>
								</div>
							</div>
							<div onClick={closeErrorPopup} className="cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 ml-3"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</div>
						</div>
					</div>
				)}
				{success && (
					<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
						<div className="bg-white p-8 rounded-md text-center">
							<p className="text-green-700 text-lg font-semibold mb-4">
								Mensaje recibido, te responderemos lo antes posible a la
								dirección facilitada.
							</p>
							<button
								className="bg-purple-800 text-white px-4 py-2 rounded-full"
								onClick={closeSuccessPopup}
							>
								Cerrar
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
