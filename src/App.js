import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SearchBooks from './components/Home/SearchBooks';
import Cart from './components/CartAndWishList/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WishList from './components/CartAndWishList/WishList';
import OrderConfirm from './components/OrderConfirm/OrderConfirm';
import SignUpForm from './SignInSignUpForm/SignUpForm';
import SignInForm from './SignInSignUpForm/SignInForm';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import BookDataLayer from './components/BookDataLayer';
import Footer from './components/Footer/Footer';

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
      wishBookCount: "",
      books: [],
      wishBook: []
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

  setSearch = (searchbook) => {
    console.log('text', searchbook);
    this.setState({
      books: searchbook
    })
    console.log('array val', this.state.books)
  }

  render() {
    return (
      <Provider store={store} >
        <div className="App">
        <BrowserRouter>
            <Navbar cartBookCount={this.state.cartBookCount} wishBookCount={this.state.wishBookCount} function={this.setSearch}/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/SearchBooks" component={() => (<SearchBooks data={this.state.books} />)} />
              <Route path="/SignInForm" component={SignInForm} />
              <Route path="/SignUpForm" component={SignUpForm} />
              <Route path="/ForgotPassword" component={ForgotPassword} />
              <Route path="/Cart" component={Cart} />
              <Route path="/resetpassword/*" component={ResetPassword} />
              <Route path="/OrderConfirm" component={OrderConfirm} />
              <Route path="/WishList" component={WishList} />
            </Switch>
          </BrowserRouter>
          <Footer/>
        </div>
      </Provider>
    )
  };
}

export default App