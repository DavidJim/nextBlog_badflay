import Link from "next/link";
import Image from "next/image";

import defaultImage from "@/assets/images/defaultBad.jpg";

export const PostBlock = ({ post }: { post: any }) => {
	console.log(post);
	return (
		<div className="post-block p-2 rounded-md">
			<Link href={`/noticias/${post.slug}`}>
				<div className="relative h-[28rem] transition-all duration-200 ease-linear hover:-translate-y-[3px] justify-center items-center">
					<Image
						src={post?.featuredImage?.node?.sourceUrl ?? defaultImage}
						width={500}
						height={500}
						alt={post.slug}
						className="absolute rounded-md h-full w-full object-cover"
					/>
					<div className="absolute inset-0 flex flex-col justify-end px-6 py-4 z-20">
						<h3 className="text-2xl text-white py-4">{post.title}</h3>
						<div
							className="italic text-white"
							dangerouslySetInnerHTML={{ __html: post.excerpt }}
						></div>
					</div>
					<div className="absolute rounded-md inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
				</div>
			</Link>
		</div>
	);
};
