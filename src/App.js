import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WishList from './components/WishList';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
       <BrowserRouter>
       <Navbar />
       <Switch> 
       <Route exact path="/" component={Home} />
       <Route path="/Cart" component={Cart} />
       <Route path="/WishList" component={WishList} />

      </Switch> 
      </BrowserRouter> 
    </div>
    </Provider>
  );
}

export default App;
