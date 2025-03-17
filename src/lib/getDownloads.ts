
// Images
import { GET_DOWNLOADS } from "@/graphql/downloads";
import { client } from "./apollo-client";

// PDFs
export async function getDownloads() {
  try {
    'use cache'
    const { data } = await client.query({
      // Desestruturação direta
      query: GET_DOWNLOADS,
    });
    return { props: data.downloads.nodes };
  } catch (error) {
    console.error("Erro ao buscar arquivos:", error);
    return { props: [] };
  }
}
