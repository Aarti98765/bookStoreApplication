import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import PersonList from './components/PersonList';
import WishList from './components/WishList';
import OrderConfirm from './components/OrderConfirm';
import Bookstore from './components/Bookstore';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <BrowserRouter>
       <Navbar />
       <PersonList/>
       <Switch> 
       <Route exact path="/" component={Bookstore}/>
       <Route path="/Home" component={Home}/>
       <Route path="/Cart" component={Cart} />
       <Route path="/OrderConfirm" component={OrderConfirm} />
       <Route path="/WishList" component={WishList} />
      </Switch> 
      </BrowserRouter> 
    </div>
    </Provider>
  );
}

export default App;
