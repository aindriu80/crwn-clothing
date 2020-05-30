import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component'; 

import {GlobalStyles} from './global.styles';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';


const HomePage = lazy(()=>import('./pages/homepage/homepage.component.jsx'))
const ShopPage = lazy(()=>import('./pages/shop/shop.component.jsx'))
const CheckoutPage = lazy(()=>import('./pages/checkout/checkout.component.jsx'))
const SignInAndSignUpPage = lazy(()=>import('./pages/shop/sign-in-and-sign-up/sign-in-and-sign-up.component'))


const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
    <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Switch>
        <Suspense fallback={<Spinner/>}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
        </Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
