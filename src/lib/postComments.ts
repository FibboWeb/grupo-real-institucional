// Um handle para realizar um method "post" na rota "/comments"

import { client } from "./apollo-client";
import { CREATE_COMMENT } from "@/graphql/comments";

export async function postComment({ commentOn, content, author, email}) {
  try {
    const { data } = await client.mutate({
      mutation: CREATE_COMMENT,
      variables: {
        input: {
          commentOn, // ID do post
          content,   // Conteúdo do comentário
          author,    // Nome do autor
          email,     // Email do autor
        },
      },
    });

    return data;
  } catch (error) {
    console.error("Erro ao enviar comentário:", error);
    throw new Error(error.message);
  }
}