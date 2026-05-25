import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const clientHomeopet = new ApolloClient({
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_WP_URL_GRAPH_HOMEOPET }),
  cache: new InMemoryCache({}),
});
