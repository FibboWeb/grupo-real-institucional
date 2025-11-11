"use server";
import { client, clientHomeopet } from "@/lib/apollo-client";
import { GET_LAST_POSTS_NOTICIAS, GET_LAST_POSTS_NOTICIAS_HOMEOPET } from "@/graphql/posts";

export async function getLastPostsNoticias() {
  try {
    const fetchedPosts = await client.query({
      query: GET_LAST_POSTS_NOTICIAS,
      fetchPolicy: "network-only",
    });

    return {
      props: fetchedPosts.data.posts,
    };
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export async function getLastPostsNoticiasRealhAPI() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_API}posts?per_page=4&orderby=date&order=desc&_embed=wp:featuredmedia,wp:term,author`,{
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      return [
        {
          status: response.status,
          message: response.statusText,
        },
      ];
    }

    const data = await response.json();
    // -1 é o último elemento do array
    console.log(data[0].author.author_link.split('/').pop())

    const customData = data.map(post => {
      return {
        ...post,
        title: post.title.rendered,
        content: post.content.rendered,
        categories: {
          nodes: post._embedded["wp:term"][0],
        },
        featuredImage: {
          node: {
            sourceUrl: post._embedded["wp:featuredmedia"][0].source_url,
            altText: post._embedded["wp:featuredmedia"][0].alt_text,
          }
        },
        author: {
          node: {
            name: post.author?.author_name || 'Comunicação Grupo Real',
            slug: post.author?.author_link.split('/')[-1] || 'realh',
          }
        }
      }
    })
    
    return customData;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
  }
}

export async function getLastPostsNoticiasHomeoPetAPI() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_HOMEOPET_API}posts?per_page=4&orderby=date&order=desc&_embed=wp:featuredmedia,wp:term,author`,{
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      return [
        {
          status: response.status,
          message: response.statusText,
        },
      ];
    }

    const data = await response.json();
    const customData = data.map(post => {
      return {
        ...post,
        title: post.title.rendered,
        content: post.content.rendered,
        slug: post.link,
        categories: {
          nodes: post._embedded["wp:term"][0],
        },
        featuredImage: {
          node: {
            sourceUrl: post._embedded["wp:featuredmedia"][0].source_url,
            altText: post._embedded["wp:featuredmedia"][0].alt_text,
          }
        },
        author: {
          node: {
            name: post.yoast_head_json?.author || 'Comunicação Grupo Real',
            slug: post.yoast_head_json?.author
              ? post.yoast_head_json.author
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "") // Remove acentos
                  .replace(/[^a-z0-9]+/g, "-")    // Substitui não alfa-numérico por hífens
                  .replace(/^-+|-+$/g, "")        // Remove hífens iniciais/finais
              : 'realh',
          }
        }
      }
    })
    return customData;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
  }
}

export async function getLastPostsHomeopet() {
  try {
    const fetchedPosts = await clientHomeopet.query({
        query: GET_LAST_POSTS_NOTICIAS_HOMEOPET,
        fetchPolicy: "network-only",
    });

    return {
      props: fetchedPosts.data.posts,
    };
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}
