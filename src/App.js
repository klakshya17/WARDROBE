import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'
import Home from './containers/home'
import Men from './containers/men'
import Women from './containers/women'
import Kids from './containers/kids'
import SignIn from './containers/sign_in'
import SignUp from './containers/sign_up'
import Checkout from './containers/checkout'
import Wishlist from './containers/wishlist'
import ShoppingBag from './containers/shopping_bag'

const App = () => {
  return (
    <div>
      < Navbar />

    
      <Router>
      <Switch>
                  {/* <Route exact path="/login" component={Login} /> */}
                  <Route exact path="/" component={Home} />
                  <Route exact path="/men" component={Men} />
                  <Route exact path="/women" component={Women} />
                  <Route exact path="/kids" component={Kids} />
                  <Route exact path="/sign-in" component={SignIn} />
                  <Route exact path="/sign-up" component={SignUp} />
                  <Route exact path="/wishlist" component={Wishlist} />
                  <Route exact path="/shopping-bag" component={ShoppingBag} />
                  <Route exact path="/checkout" component={Checkout} />
                  <Redirect to={'/'} />
      </Switch>
      </Router>

      <Footer/>
      
      </div>
  );
}

export default App;
