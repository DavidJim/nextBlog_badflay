import { Hero } from "@/components/Hero";
import { Cta } from "@/components/Cta";
import { About } from "@/components/About";
import { News } from "@/components/News";
import { Results } from "@/components/Results";
import { Partners } from "@/components/Partners";
import { GetStaticProps } from "next";
import { getEventos, getNews, getNewsV2 } from "@/lib/serviceStatic";
import dayjs from "dayjs";

export default function HomePage({
	posts,
	eventos,
	oldEvents,
}: {
	posts: any;
	eventos: any;
	oldEvents: any;
}) {
	return (
		<div className="scroll-smooth">
			<section id="inicio">
				<Hero />
			</section>
			<section id="liga">
				<Results />
			</section>
			<section id="eventos">
				<Cta eventos={eventos} oldEvents={oldEvents} />
			</section>
			<section id="noticias">
				<News posts={posts} />
			</section>
			<section id="colaboradores">
				<Partners />
			</section>
			<section id="sobrenosotros">
				<About />
			</section>
		</div>
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
	let oldEvents = false;
	const fechaFiltro = fechaActual.subtract(4, "day").format("YYYY-MM-DD");

	const postsNodes = await getNewsV2(4);
	let eventos = await getEventos(3, "", fechaObjeto, fechaFiltro);
	if (eventos.length === 0) {
		eventos = await getEventos(3, "", fechaObjeto, fechaFiltro, true);
		oldEvents = true;
	}
	const posts = postsNodes.nodes;

	return {
		props: {
			posts,
			eventos,
			oldEvents,
		},
		revalidate: 30,
	};
};
