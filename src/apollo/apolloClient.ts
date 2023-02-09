import { ApolloClient } from "@apollo/client";
import { createApolloCache } from "./createApolloCache";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: createApolloCache(),
});

export default client;
