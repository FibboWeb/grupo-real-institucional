import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.WP_URL_GRAPH,
  cache: new InMemoryCache(),
});
