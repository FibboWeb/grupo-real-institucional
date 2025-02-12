"use server";
import { GET_ALL_POSTS_SLUG } from "@/graphql/posts";
import { client } from "./apollo-client";

export async function getAllPosts() {
  try {
    let allPosts = [];
    let hasNextPage = true;
    let afterCursor = null;

    while (hasNextPage) {
      const response = await client.query({
        query: GET_ALL_POSTS_SLUG,
        variables: {
          first: 100,
          after: afterCursor,
        },
      });

      if (!response.data || !response.data.posts) {
        throw new Error("Nenhum dado retornado da API.");
      }

      // console.log("Response: ",response.data.posts)
      const { nodes, pageInfo } = response.data.posts;

      allPosts = [
        ...allPosts,
        ...nodes.map((edge) => {
          const categories = edge.categories || [];
          return {
            title: edge.title,
            slug: edge.slug,
            categories: categories,
          };
        }),
      ];

      hasNextPage = pageInfo.hasNextPage;
      afterCursor = pageInfo.endCursor;
    }

    return {
      data: allPosts.length > 0 ? allPosts : [],
      loading: false,
      networkStatus: 7,
    };
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return {
      data: [],
      loading: false,
      networkStatus: 8,
    };
  }
}
