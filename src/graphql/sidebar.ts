import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
  query GET_ALL_CATEGORIES {
    categories(first: 100, where: { hideEmpty: true }) {
      nodes {
        id
        name
        slug
        databaseId
        children {
          nodes {
            id
            name
            slug
            databaseId
          }
        }
      }
    }
  }
`;
