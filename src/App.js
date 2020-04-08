import React from 'react';
import './App.css';
import { Route, Router, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/homepage/homepage-component.jsx';

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
          <Route exact path="/hats" component={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
