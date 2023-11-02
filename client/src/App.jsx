import Home from './Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Profiles from "./Profiles";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
    <div>
      <Profiles />
      <Home />
    </div>
  </ApolloProvider>
  )
}

export default App;