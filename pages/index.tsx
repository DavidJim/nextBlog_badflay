import { Hero } from "@/components/Hero";
import { Cta } from "@/components/Cta";
import { About } from "@/components/About";
import { News } from "@/components/News";
import { GetStaticProps } from "next";
import { getEventos, getNews } from "@/lib/service";

export default function HomePage({
	posts,
	events,
}: {
	posts: any;
	events: any;
}) {
	return (
		<>
			<Hero />
			<Cta posts={events} />
			<News posts={posts} />
			<About />
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getNews(100); // retrieve first 100 posts
	const events = await getEventos(3);

	return {
		props: {
			posts,
			events,
		},
		revalidate: 3600,
	};
};
