import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const link = createHttpLink({
  uri: import.meta.env.VITE_API_URL,
  credentials: 'include',
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
