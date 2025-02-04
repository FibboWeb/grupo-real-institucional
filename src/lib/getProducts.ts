"use server";

import { GET_PRODUCT_BY_LINES, query } from "@/graphql/linhas";
import { CardProductPropsAPI } from "@/types/produto";
import { client } from "./apollo-client";

// export async function getProducts(categories: string[], offset = 12, page = 1, productsPerPage = 12): Promise<CardProductPropsAPI> {
//   console.log(categories)
//   try {
//         const res = await fetch("https://realh.com.br/wp-json/wp/v2/linhas?slug=linha-homeo-pet,linha-saude&per_page=12", {
//           next: { revalidate: 6 },
//         });
//         const linhas = await res.json();
//         const products = linhas.flatMap(linha => linha.acf?.grade_produtos || [])
//         console.log(products)
//         return products
//   } catch (error) {
    
//   }
// }

export async function getProducts(categories: string[]): Promise<CardProductPropsAPI> {
  try {
    const ProductsBylines = await client.query({
      query: GET_PRODUCT_BY_LINES,
      variables: { nameIn: categories },
    });

    return {
      data: ProductsBylines.data.linhas,
      loading: false,
      networkStatus: 7,
    };
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return {
      data: null,
      loading: false,
      networkStatus: 8,
    };
  }
}


export async function getProductPerSlug(slug: string): Promise<any> {
  try {
    const res = await fetch(`${process.env.WP_URL_API}produtos?slug=${slug}&_embed=wp:featuredmedia`, {
      cache: "no-store", // Use 'force-cache' ou 'no-store' dependendo do comportamento desejado
    });
    const product = await res.json();
    return product;
  } catch (error) {
    console.error(`Erro ao buscar produto: ${slug}`, error);
    return error.message;
  }
}
