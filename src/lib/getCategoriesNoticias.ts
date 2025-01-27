import { client } from "@/lib/apollo-client";
import { GET_CATEGORIES_NOTICIAS } from "@/graphql/categories";

export async function getCategoriesNoticias(slug: string, postsPerPage: number, page: number) {
  const after = page > 1 ? `cursor-${(page - 1) * postsPerPage}` : null;
  const { data } = await client.query({
    query: GET_CATEGORIES_NOTICIAS,
    variables: {
      slug,
      first: postsPerPage,
      after,
    },
  });
  const category = data?.category;
  const posts = category?.posts?.nodes || [];
  const total = category?.posts?.pageInfo?.offsetPagination?.total || 0;
  const hasMore = category?.posts?.pageInfo?.offsetPagination?.hasMore || false;
  const hasPrevious = category?.posts?.pageInfo?.offsetPagination?.hasPrevious || false;
  const startCursor = category?.posts?.pageInfo?.startCursor || null;
  const endCursor = category?.posts?.pageInfo?.endCursor || null;

  return { category, posts, total, hasMore, hasPrevious, startCursor, endCursor };
}
