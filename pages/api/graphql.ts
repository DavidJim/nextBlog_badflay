// pages/api/graphql.js

import type { NextApiRequest, NextApiResponse } from "next";

const API_URL = <string>process.env.WORDPRESS_API_ENDPOINT;
const REFRESH_TOKEN = <string>process.env.WORDPRESS_AUTH_REFRESH_TOKEN;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	if (req.method !== "POST") {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
		return;
	}

	const { query, variables } = req.body;

	let headers: any = {
		"Content-Type": "application/json",
	};

	if (REFRESH_TOKEN) {
		headers["Authorization"] = `Bearer ${REFRESH_TOKEN}`;
	}

	try {
		const response = await fetch(API_URL, {
			headers,
			method: "POST",
			body: JSON.stringify({
				query,
				variables,
			}),
			referrerPolicy: "unsafe-url",
		});

		const json = await response.json();
		if (json.errors) {
			console.error(json.errors);
			res.status(500).json({ errors: json.errors });
			return;
		}

		res.status(200).json(json.data);
	} catch (err) {
		console.log("ERROR---- ", err);
		res.status(500).json({ error: "Failed to fetch API" });
	}
}
