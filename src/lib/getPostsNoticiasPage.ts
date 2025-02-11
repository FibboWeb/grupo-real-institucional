"use server";
import { client } from "@/lib/apollo-client";
import { GET_POSTS_LAST_NOTICIAS_PAGE } from "@/graphql/posts";

export async function fetchPosts(page = 1, postsPerPage = 6, offset = 3) {
  const nwPage = page + offset;
  const res = await fetch(
    `${process.env.WP_URL_API}posts?per_page=${postsPerPage}&page=${nwPage}&_embed=author,wp:featuredmedia,categories`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar os posts");
  }

  const data = await res.json();
  const totalPosts = res.headers.get("X-WP-Total");
  const totalPages = res.headers.get("X-WP-TotalPages");

  const postsWithImages = data.map((post) => {
    const postImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
    const postAuthor = post._embedded?.["author"]?.[0]?.name || null;
    const postAuthorLink = post._embedded?.["author"]?.[0]?.slug || null;
    const postCategories = post._embedded?.["categories"] || [];

    const isArtigos = postCategories.some((category) => category.name === "Artigos");

    return {
      ...post,
      featured_media: postImage,
      author_post_details: {
        name: postAuthor,
        slug: postAuthorLink,
      },
      isArtigos,
    };
  });

  return { posts: postsWithImages, totalPosts: Number(totalPosts), totalPages: Number(totalPages) };
}

export async function getLastPostsNoticias() {
  try {
    const fetchedPosts = await client.query({
      query: GET_POSTS_LAST_NOTICIAS_PAGE,
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
