import { ApolloClient, InMemoryCache } from "@apollo/client";

// Cliente para o GraphQL padrão
export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WP_URL_GRAPH,
  cache: new InMemoryCache({}), // remover cache do cliente
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});

// Cliente para o GraphQL do Homeopet
export const clientHomeopet = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WP_URL_GRAPH_HOMEOPET,
  cache: new InMemoryCache({}),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
    resultCaching: true,
  }),
});
