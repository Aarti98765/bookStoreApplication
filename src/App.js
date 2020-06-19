import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import SearchBook from './components/SearchBooks';
import Cart from './components/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WishList from './components/WishList';
import OrderConfirm from './components/OrderConfirm';
import Bookstore from './components/Bookstore';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
     {/*  <Bookstore/> */}
       <Navbar />
       <Switch> 
       <Route path="/Home" component={Home}/>
       <Route path="/SearchBook" component={SearchBook} />
       <Route path="/Home" component={Home}/>
       <Route path="/Cart" component={Cart} />
       <Route path="/OrderConfirm" component={OrderConfirm} />
       <Route path="/WishList" component={WishList} />
      </Switch> 
      </BrowserRouter> 
    </div>
  );
}

export default App;