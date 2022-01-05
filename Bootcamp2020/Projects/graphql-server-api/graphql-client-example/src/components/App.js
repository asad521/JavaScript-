import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  useMutation
} from "@apollo/client";
import { Students } from "./Students";
import client from "../config/graphql-config";
function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <Students></Students>
      </div>
    </ApolloProvider>
  );
}

export default App;
