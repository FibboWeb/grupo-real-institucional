"use server";
import { client } from "@/lib/apollo-client";
import { GET_ALL_CATEGORIES } from "@/graphql/sidebar";

export async function getAllCategories() {
  try {
    const fetchedCategories = await client.query({
      query: GET_ALL_CATEGORIES,
    });

    const filteredCategories = fetchedCategories.data.categories.nodes.filter(
      (category) => category.slug !== "nao-categorizado",
    );

    return {
      props: {
        categories: filteredCategories,
      },
    };
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return {
      props: {
        categories: [],
      },
    };
  }
}
