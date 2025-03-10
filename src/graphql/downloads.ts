import { gql } from "@apollo/client";

export const GET_DOWNLOADS = gql`
 query GET_DOWNLOADS {
    downloads {
      nodes {
        link
        slug
        id
        title
        category
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
