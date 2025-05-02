
// Images
import { GET_DOWNLOADS } from "@/graphql/downloads";
import { client } from "./apollo-client";

// PDFs
export async function getDownloads() {
  console.log('getDownloads')
  try {
    'use cache'
    const { data } = await client.query({
      // Desestruturação direta
      query: GET_DOWNLOADS,
      fetchPolicy: 'no-cache',
    });
    console.log(data);
    return { props: data.downloads.edges };
  } catch (error) {
    console.error("Erro ao buscar arquivos:", error);
    return { props: [] };
  }
}
