export interface CardProductPropsAPI {
  data: {
    edges: any;
    linhas: {
      edges: {
        node: {
          id: string;
          camposLinhas: {
            gradeProdutos: {
              fundoTag: string | null;
              linkProduto: string | null;
              linkTag: string | null;
              peso: string | null;
              textoTag: string | null;
              titulo: string | null;
              imagem: {
                node: {
                  link: string;
                };
              } | null;
            } | null;
          };
        };
      }[];
    };
    pageInfo: {
      offsetPagination: {
        hasMore: boolean;
        hasPrevious: boolean;
        total: number;
      };
    };
  };
  loading: boolean;
  networkStatus: number;
}
