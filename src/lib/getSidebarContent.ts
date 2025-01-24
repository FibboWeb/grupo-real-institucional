"use server";
import { client } from "@/lib/apollo-client";
import { GET_ALL_CATEGORIES } from "@/graphql/sidebar";
import { GET_POSTS_NOTICIAS_MOST_VIEWED } from "@/graphql/posts";

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
// Função para buscar os posts e retornar os mais visualizados
export async function getNoticiasPostsMostViewed() {
  try {
    const fetchedPosts = await client.query({
      query: GET_POSTS_NOTICIAS_MOST_VIEWED,
    });
    let posts = fetchedPosts.data.popularPosts.nodes;
    return posts;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return [];
  }
}
