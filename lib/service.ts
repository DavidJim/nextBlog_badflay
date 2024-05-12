import { fetchAPI } from "./base";

// Obtención de posts
export async function getPosts(first = 10) {
	const data = await fetchAPI(
		`query FetchPosts($first: Int = ${first}) {
        posts(first: $first) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
          }
        }
      }`,
		{
			variables: {
				first,
			},
		}
	);
	return data?.posts?.nodes;
}

// Obtención de post by slug
export async function getPostBySlug(slug: string) {
	const data = await fetchAPI(
		`query GetPost($id: ID = "") {
    post(id: $id, idType: SLUG) {
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          name
        }
      }
      categories {
              nodes {
                name
              }
            }
      date
      slug
      title
    }
  }`,
		{
			variables: {
				id: slug,
			},
		}
	);

	return data?.post;
}

export async function getNews(first = 10) {
	const query = `query FetchPostsByCategory($first: Int = ${first}) {
    categories(where: {slug: "Noticias"}, first: $first) {
      nodes {
        name
        posts {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            content
            date
            author {
              node {
                name
              }
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }`;

	const data = await fetchAPI(query, {
		variables: {
			first,
		},
	});

	console.log("DATA", data.categories.nodes[0].posts);
	return data?.categories?.nodes[0]?.posts?.nodes;
}

export async function getEventos(first = 3) {
	const query = `query FetchEventos($first: Int = 10) {
    posts(where: {categoryName: "Eventos"}, first: $first) {
      nodes {
        detalles {
          categorias
          streamlinks {
          link1 {
            url
            title
          }
          link2 {
            url
            title
          }
          link3 {
            url
            title
          }
          link4 {
            url
            title
          }
          link5 {
            url
            title
          }
          link6 {
            url
            title
          }
        }
          descripcionEvento
          fecha
          federacion
          imagen {
            node {
              sourceUrl
            }
          }
          tituloEvento
          urlEvento
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
        title
      }
    }
  }`;

	const data = await fetchAPI(query, {
		variables: {
			first,
		},
	});

	return data?.posts?.nodes;
}

export async function getEventoBySlug(slug: string) {
	const data = await fetchAPI(
		`query GetPost($id: ID = "") {
    post(id: $id, idType: SLUG) {
      detalles {
          direccion
          categorias
          streamlinks {
          link1 {
            url
            title
          }
          link2 {
            url
            title
          }
          link3 {
            url
            title
          }
          link4 {
            url
            title
          }
          link5 {
            url
            title
          }
          link6 {
            url
            title
          }
        }
          descripcionEvento
          fecha
          federacion
          imagen {
            node {
              sourceUrl
            }
          }
          tituloEvento
          urlEvento
        }
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      date
      slug
      title
    }
  }`,
		{
			variables: {
				id: slug,
			},
		}
	);
	let streamlinks = data.post.detalles.streamlinks;
	if (data && streamlinks) {
		for (let key in streamlinks) {
			if (streamlinks[key] === null) {
				delete data.post.detalles.streamlinks[key];
			}
		}
	}
	data.post.detalles.streamlinks = Object.values(
		data.post.detalles.streamlinks
	);
	console.log("LINKS", data?.post.detalles.streamlinks);
	return data?.post;
}
