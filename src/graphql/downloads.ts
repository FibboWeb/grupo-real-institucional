import { gql } from "@apollo/client";

export const GET_DOWNLOADS = gql`
 query GET_DOWNLOADS {
    downloads {
      edges {
        node {
          id
          title
          category
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
