import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import {LaunchInfoContainer} from "./components/Mission";
import {MissionInfoContainer} from "./components/MissionInfo";
const client = new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
      <ApolloProvider client={client} >
      <div>
        <h2>My first Apollo app 🚀</h2>
        <LaunchInfoContainer></LaunchInfoContainer>
        <MissionInfoContainer></MissionInfoContainer>
      </div>
      </ApolloProvider>
  );
}

export default App;
