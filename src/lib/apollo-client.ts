import { ApolloClient, InMemoryCache } from "@apollo/client";

// Cliente para o GraphQL padrão
export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WP_URL_GRAPH,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          myQueryField: {
            read(existingData, { args, toReference }) {
              if (!existingData) return;
              
              // Tempo limite do cache em milissegundos (2 horas)
              const CACHE_LIFETIME = 2 * 60 * 60 * 1000;
              const now = Date.now();
  
              // Verifica se o cache é recente
              if (existingData.__cacheTimestamp && now - existingData.__cacheTimestamp < CACHE_LIFETIME) {
                return existingData; // Retorna o cache válido
              }
  
              return undefined; // Força uma nova requisição se o cache expirou
            },
            merge(existing, incoming) {
              return {
                ...incoming,
                __cacheTimestamp: Date.now(), // Adiciona um timestamp ao cache
              };
            },
          },
        },
      },
    },
  }),
});

// Cliente para o GraphQL do Homeopet
export const clientHomeopet = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WP_URL_GRAPH_HOMEOPET,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          myQueryField: {
            read(existingData, { args, toReference }) {
              if (!existingData) return;
              
              // Tempo limite do cache em milissegundos (2 horas)
              const CACHE_LIFETIME = 2 * 60 * 60 * 1000;
              const now = Date.now();
  
              // Verifica se o cache é recente
              if (existingData.__cacheTimestamp && now - existingData.__cacheTimestamp < CACHE_LIFETIME) {
                return existingData; // Retorna o cache válido
              }
  
              return undefined; // Força uma nova requisição se o cache expirou
            },
            merge(existing, incoming) {
              return {
                ...incoming,
                __cacheTimestamp: Date.now(), // Adiciona um timestamp ao cache
              };
            },
          },
        },
      },
    },
  }),
});
