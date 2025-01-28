import { client } from "@/lib/apollo-client";
import { GET_CATEGORIES_NOTICIAS } from "@/graphql/categories";

export async function getCategoriesNoticias(slug: string) {
  const { data } = await client.query({
    query: GET_CATEGORIES_NOTICIAS,
    variables: {
      slug,
    },
  });
  const category = data?.category;
  const posts = category?.posts?.nodes || [];
  const total = category?.posts?.pageInfo?.offsetPagination?.total || 0;

  return { category, posts, total };
}
