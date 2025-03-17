import { ApolloClient, InMemoryCache } from "@apollo/client";

// Cliente para o GraphQL padrão
export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WP_URL_GRAPH,
  cache: new InMemoryCache(),
});

// Cliente para o GraphQL do Homeopet
export const clientHomeopet = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WP_URL_GRAPH_HOMEOPET,
  cache: new InMemoryCache(),
});
