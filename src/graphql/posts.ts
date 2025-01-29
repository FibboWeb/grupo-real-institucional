import { gql, useQuery, useMutation } from "@apollo/client";

export const GET_LAST_POSTS_NOTICIAS = gql`
  query GET_LAST_POSTS_NOTICIAS {
    posts(first: 6, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_POSTS_NOTICIAS_MOST_VIEWED = gql`
  query GET_POSTS_MOST_VIEWED {
    popularPosts(first: 5) {
      nodes {
        slug
        viewCount
        id
        title
        categories(first: 1) {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`;
