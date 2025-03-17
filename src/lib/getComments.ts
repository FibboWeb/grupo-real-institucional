import { GET_COMMENTS_FOR_POST } from "@/graphql/comments";
import { client } from "./apollo-client";

export async function getComments(slug) {
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

export async function handleSubmitComment(data, postId, commentId = null) {
  const { name, email, comment } = data;

  if (!name || !email || !comment) {
    return { error: "Por favor, preencha todos os campos." };
  }

  try {
    let url;
    if (commentId) {
      url = `${process.env.NEXT_PUBLIC_WP_URL_API}comments/${commentId}?content=${data.comment}&author_name=${data.name}&author_email=${data.email}`;
    } else {
      url = `${process.env.NEXT_PUBLIC_WP_URL_API}comments?post=${postId}&content=${data.comment}&author_name=${data.name}&author_email=${data.email}`;
    }
    const response = await fetch(url,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (response.ok) {
      return await response.json();
    } else {
      return { error: "Ocorreu um erro ao enviar o comentário." };
    }
  } catch (error) {
    return { error: "Ocorreu um erro ao enviar o comentário." };
  }
}