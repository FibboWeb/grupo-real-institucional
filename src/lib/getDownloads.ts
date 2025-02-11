import Logo40Anos from "@/public/images/downloads/LOGO-40ANOS.png";
import LogoHomeopetSlogan from "@/public/images/downloads/Logo-Homeopet-Slogan.png";
import LogoHomeopetRosa from "@/public/images/downloads/logo-homeopet-rosa.png";
import LogoHomeopetBranca from "@/public/images/downloads/logo-homeopet-branca.png";
import LogoCMRColorida from "@/public/images/downloads/logo-cmr-colorida.png";
import LogoRealhColorida from "@/public/images/downloads/logo-realh-branco.png";
import LogoRealhTransparente from "@/public/images/downloads/logo-realh-transparente.png";

// Images
import HomeopetImage from "@/public/images/downloads/homeopet.jpg";
import CmrImage from "@/public/images/downloads/cmr.jpg";
import RealHImage from "@/public/images/downloads/logo-realh.png";
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
      console.log(data.downloads.nodes)
      return { props: data.downloads.nodes };
    } catch (error) {
      console.error("Erro ao buscar arquivos:", error);
      return { props: [] };
    }

}
