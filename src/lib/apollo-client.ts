import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const cacheOptions = {
  watchQuery: {
    fetchPolicy: "no-cache" as const,
  },
  query: {
    fetchPolicy: "no-cache" as const,
  },
};

// Cliente para o GraphQL padrão
export const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_WP_URL_GRAPH }),
  cache: new InMemoryCache({}),
  defaultOptions: cacheOptions,
});

// Cliente para o GraphQL do Homeopet
export const clientHomeopet = new ApolloClient({
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_WP_URL_GRAPH_HOMEOPET }),
  cache: new InMemoryCache({}),
  defaultOptions: cacheOptions,
});
