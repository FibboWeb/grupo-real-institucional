import { gql } from "@apollo/client";

export const GET_PRODUCT_BY_LINES = gql`
  query ProdutosPorLinhas($nameIn: [String]) {
  linhas(where: { nameIn: $nameIn }) {
    edges {
      node {
        id
        camposLinhas {
          gradeProdutos {
            fundoTag
            linkProduto
            linkTag
            peso
            textoTag
            titulo
            imagem {
              node {
                link
              }
            }
          }
        }
      }
    }
    pageInfo {
      offsetPagination {
        hasMore
        hasPrevious
        total
      }
    }
  }
}
`
