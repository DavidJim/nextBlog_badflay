import Link from "next/link";
import { PostBlock } from "@/components/PostBlock";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export const News = ({ posts }: { posts: any }) => {
	useEffect(() => {
		document.documentElement.style.setProperty(
			"--swiper-theme-color",
			"#7123b1"
		);
	}, []);
	return (
		<section
			id="news"
			className="flex flex-col mb-8 mx-auto relative justify-center text-center md:justify-start md:text-start"
		>
			<div className="container mx-auto">
				<h1 className="font-anton md:ml-16 py-6 -skew-x-12 text-[4rem] lg:text-[4.5rem] dark:text-black">
					NOTICIAS
				</h1>
				<div className="mx-4 py-8">
					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						className="h-full"
						breakpoints={{
							640: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							1268: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
						}}
					>
						{posts.map((post: any) => {
							return (
								<SwiperSlide
									key={post.slug}
									className="flex text-center justify-center items-center pb-8"
								>
									<PostBlock key={post.slug} post={post} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
				<div className="flex justify-center">
					<Link href="/noticias">
						<button className="mb-6 px-8 items-center rounded-full bg-purple-800 py-3 text-center text-base text-white hover:scale-105 hover:opacity-80 transition duration-200">
							Ver más
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};
