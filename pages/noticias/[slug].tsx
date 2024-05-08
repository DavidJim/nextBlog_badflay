import { About } from "@/components/About";
import { GetStaticProps, GetStaticPaths } from "next";
import { getNews, getPostBySlug } from "@/lib/service";

export default function post({ post }: { post: any }) {
	return (
		<section className="container mx-auto py-12 md:py-6 md:pt-0 text-center border-b">
			<div className="flex justify-center items-center">
				<div
					className="h-[30rem] md:h-[50] w-full lg:w-5/6 xl:w-3/4 bg-cover bg-center"
					style={{
						backgroundImage: `url(${post?.featuredImage?.node?.sourceUrl})`,
					}}
					title="Woman holding a mug"
				></div>
			</div>
			<div className="max-w-3xl mx-6 lg:mx-auto">
				<div className="mt-3 bg-white rounded-lg flex flex-col justify-between leading-normal">
					<div className="bg-white rounded-xl shadow-md relative top-0 -mt-32 p-5 sm:p-10">
						<h1 className="text-gray-900 font-bold text-3xl mb-2">
							{post.title}
						</h1>
						<p className="text-gray-700 text-xs mt-2">
							Written By:
							<a
								href="#"
								className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
							>
								Ahmad Sultani
							</a>{" "}
							In
							<a
								href="#"
								className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
							>
								Election
							</a>
							,
							<a
								href="#"
								className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
							>
								Politics
							</a>
						</p>
						<p className="text-base leading-8 my-5">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
						<h3 className="text-2xl font-bold my-5">
							#1. What is Lorem Ipsum?
						</h3>
						<p className="text-base leading-8 my-5">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
						<blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry standard dummy text
							ever since the 1500s
						</blockquote>
						<p className="text-base leading-8 my-5">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
						<a
							href="#"
							className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
						>
							#Election
						</a>
						,
						<a
							href="#"
							className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
						>
							#people
						</a>
						,
						<a
							href="#"
							className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
						>
							#Election2020
						</a>
						,
						<a
							href="#"
							className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
						>
							#trump
						</a>
						,
						<a
							href="#"
							className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
						>
							#Joe
						</a>
					</div>
				</div>
			</div>
			{/* Hacer sección de imágenes en caso de que el post las traiga, con un divisor como el de sección */}
		</section>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getNews(100); // retrieve first 100 posts

	return {
		paths: posts.map((post: any) => `/noticias/${post.slug}`),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post = await getPostBySlug(params?.slug as string);

	return {
		props: { post },
	};
};
