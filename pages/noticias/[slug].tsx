import { About } from "@/components/About";
import { GetStaticProps, GetStaticPaths } from "next";
import { getNews, getPostBySlug } from "@/lib/service";
import { styles } from "../../components/Utils/styles_innerHtml";

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
						<div
							className="text-base text-justify leading-8 my-5 py-5"
							dangerouslySetInnerHTML={{
								__html: styles.paragraphNew + post.content,
							}}
						></div>
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
