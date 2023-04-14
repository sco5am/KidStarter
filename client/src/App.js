import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
// import Detail from './pages/Detail';
// import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import CustomerSignup from './pages/CustomerSignup';
import StoreSignup from './pages/StoreSignup';
import Store from './pages/Store';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import { LOGIN } from './utils/mutations';
import Map from './pages/Map'


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
                <Route 
                path="/Login" 
                element={<Login />}
              />
                <Route 
                path="/Seller" 
                element={<StoreSignup/>}
              />
                <Route 
                path="/Buyer" 
                element={<CustomerSignup/>}
              />
                <Route 
                path="/Store" 
                element={<Store/>}
              />
              <Route 
                path="/success" 
                element={<Success />} 
              />
              <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              />
              <Route 
                path="/map" 
                element={<Map />} 
              />
              {/* <Route 
                path="/products/:id" 
                element={<Detail />} 
              />
              <Route
                path="*" 
                element={<NoMatch />} 
              /> */}
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;