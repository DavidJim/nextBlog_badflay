import { Hero } from "@/components/Hero";
import { Cta } from "@/components/Cta";
import { About } from "@/components/About";
import { News } from "@/components/News";
import { GetStaticProps } from "next";
import { getNews } from "@/lib/service";

export default function HomePage({ posts }: { posts: any }) {
	return (
		<>
			<Hero />
			<Cta />
			<News posts={posts} />
			<About />
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getNews(100); // retrieve first 100 posts

	return {
		props: {
			posts,
		},
		revalidate: 3600,
	};
};
