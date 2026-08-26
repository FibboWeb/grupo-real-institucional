"use server";
import { client, clientHomeopet } from "@/lib/apollo-client";
import { GET_LAST_POSTS_NOTICIAS, GET_LAST_POSTS_NOTICIAS_HOMEOPET } from "@/graphql/posts";
import { getWpFeaturedImageUrl } from "@/lib/utils";

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
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_API}posts?per_page=10&orderby=date&order=desc&_embed=wp:featuredmedia,wp:term,author`,{
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
    const FALLBACK_POST_IMAGE = "/images/capa-post-test.webp";
    const customData = data.map(post => {
      const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];

      return {
        ...post,
        title: post.title.rendered,
        content: post.content.rendered,
        date: post.date,
        categories: {
          nodes: post._embedded?.["wp:term"]?.[0] ?? [],
        },
        featuredImage: {
          node: {
            sourceUrl: getWpFeaturedImageUrl(featuredMedia, FALLBACK_POST_IMAGE),
            altText: featuredMedia?.alt_text || post.title.rendered,
          }
        },
        author: {
          node: {
            name: post.author.node.author_name || 'Comunicação Grupo Real',
            slug: post.author.node.author_link || 'realh',
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_HOMEOPET_API}posts?per_page=10&orderby=date&order=desc&_embed=wp:featuredmedia,wp:term,author`,{
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
    const FALLBACK_POST_IMAGE = "/images/capa-post-test.webp";
    const customData = data.map(post => {
      const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];

      return {
        ...post,
        title: post.title.rendered,
        content: post.content.rendered,
        slug: post.link
          ?.replace("conteudo.homeopet.com.br", "blog.homeopet.com.br")
          ?.replace(/\/$/, ""),
        date: post.date,
        categories: {
          nodes: post._embedded?.["wp:term"]?.[0] ?? [],
        },
        featuredImage: {
          node: {
            sourceUrl: getWpFeaturedImageUrl(featuredMedia, FALLBACK_POST_IMAGE),
            altText: featuredMedia?.alt_text || post.title.rendered,
          }
        },
        author: {
          node: {
            name: post.author.node.author_name || 'Comunicação Grupo Real',
            slug: post.author.node.author_link || 'realh',
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
