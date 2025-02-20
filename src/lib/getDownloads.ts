
// Images
import { GET_DOWNLOADS } from "@/graphql/downloads";
import { client } from "./apollo-client";

// PDFs
const CatalogoHomeopet = "/images/downloads/catalogo-homeopet.pdf";
const LogoHomeopetPdf = "/images/downloads/Logo-Homeopet-PDF.pdf";
const ManualdaMarcaRealH = "/images/downloads/manual-da-marca-realh.pps";

export async function getDownloads() {
  try {
    const { data } = await client.query({
      // Desestruturação direta
      query: GET_DOWNLOADS,
    });
    console.log(data);
    return { props: data.downloads.nodes };
  } catch (error) {
    console.error("Erro ao buscar arquivos:", error);
    return { props: [] };
  }
}
