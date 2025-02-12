import { gql } from "@apollo/client";

export const GET_PRODUCT_BY_LINES = gql`
  query ProdutosPorLinhas($nameIn: [String]) {
    linhas(where: { nameIn: $nameIn }, first: 12) {
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
`;
export const query = gql`
  query produclist($slug: String) {
    linhaBy(slug: $slug) {
      id
      camposLinhas {
        gradeProdutos {
          fieldGroupName
          fundoTag
          linkProduto
          linkTag
          peso
          textoTag
          titulo
        }
      }
      title
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query GET_ALL_PRODUCTS {
    produtos(first: 5000) {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`;

export const GET_SEO_LINES = gql`
  query getSEOLines {
    linhaBy(slug: "linha-nutricao") {
      id
      title(format: RENDERED)
      content(format: RENDERED)
      featuredImage {
        node {
          link
        }
      }
    }
  }
`;
