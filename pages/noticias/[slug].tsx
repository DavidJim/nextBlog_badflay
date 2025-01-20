import { About } from "@/components/About";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { getNews, getPostBySlug } from "@/lib/serviceStatic";
import { styles } from "../../components/Utils/styles_innerHtml";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function post({ post }: { post: any }) {
	return (
		<>
			<Head>
				<title>{post?.title}</title>
				<meta property="og:title" content={post?.title} />
				<meta property="og:description" content={post?.excerpt} />
				<meta
					property="og:image"
					content={post?.featuredImage?.node?.sourceUrl}
				/>
				<meta
					property="og:url"
					content={`https://badflay.com/noticias/${post.slug}`}
				/>
				<meta property="og:type" content="article" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<section className="container mx-auto py-12 md:py-6 md:pt-0 text-center border-b">
				<div className={`flex justify-center items-center`}>
					<div
						className={`h-[20rem] md:h-[30rem] w-full lg:w-5/6 xl:w-3/4 relative flex justify-start`}
					>
						<Image
							src={post?.featuredImage?.node?.sourceUrl}
							fill={true}
							alt={post?.title}
							className={`object-cover`}
							style={{
								objectPosition: `${post.imagenNoticias.posicionImagen[0]}`,
							}}
						/>
					</div>
				</div>
				<div className="max-w-3xl mx-6 lg:mx-auto">
					<div className="mt-3 bg-white rounded-lg flex flex-col justify-between leading-normal">
						<div className="bg-white rounded-xl shadow-md relative top-0 -mt-32 p-5 sm:p-10">
							<h1 className="text-gray-900 font-bold text-3xl mb-2">
								{post.title}
							</h1>
							<p className="text-gray-700 text-xs mb-0">Autor:</p>
							<p className="text-purple-900 text-sm font-medium m-0 p-0 hover:text-gray-900 transition duration-500 ease-in-out">
								{post.author.node.name}
							</p>
							<div className="flex flex-row justify-center items-center space-x-2 pt-2">
								{post.categories.nodes.map((category: any) => {
									return (
										<p
											key={category}
											className="bg-purple-800 items-center text-[0.5rem]/[0.5rem] text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 mb-2 md:mb-0 rounded-full uppercase"
										>
											{category.name}
										</p>
									);
								})}
							</div>
							{post.content ? (
								<div
									className="text-base text-justify leading-8 my-5 py-5"
									dangerouslySetInnerHTML={{
										__html: styles.paragraphNew + post.content,
									}}
								></div>
							) : (
								<div className="text-base text-justify leading-8 my-5 py-5"></div>
							)}
							<div className="flex justify-center items-center text-gray-600 mt-8 lg:mt-4">
								{post.previous?.slug && (
									<div className="relative flex justify-center items-center">
										<Link
											key={post.previous.slug}
											href={`/noticias/${post.previous.slug}`}
											className="px-2 ml-4 rounded hover:bg-gray-100"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="purple"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M15 19l-7-7 7-7"
												/>
											</svg>
										</Link>
										<Link
											href={`/noticias/${post.previous.slug}`}
											className="px-4 py-2 rounded hover:bg-gray-100 text-[1rem] md:text-lg text-purple-700"
										>
											Noticia anterior
										</Link>
									</div>
								)}
								{post.next?.slug && (
									<div className="relative flex justify-center items-center">
										<Link
											href={`/noticias/${post.next.slug}`}
											className="px-4 py-2 rounded hover:bg-gray-100 text-[1rem] md:text-lg text-purple-700"
										>
											Siguiente noticia
										</Link>
										<Link
											href={`/noticias/${post.next.slug}`}
											className="p-2 mr-4 rounded hover:bg-gray-100"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="purple"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M9 5l7 7-7 7"
												/>
											</svg>
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				{/* Hacer sección de imágenes en caso de que el post las traiga, con un divisor como el de sección */}
			</section>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getNews(100);

	return {
		paths: posts.map((post: any) => `/noticias/${post.slug}`),
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post = await getPostBySlug(params?.slug as string);

	return {
		props: { post },
		revalidate: 30,
	};
};
