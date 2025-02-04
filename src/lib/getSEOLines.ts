import { GET_SEO_LINES } from "@/graphql/linhas";
import { client } from "./apollo-client";

export async function fetchYoastData(slug) {
    if(slug !== undefined && slug !== null){
        const url = `https://realh.com.br/wp-json/wp/v2/linhas?slug=${slug}`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erro ao buscar os dados: ${response.statusText}`);
            }
            const data = await response.json();
            
            if (data.length > 0 && data[0].yoast_head_json) {
                return data.yoast_head_json;
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
    console.log("slug",slug)

    if(slug !== undefined && slug !== null) {
        const url = `https://realh.com.br/wp-json/wp/v2/categoria_produto?slug=${slug}&_embed=wp:post_type`;
      
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erro ao buscar os dados: ${response.statusText}`);
              }
            const data = await response.json();
            return data[0];
        } catch (error) {
            console.log("Erro:", error.message);
            return null;
        }
    }
}
