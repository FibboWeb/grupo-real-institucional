import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Create an HTTP link with custom fetch function
const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_WP_URL_GRAPH,
  fetch: async (uri, options) => {
    const response = await fetch(uri, {
      ...options,
      next: { revalidate: 3600 }, // Revalidate every hour
      cache: 'force-cache',
    });
    return response;
  },
});

// Client for standard GraphQL
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
    },
    query: {
      fetchPolicy: 'cache-first',
    },
  },
});

// Client for Homeopet GraphQL
export const clientHomeopet = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_WP_URL_GRAPH_HOMEOPET,
    fetch: async (uri, options) => {
      const response = await fetch(uri, {
        ...options,
        next: { revalidate: 3600 },
        cache: 'force-cache',
      });
      return response;
    },
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
    },
    query: {
      fetchPolicy: 'cache-first',
    },
  },
});
