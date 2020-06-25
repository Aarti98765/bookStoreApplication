import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
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
import BookDataLayer from './components/BookDataLayer';

const initialState = {
  cartCount: 0,
  wishListCount: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "returnCartBooksLength":
      return {
        cartCount: action.payload
      }
      case "returnWishListLength":
        console.log("returnWishListLength", action.payload)
      return {
        wishListCount: action.payload
      }
    default:
      return {
        cartCount: state.cartCount,
        wishListCount: state.wishListCount
      };
  }
};

const store = createStore(reducer);
var booksData = new BookDataLayer();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartBookCount: "",
      wishBookCount: ""
    }
  }

  async componentDidMount() {
    await booksData.fetchAllCartBook(response => {
      this.setState({
        cartBookCount: response.length
      })
    });
    await booksData.fetchAllWishlistBook(response => {
      this.setState({
        wishBookCount: response.length
      })
    });
  }
  render(){
  return (
    <Provider store={store} >
    <div className="App">
       <BrowserRouter>
       <Navbar cartBookCount={this.state.cartBookCount} wishBookCount={this.state.wishBookCount}/>
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/SearchBook" component={SearchBook} />
       <Route path="/SignInForm" component={SignInForm}/>
       <Route path="/SignUpForm" component={SignUpForm}/>
       <Route path="/ForgotPassword" component={ForgotPassword}/>
       <Route path="/Cart" component={Cart} />
       <Route path="/ResetPassword/*" component={ResetPassword}/>
       <Route path="/OrderConfirm" component={OrderConfirm} />
       <Route path="/WishList" component={WishList} />
      </Switch> 
      </BrowserRouter> 
    </div>
    </Provider>
  )};
}

export default App