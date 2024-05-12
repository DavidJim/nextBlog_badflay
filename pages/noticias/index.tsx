import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import { getNews } from "@/lib/service";
import defaultImage from "@/assets/images/defaultBad.jpg";
import dayjs from "dayjs";

export default function News({ posts }: { posts: any }) {
	posts.map((post: any) => {
		post.date = dayjs(post.date).format("DD/MM/YYYY");
	});
	let oldPosts = posts.slice(1);
	return (
		<section className="container mx-auto py-12 md:py-6 md:pt-0 text-center border-b">
			<div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
				<div className="relative flex pt-20 md:py-5 items-center">
					<div className="flex-grow border-t border-gray-400"></div>
					<span className="font-anton flex-shrink -skew-x-12 mx-4 text-[2rem] text-black">
						NOTICIAS
					</span>
					<div className="flex-grow border-t border-gray-400"></div>
				</div>
				{/* Noticia principal */}
				<div className="flex flex-col items-center sm:px-5 md:flex-row">
					<div className="w-full md:w-1/2">
						<div className="block">
							<Image
								width={500}
								height={500}
								alt="MainImage"
								src={posts[0]?.featuredImage?.node?.sourceUrl ?? defaultImage}
								className="shadow-md object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
							/>
						</div>
					</div>
					<div className="flex flex-col items-start justify-center w-full h-full pt-6 pl-0 pb-6 pr-0 mb-6 md:mb-0 md:w-1/2">
						<div className="flex flex-col items-start justify-center text-start h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
							<div key="key" className="col-span-12 flex flex-wrap">
								<div className="flex flex-wrap space-x-1 my-2 items-start">
									{posts[0].categories.nodes.map((category: any) => {
										return (
											<p
												key="key"
												className="bg-purple-800 items-center text-[0.75rem]/[0.75rem] text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 mb-2 md:mb-0
            rounded-full uppercase"
											>
												{category.name}
											</p>
										);
									})}
								</div>
							</div>
							<Link
								href={`/noticias/${posts[0].slug}`}
								className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"
							>
								{posts[0].title}
							</Link>
							<div
								className="text-lg md:text-xl text-black"
								dangerouslySetInnerHTML={{ __html: posts[0].excerpt }}
							></div>
							<div className="flex justify-end items-end">
								<div className="pt-2 pb-0 pl-0">
									<p className="text-sm font-medium inline"></p>
									<a className="inline text-sm font-medium mt-0 ml-1 mb-0 mr-1 underline">
										{posts[0].author.node.name}
									</a>
									<p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
										{posts[0].date}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative flex md:hidden items-center">
					<div className="flex-grow border-t border-gray-400"></div>
					<span className="flex-shrink mx-4 text-xl text-gray-500">
						Anteriores
					</span>
					<div className="flex-grow border-t border-gray-400"></div>
				</div>
				{/* Resto de noticias */}
				<div className="grid grid-cols-12 sm:px-5 sm:gap-x-8 gap-y-16">
					{/* Inicio noticia individual */}
					{oldPosts.map((post: any) => {
						return (
							<div
								key={post.slug}
								className="flex flex-col items-start col-span-12 space-y-3 text-start sm:col-span-6 xl:col-span-4"
							>
								<Link href={`/noticias/${post.slug}`}>
									<div className="shadow-md w-full mb-2 overflow-hidden rounded-lg max-h-56 btn- transition-all duration-200 ease-linear hover:-translate-y-[3px] flex justify-center items-center">
										<Image
											width={500}
											height={500}
											alt="Image"
											src={post?.featuredImage?.node?.sourceUrl ?? defaultImage}
											className="object-cover w-full h-full"
										></Image>
									</div>
								</Link>

								<div key="key" className="col-span-12 flex flex-wrap">
									<div className="flex flex-wrap space-x-1 my-2 items-start">
										{post.categories.nodes.map((category: any) => {
											return (
												<p
													key="key"
													className="bg-purple-800 items-center text-[0.5rem]/[0.5rem] text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 mb-2 md:mb-0 rounded-full uppercase"
												>
													{category.name}
												</p>
											);
										})}
									</div>
								</div>
								<Link
									href={`/noticias/${post.slug}`}
									className="font-bold text-3xl md:text-2xl"
								>
									{post.title}
								</Link>
								<div
									className="text-sm text-black"
									dangerouslySetInnerHTML={{ __html: post.excerpt }}
								></div>
								<div className="pt-2 pr-0 pb-0 pl-0">
									<a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
										{post.author.node.name}
									</a>
									<p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
										{post.date}
									</p>
								</div>
							</div>
						);
					})}
					{/* Fin noticia individual */}

					<div className="flex flex-col items-end col-span-12 space-y-3">
						<div className="flex justify-center items-center">
							<Link href="/competicion">
								<button className="mb-6 px-8 items-center rounded-full bg-purple-800 py-3 text-center text-base text-white hover:scale-105 hover:opacity-80 transition duration-200">
									Cargar más
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getNews(1);
	console.log("Tamaño", posts.length);

	return {
		props: {
			posts,
		},
		revalidate: 3600,
	};
};
