import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WP_URL_GRAPH,
  cache: new InMemoryCache(),
});
