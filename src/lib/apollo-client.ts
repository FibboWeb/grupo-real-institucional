import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://realh.com.br/graphql",
  cache: new InMemoryCache(),
});