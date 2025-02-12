import { GET_SEO_LINES } from "@/graphql/linhas";
import { client } from "./apollo-client";

export async function fetchYoastData(slug) {
  if (slug !== undefined && slug !== null) {
    const url = `https://realh.com.br/wp-json/wp/v2/linhas?slug=${slug}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erro ao buscar os dados: ${response.statusText}`);
      }
      const data = await response.json();

      if (data.length > 0 && data[0].yoast_head_json) {
        return data[0].yoast_head_json;
      } else {
        throw new Error("Dados não encontrados ou estrutura inesperada.");
      }
    } catch (error) {
      console.error("Erro:", error.message);
      return null;
    }
  }
}

export async function getInfoLine(slug) {
  if (slug !== undefined && slug !== null) {
    const url = `https://realh.com.br/wp-json/wp/v2/categoria_produto?slug=${slug}&_embed=wp:post_type`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erro ao buscar os dados: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("Info:", data);
      return data[0];
    } catch (error) {
      console.log("Erro:", error.message);
      return null;
    }
  }
}

export async function getSEOLines2(context: string) {
  try {
    const fetchedLines = await fetch(`
      https://realh.com.br/wp-json/wp/v2/categoria_produto?slug=${context}`);
    const data = await fetchedLines.json();
    const imgFetched = await fetch(
      `https://realh.com.br/wp-json/wp/v2/media/${data[0]?.meta?.categoria_produto_imagem}`,
    );
    const imgUrl = await imgFetched.json();
    return {
      props: data,
      urlImagemHero: imgUrl.guid?.rendered,
      text: data[0]?.meta.categoria_produto_texto,
      banner01: data[0]?.meta.banner_01,
      banner02: data[0]?.meta.banner_02,
      textBanner01: data[0]?.meta.texto_banner_01,
      textBanner02: data[0]?.meta.texto_banner_02,
    };
  } catch (error) {
    console.error("Erro ao buscar linhas:", error);
    return {
      props: {
        lines: [],
      },
    };
  }
}
