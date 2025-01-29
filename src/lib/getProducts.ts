"use server"

import { GET_PRODUCT_BY_LINES } from "@/graphql/linhas";
import { CardProductPropsAPI } from "@/types/produto";
import { client } from "./apollo-client";

export async function getProducts([linha01, linha02]): Promise<CardProductPropsAPI> {
  try {
    const ProductsBylines = await client.query({
          query: GET_PRODUCT_BY_LINES,
          variables: { nameIn: [linha01, linha02] },
        });
        return {
          data: ProductsBylines.data.linhas,
          loading: false, // or some other value that makes sense for your app
          networkStatus: 7,
        }; 
  } catch (error) {
    return error
  }

}

export async function getProductPerSlug(slug: string): Promise<any> {
  try {
    const res = await fetch(`${ process.env.WP_URL }/produto?slug=${ slug }`, {
      cache: 'no-store', // Use 'force-cache' ou 'no-store' dependendo do comportamento desejado
    });
    const product = await res.json();
    return product;
  } catch (error) {
    console.error(`Erro ao buscar produto: ${ slug }`, error);
    return error.message
  }
}
