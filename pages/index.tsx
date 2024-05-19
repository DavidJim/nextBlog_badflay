import { Hero } from "@/components/Hero";
import { Cta } from "@/components/Cta";
import { About } from "@/components/About";
import { News } from "@/components/News";
import { GetStaticProps } from "next";
import { getEventos, getNews, getNewsV2 } from "@/lib/service";
import dayjs from "dayjs";

export default function HomePage({
	posts,
	eventos,
}: {
	posts: any;
	eventos: any;
}) {
	return (
		<>
			<Hero />
			<Cta eventos={eventos} />
			<News posts={posts} />
			<About />
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	// Obtener la fecha actual usando dayjs
	const fechaActual = dayjs();

	// Extraer el año actual
	const yearActual = fechaActual.year();

	// Crear un objeto con el año actual y los valores deseados para el mes y el día
	const fechaObjeto = {
		year: yearActual,
		month: 1,
		day: 1,
	};
	const fechaFiltro = fechaActual.subtract(4, "day").format("YYYY-MM-DD");

	const postsNodes = await getNewsV2(4);
	const eventos = await getEventos(3, fechaObjeto, fechaFiltro);
	const posts = postsNodes.nodes;

	return {
		props: {
			posts,
			eventos,
		},
		revalidate: 3600,
	};
};
