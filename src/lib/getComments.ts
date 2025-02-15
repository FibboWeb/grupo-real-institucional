import { GET_COMMENTS_FOR_POST } from "@/graphql/comments";
import { client } from "./apollo-client";

export async function getComments(slug) {
  console.log(slug)
  try {
    const { data } = await client.query({
      query: GET_COMMENTS_FOR_POST,
      variables: { id: slug },
    });

    const comments = data.post.comments.nodes || [];

    return {
      props: comments,
    };
  } catch (error) {
    console.error("Erro ao buscar os comentários dos posts:", error);
    return { props: [] };
  }
}