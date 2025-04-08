import { ApolloClient, InMemoryCache } from "@apollo/client";

// Cliente para o GraphQL padrão
export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WP_URL_GRAPH,
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
  }), // remover cache do cliente
});

// Cliente para o GraphQL do Homeopet
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
  }),
});
