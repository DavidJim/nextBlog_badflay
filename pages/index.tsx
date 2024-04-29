import { Hero } from "@/components/Hero";
import { Cta } from "@/components/Cta";
import { About } from "@/components/About";
import { News } from "@/components/News";

export default function HomePage() {
	return (
		<>
			<Hero />
			<Cta />
			<News />
			<About />
		</>
	);
}
