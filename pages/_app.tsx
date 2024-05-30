import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { AppLayout } from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
	const isOpen = process.env.NEXT_PUBLIC_IS_OPEN === "true";
	return (
		<AppLayout isOpen={isOpen}>
			<Component {...pageProps} />
		</AppLayout>
	);
}
