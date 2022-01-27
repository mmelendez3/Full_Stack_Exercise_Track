import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';

function App() {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Header></Header>
      <div>
        <Home />
      </div>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
