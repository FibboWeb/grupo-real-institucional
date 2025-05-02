"use server";
import { client, clientHomeopet } from "@/lib/apollo-client";
import { GET_LAST_POSTS_NOTICIAS, GET_LAST_POSTS_NOTICIAS_HOMEOPET } from "@/graphql/posts";

export async function getLastPostsNoticias() {
  try {
    const fetchedPosts = await client.query({
      query: GET_LAST_POSTS_NOTICIAS,
      fetchPolicy: "no-cache",
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

export async function getLastPostsHomeopet() {
  try {
    const fetchedPosts = await clientHomeopet.query({
      query: GET_LAST_POSTS_NOTICIAS_HOMEOPET,
      fetchPolicy: "no-cache",
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
