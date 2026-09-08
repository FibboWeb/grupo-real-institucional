import { GET_DOWNLOADS } from "@/graphql/downloads";
import { client } from "./apollo-client";

export async function getDownloads() {
  try {
    const { data } = await client.query({
      query: GET_DOWNLOADS,
      fetchPolicy: "no-cache",
    });
    return { props: data.downloads.edges ?? [] };
  } catch (error) {
    console.error("Erro ao buscar arquivos:", error);
    return { props: [] };
  }
}
