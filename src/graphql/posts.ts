import { gql } from "@apollo/client";

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
        categories(first: 1) {
          nodes {
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

export const GET_POSTS_LAST_NOTICIAS_PAGE = gql`
  query GET_LAST_POSTS_NOTICIAS_PAGE {
    posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
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
        categories(first: 1) {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_LAST_POSTS_EVENTOS = gql`
  query GET_LAST_POSTS_EVENTOS {
    posts(first: 6, where: { orderby: { field: DATE, order: DESC }, categoryId: 762 }) {
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

export const GET_ALL_POSTS_SLUG = gql`
  query GET_ALL_POSTS_SLUG($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        categories(first: 1) {
          nodes {
            name
            slug
          }
        }
        slug
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
