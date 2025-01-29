"use server";
import { client } from "@/lib/apollo-client";
import { GET_POST_DETAILS } from "@/graphql/noticias-post";

export async function getPostDetails(postSlug) {
  try {
    const fetchedPostDetail = await client.query({
      query: GET_POST_DETAILS,
      variables: { slug: postSlug },
    });
    return {
      props: fetchedPostDetail.data,
    };
  } catch (error) {
    console.error("Erro ao buscar os detalhes do post:", error);
    return {
      props: {
        postDetails: [],
      },
    };
  }
}
