import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Login from '../src/components/Login/Login';
import Preferences from '../src/components/Preferences/Preferences';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;