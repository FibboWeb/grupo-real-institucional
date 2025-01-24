import { gql } from "@apollo/client";

export const GET_CATEGORIES_NOTICIAS = gql`
  query GetCategory($slug: ID!, $first: Int, $last: Int, $after: String, $before: String) {
    category(id: $slug, idType: SLUG) {
      name
      posts(first: $first, last: $last, after: $after, before: $before) {
        nodes {
          id
          title
          slug
          content
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              name
              slug
            }
          }
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
          offsetPagination {
            total
            hasMore
            hasPrevious
          }
        }
      }
    }
  }
`;
