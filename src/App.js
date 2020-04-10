import React from 'react';
import './App.css';
import { Route, Router, Switch, BrowserRouter, Link } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop/" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
