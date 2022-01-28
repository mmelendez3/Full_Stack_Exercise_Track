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
import Login from './pages/Login';
import Signup from './pages/Signup';
import LogForm from './pages/Log';

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
      <div className="home-container">
        <Home />
      </div>
      <Login></Login>
      <Signup></Signup>
      <LogForm></LogForm>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
