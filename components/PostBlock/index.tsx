import Link from "next/link";
import Image from "next/image";

import defaultImage from "@/assets/images/default.jpg";

export const PostBlock = ({ post }: { post: any }) => {
	return (
		<div className="post-block p-2 rounded-md">
			<Link href="/post-link">
				<div className="relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
					<img
						src="https://images.unsplash.com/photo-1599391398131-cd12dfc6c24e?q=80&w=2511&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						width={100}
						height={100}
						alt="Post title"
						className="absolute rounded-md h-full w-full object-cover"
					/>
				</div>
			</Link>
			<Link href="/post-link" className="post-content my-4">
				<h3 className="text-2xl py-4">Post Title</h3>
				<p className="italic">Post excerpt</p>
			</Link>
		</div>
	);
};
