"use server";

import { GET_ALL_PRODUCTS } from "@/graphql/linhas";
import { client } from "./apollo-client";

/**
 * Fetches a list of products from the API based on the provided category ID, page number, and the number of products per page.
 *
 * @param {number} id_categoria - The ID of the product category to fetch products from.
 * @param {number} page - The page number of the products to fetch.
 * @param {number} [productsPerPage=12] - The number of products to fetch per page. Defaults to 12.
 */
export async function getProducts(id_categoria: number, page, productsPerPage = 12): Promise<any> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL_API}produtos?categoria_produto=${id_categoria}&per_page=${productsPerPage}&page=${page}&_embed=wp:featuredmedia`,
    {
      next: { revalidate: 3600 },
    },
  );
  if (!res.ok) {
    throw new Error("Erro ao buscar os produtos");
  }

  const products = await res.json();
  const totalPosts = res.headers.get("X-WP-Total");
  const totalPages = res.headers.get("X-WP-TotalPages");

  return {
    products,
    totalPages,
    totalPosts,
  };
}

export async function getAllProducts(): Promise<any> {
  try {
    const ProductsBylines = await client.query({
      query: GET_ALL_PRODUCTS,
      fetchPolicy: 'no-cache',
    });
    return {
      data: ProductsBylines.data.produtos.edges,
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_API}produtos?slug=${slug}&_embed=wp:featuredmedia`, {
      cache: "no-store", // Use 'force-cache' ou 'no-store' dependendo do comportamento desejado
    });
    const product = await res.json();
    return product;
  } catch (error) {
    console.error(`Erro ao buscar produto: ${slug}`, error);
    return error.message;
  }
}
