import React from 'react';

import {Route, Switch} from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SigninSignup from './pages/signin-signup/signin-signup.component'
// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>)


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SigninSignup} />
      </Switch>
    </div>
  );
}

export default App;
