import { gql } from "@apollo/client";

export const GET_DOWNLOADS = gql`
  query GET_DOWNLOADS {
    downloads {
      nodes {
        camposBanners {
          arquivo {
            node {
              mediaItemUrl
            }
          }
        }
        id
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
