import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './redux.js';
import './App.css';
import SearchBook from './components/SearchBooks';
import Cart from './components/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WishList from './components/WishList';
import OrderConfirm from './components/OrderConfirm';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <Provider store={store} >
    <div className="App">
       <BrowserRouter>
       <Navbar />
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/SearchBook" component={SearchBook} />
       <Route path="/SignInForm" component={SignInForm}/>
       <Route path="/SignUpForm" component={SignUpForm}/>
       <Route path="/ForgotPassword" component={ForgotPassword}/>
       <Route path="/Cart" component={Cart} />
       <Route path="/ResetPassword" component={ResetPassword}/>
       <Route path="/OrderConfirm" component={OrderConfirm} />
       <Route path="/WishList" component={WishList} />
      </Switch> 
      </BrowserRouter> 
    </div>
    </Provider>
  );
}

export default App