import { gql } from "@apollo/client";

export const GET_REPRESENTANTES = gql`
  query GET_DOWNLOADS {
    representantes {
      nodes {
        id
        slug
        title(format: RENDERED)
      }
    }
  }
`
