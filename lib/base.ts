export const fetchAPI = async (
	query = "",
	{ variables }: Record<string, any> = {}
) => {
	const response = await fetch(process.env.NEXT_PUBLIC_URL + "/api/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query, variables }),
	});

	const data = await response.json();

	if (response.ok) {
		return data;
	} else {
		throw new Error(data.error || "Error fetching data");
	}
};
