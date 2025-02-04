const API_URL = <string>process.env.WORDPRESS_API_ENDPOINT;
const REFRESH_TOKEN = <string>process.env.WORDPRESS_AUTH_REFRESH_TOKEN;
import fetch from "node-fetch";
export async function fetchAPI(
	query = "",
	{ variables }: Record<string, any> = {}
) {
	let headers: any = {
		"Content-Type": "application/json",
	};

	if (REFRESH_TOKEN) {
		headers["Authorization"] = `Bearer ${REFRESH_TOKEN}`;
	}

	try {
		const res = await fetch(API_URL, {
			headers,
			method: "POST",
			body: JSON.stringify({
				query,
				variables,
			}),
			referrerPolicy: "unsafe-url",
		});

		const json: any = await res.json();
		if (json.errors) {
			console.error(json.errors);
			throw new Error("Failed to fetch API");
		}

		return json.data;
	} catch (err) {
		console.log("ERROR---- ", err);
	}
}
