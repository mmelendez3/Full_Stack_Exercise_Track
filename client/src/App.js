import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LogForm from './pages/Log';
import ViewLog from './pages/View';
import NoMatch from './pages/NoMatch';

function App() {
  const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header></Header>
        <div className="home-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/log" component={LogForm} />
            <Route exact path="/view" component={ViewLog} />

            <Route component={NoMatch} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
