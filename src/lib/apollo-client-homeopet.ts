import { ApolloClient, InMemoryCache } from "@apollo/client";

export const clientHomeopet = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WP_URL_GRAPH_HOMEOPET,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: {
            // keyArgs false significa que todos os argumentos serão ignorados para a chave do cache
            keyArgs: false,
            // Função merge para concatenar as entradas
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  })
});
