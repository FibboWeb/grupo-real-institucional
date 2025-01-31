import { GET_SEO_LINES } from "@/graphql/linhas";
import { client } from "./apollo-client";


export async function fetchYoastData(slug) {

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


export async function getInfoLine(slug) {

  const url = `https://realh.com.br/wp-json/wp/v2/linhas?slug=${slug}`;
  
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Erro ao buscar os dados: ${response.statusText}`);
      }
      const data = await response.json();
      const meta = {
        title: data[0].yoast_head_json.title,
        description: data[0].yoast_head_json.description,
        banner: data[0].yoast_head_json.og_image[0].url
      }
      
      if (meta && meta !== null) {
          return meta
      } else {
          throw new Error("Dados não encontrados ou estrutura inesperada.");
      }
  } catch (error) {
      console.error("Erro:", error.message);
      return null;
  }
}

// export async function getSEOLines(linha): Promise<any> {
//   try {
//     const seo = await client.query({
//       query: GET_SEO_LINES,
//       variables: { slug: linha },
//     });
// console.log(seo)

//     return {
//       data: seo.data.linhaBy,
//       loading: false, // or some other value that makes sense for your app
//       networkStatus: 7,
//     };
//   } catch (error) {
//     return error;
//   }
// }