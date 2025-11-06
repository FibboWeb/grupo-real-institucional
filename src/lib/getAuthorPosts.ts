import { GET_AUTHOR_BY_SLUG } from "@/graphql/author";
import { client } from "./apollo-client";

export async function fetchPosts(authorId, page = 1, postsPerPage = 6) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL_API}posts?author=${authorId}&per_page=${postsPerPage}&page=${page}&_embed=wp:featuredmedia`,
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
    const postCategories = post._embedded?.["categories"] || [];

    const isArtigos = postCategories.some((category) => category.name === "Artigos");
    return {
      ...post,
      featured_media: postImage,
      isArtigos,
    };
  });

  return { posts: postsWithImages, totalPosts: Number(totalPosts), totalPages: Number(totalPages) };
}

export async function fetchAuthorPosts(slug: string, page = 1, postsPerPage = 6): Promise<any | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_API}posts?user=${slug}&per_page=${postsPerPage}&page=${page}&_embed=wp:featuredmedia`);
  const data = await res.json();
  const totalPosts = res.headers.get("X-WP-Total");
  const totalPages = res.headers.get("X-WP-TotalPages");
  return { posts: data, totalPosts: Number(totalPosts), totalPages: Number(totalPages) };
}

export async function fetchAuthorData(authorSlug: string): Promise<any | null> {


  try {
    const { data } = await client.query({
      query: GET_AUTHOR_BY_SLUG,
      variables: { slug: authorSlug },
      fetchPolicy: 'no-cache',
    });
  
    return data.user; 
  } catch (error) {
    console.error("Erro ao buscar os dados do autor:", error);
    return null;

  }
}
