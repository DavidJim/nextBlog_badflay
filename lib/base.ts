const API_URL = <string>process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT;

export async function fetchAPI(
	query = "",
	{ variables }: Record<string, any> = {}
) {
	let headers: any = {
		"Content-Type": "application/json",
	};

	if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
		headers[
			"Authorization"
		] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
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

		const json = await res.json();

		if (json.errors) {
			console.error(json.errors);
			throw new Error("Failed to fetch API");
		}

		return json.data;
	} catch (err) {
		console.log("ERROR---- ", err);
	}
}
