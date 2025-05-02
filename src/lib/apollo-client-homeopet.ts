import { ApolloClient, InMemoryCache } from "@apollo/client";

export const clientHomeopet = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WP_URL_GRAPH_HOMEOPET,
  cache: new InMemoryCache({})
});
