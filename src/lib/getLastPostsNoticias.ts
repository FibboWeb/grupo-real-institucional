"use server";
import { client } from "@/lib/apollo-client";
import { GET_LAST_POSTS_NOTICIAS } from "@/graphql/posts";

export async function getLastPostsNoticias() {
  try {
    const fetchedPosts = await client.query({
      query: GET_LAST_POSTS_NOTICIAS,
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
