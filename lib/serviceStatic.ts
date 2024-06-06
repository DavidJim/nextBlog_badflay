import { fetchAPI } from "./baseStatic";
import dayjs from "dayjs";

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
      imagenNoticias {
          posicionImagen
        }
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
      next {
      slug
      }
      previous {
        slug
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

	return data?.categories?.nodes[0]?.posts?.nodes;
}

export async function getNewsV2(first = 10, after = "") {
	const query = `query FetchPostsByCategory($first: Int, $after: String) {
    posts(where: { categoryName: "Noticias" }, first: $first, after: $after) {
      nodes {
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        imagenNoticias {
          posicionImagen
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
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }`;

	const data = await fetchAPI(query, {
		variables: {
			first,
			after,
		},
	});

	return data?.posts;
}

export async function getEventos(
	first = 3,
	after = "",
	afterDate = {},
	fechaLimite = "",
	before = false
) {
	const query = `query FetchEventos($first: Int = 10, $after: String, $afterDate: DateInput!) {
    eventos(first: $first, after: $after, where: {dateQuery: {after: $afterDate}}) {
      nodes {
        detalles {
          categorias
          participantes
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
          fechaFin
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
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }`;

	const data = await fetchAPI(query, {
		variables: {
			first,
			after,
			afterDate,
		},
	});

	const eventosFiltrados = filtrarEventosPorFecha(
		data.eventos,
		fechaLimite,
		before
	);

	return eventosFiltrados;
}

export async function getEventoBySlug(slug: string) {
	const data = await fetchAPI(
		`query GetEvento($id: ID = "") {
    evento(id: $id, idType: SLUG) {
      detalles {
          direccion
          categorias
          participantes
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
          fechaFin
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
	let streamlinks = data.evento.detalles.streamlinks;
	if (streamlinks) {
		for (let key in streamlinks) {
			if (streamlinks[key] === null) {
				delete data.evento.detalles.streamlinks[key];
			}
		}
	}
	data.evento.detalles.streamlinks = Object.values(
		data.evento.detalles.streamlinks
	);
	return data?.evento;
}

function filtrarEventosPorFecha(
	eventos: any,
	fechaLimite: string,
	before: boolean
) {
	// Convertir la fecha límite a un objeto dayjs
	const fechaLimiteDate = dayjs(fechaLimite);

	// Filtrar los eventos
	return eventos.nodes.filter((evento: any) => {
		// Obtener la fecha del campo 'detalles.fecha'
		const fechaEvento = dayjs(evento.detalles.fecha);
		evento.endCursor = eventos.pageInfo?.endCursor || null;
		evento.hasNextPage = eventos.pageInfo?.hasNextPage;

		// Comparar las fechas
		return before
			? fechaEvento.isBefore(fechaLimiteDate)
			: fechaEvento.isAfter(fechaLimiteDate);
	});
}
