import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';
import Landing from './pages/Landing';
import AddConcert from './pages/AddConcert';
import Concerts from './pages/Concerts';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LoginSignUpModal from './components/LoginSignUpModal';

//Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

//Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <div>
            <Routes>
              <Route
              path="/feed"
              element={<Home />}
              />
              <Route
              path="/add-concert"
              element={<AddConcert />}
              />
              <Route path="/profile"
              element={<Profile />}
              />
              <Route path="/concerts"
              element={<Concerts />}
              />
              <Route path="/"
              element={<Landing />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}


export default App;
