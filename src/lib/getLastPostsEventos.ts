"use server";
import { client } from "@/lib/apollo-client";
import { GET_LAST_POSTS_EVENTOS } from "@/graphql/posts";

export async function getLastPostsEventos() {
  try {
    const fetchedPosts = await client.query({
      query: GET_LAST_POSTS_EVENTOS,
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
