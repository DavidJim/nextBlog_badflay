const API_URL = <string>process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT;

export async function fetchAPI(
	query = "",
	{ variables }: Record<string, any> = {}
) {
	const headers = { "Content-Type": "application/json" };

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
			console.log("ERROR");
			throw new Error("Failed to fetch API");
		}

		return json.data;
	} catch (err) {
		console.log("ERROR---- ", err);
	}
}
