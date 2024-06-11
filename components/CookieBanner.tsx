"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";

export default function CookieBanner() {
	const [cookieConsent, setCookieConsent] = useState<any>(null);

	useEffect(() => {
		const storedCookieConsent = getLocalStorage("cookie_consent", null);

		setCookieConsent(storedCookieConsent);
	}, [setCookieConsent]);

	useEffect(() => {
		const newValue = cookieConsent ? "granted" : "denied";

		window.gtag("consent", "update", {
			analytics_storage: newValue,
		});

		setLocalStorage("cookie_consent", cookieConsent);
	}, [cookieConsent]);
	return (
		<div
			className={`my-10 mx-3 md:mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 ${
													cookieConsent != null ? "hidden" : "flex"
												} px-3 md:px-6 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-white rounded-lg md:rounded-full shadow-xl z-50`}
		>
			<div className="text-center">
				<Link href="/privacidad">
					<p>
						Igual que utilizamos volantes para entrenar, hacen falta{" "}
						<span className="font-bold text-green-800">cookies </span>
						para nuestra web.
					</p>
				</Link>
			</div>

			<div className="flex gap-2">
				<button
					className="px-5 py-2 text-purple-800 rounded-md border-gray-900"
					onClick={() => setCookieConsent(false)}
				>
					Rechazar
				</button>
				<button
					className="bg-purple-800 px-5 py-2 text-white rounded-lg"
					onClick={() => setCookieConsent(true)}
				>
					Permitir
				</button>
			</div>
		</div>
	);
}
