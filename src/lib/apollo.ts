import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8gbww18r701xx9wq47h16/master',
  cache: new InMemoryCache()
})