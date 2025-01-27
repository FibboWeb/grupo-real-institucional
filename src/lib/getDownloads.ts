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

// PDFs
const CatalogoHomeopet = "/images/downloads/catalogo-homeopet.pdf";
const LogoHomeopetPdf = "/images/downloads/Logo-Homeopet-PDF.pdf";
const ManualdaMarcaRealH = "/images/downloads/manual-da-marca-realh.pps";

export async function getDownloads() {
  //   try {
  //     const { data } = await client.query({
  //       // Desestruturação direta
  //       query: GET_DOWNLOADS,
  //     });

  //     return { props: data.downloads.nodes };
  //   } catch (error) {
  //     console.error("Erro ao buscar arquivos:", error);
  //     return { props: [] };
  //   }

  const downloads = {
    props: [
      {
        __typename: "Download",
        camposBanners: {
          node: {
            mediaItemUrl: Logo40Anos.src,
          },
        },
        categories: ["Institucional", "Real H Nutrição e Saúde Animal"],
        id: "cG9zdDo0MTI1OQ==",
        title: "Logo 40 Anos",
        featuredImage: {
          node: {
            sourceUrl: Logo40Anos.src,
          },
        },
      },
      {
        __typename: "Download",
        camposBanners: {
          node: {
            mediaItemUrl: LogoHomeopetPdf,
          },
        },
        categories: ["Homeopet"],
        id: "cG9zdDozOTc5Ng==",
        title: "Logo Homeopet PDF",
        featuredImage: {
          node: {
            sourceUrl: HomeopetImage.src,
          },
        },
      },
      {
        __typename: "Download",
        camposBanners: {
          node: {
            mediaItemUrl: LogoHomeopetSlogan.src,
          },
        },
        categories: ["Homeopet"],
        id: "cG9zdDozOTc5NA==",
        title: "Logo Homeopet Slogan",
        featuredImage: {
          node: {
            sourceUrl: HomeopetImage.src,
          },
        },
      },
      {
        __typename: "Download",
        camposBanners: {
          node: {
            mediaItemUrl: LogoHomeopetRosa.src,
          },
        },
        categories: ["Homeopet"],
        id: "cG9zdDozOTc5Mg==",
        title: "Logo Homeopet Preta e Rosa Fundo Transparente",
        featuredImage: {
          node: {
            sourceUrl: HomeopetImage.src,
          },
        },
      },
      {
        __typename: "Download",
        camposBanners: {
          node: {
            mediaItemUrl: LogoHomeopetBranca.src,
          },
        },
        categories: ["CMR Saúde Animal"],
        id: "cG9zdDozOTc5MA==",
        title: "Logo Homeopet Branca e Rosa Fundo Transparente",
        featuredImage: {
          node: {
            sourceUrl: HomeopetImage.src,
          },
        },
      },
      {
        __typename: "Download",
        camposBanners: {
          node: {
            mediaItemUrl: LogoCMRColorida.src,
          },
        },
        categories: ["Grupo Real (Institucional)", "Real H Nutrição e Saúde Animal"],
        id: "cG9zdDozMjQ1OA==",
        title: "Logo CMR Colorida Fundo Transparente",
        featuredImage: {
          node: {
            sourceUrl: CmrImage.src,
          },
        },
      },
      {
        __typename: "Download",
        camposBanners: {
          node: {
            mediaItemUrl: LogoRealhColorida.src,
          },
        },
        categories: ["Grupo Real (Institucional)"],
        id: "cG9zdDoyNzg3Mg==",
        title: "Logo Real H Colorida Fundo Branco",
        featuredImage: {
          node: {
            sourceUrl: RealHImage.src,
          },
        },
      },
      {
        __typename: "Download",
        camposBanners: {
          node: {
            mediaItemUrl: LogoRealhTransparente.src,
          },
        },
        categories: ["Grupo Real (Institucional)", "Real H Nutrição e Saúde Animal"],
        id: "cG9zdDoyNzg3MA==",
        title: "Logo Real H Colorida Fundo Transparente",
        featuredImage: {
          node: {
            sourceUrl: RealHImage.src,
          },
        },
      },
      {
        __typename: "Download",
        camposBanners: {
          node: {
            mediaItemUrl: ManualdaMarcaRealH,
          },
        },
        categories: ["Grupo Real (Institucional)", "Real H Nutrição e Saúde Animal"],
        id: "cG9zdDoyNzg2Ng==",
        title: "Manual da Marca Real H",
        featuredImage: {
          node: {
            sourceUrl: RealHImage.src,
          },
        },
      },
      {
        __typename: "Download",
        camposBanners: {
          node: {
            mediaItemUrl: CatalogoHomeopet,
          },
        },
        categories: ["Homeopet"],
        id: "cG9zdDoyNzg2NA==",
        title: "Catálogo Homeopet",
        featuredImage: {
          node: {
            sourceUrl: HomeopetImage.src,
          },
        },
      },
    ],
  };
  return downloads;
}
