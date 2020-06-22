import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/CartBookView';
import SignInForm from "../pages/SignInForm";
import BookDataLayer from './BookDataLayer';
import { Badge } from '@material-ui/core';
import Home from './Home';
import { connect } from 'react-redux';
import LoginRegistration from './LoginRegistration';

var data = new BookDataLayer();

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            books: [],
            booksInCart: [],
            booksInWishList: [],
            showHome: false,
            cartCount: ''
        }
    }

    componentDidMount() {
        data.fetchAllCartBook(response => {
            this.setState({
                booksInCart: response
            })
        })

        data.fetchAllWishlistBook(response => {
            console.log(response)
            this.setState({
                booksInWishList: response
            })
        })
    }

    render() {
        let { booksInCart } = this.state
        let { booksInWishList } = this.state
        console.log(this.props.cartCount)
      //  this.cartProps.dispatch({ type: "findLengthOfCart" })
        return (
            <div>
                <nav className="menu">
                    <ion-icon name="book-outline" style={{
                        color: 'white', marginTop: '15px',
                        width: '30px', height: '30px', marginLeft: '37px'
                    }}></ion-icon>

                    <div className="font-size">
                       <Link to="/" style={{color:'brown'}}><h1 style={{ color: 'white', marginTop:'16px' }} >Bookstore</h1></Link>
                    </div>
                    <div>
                        <input onClick={event => window.location.href = '/SearchBook'} style={{ marginTop: '18px', marginLeft: '20px', width: '260px', height: '20px' }}
                            placeholder="Search..."></input>
                        {this.state.showHome && <Home info={this.state.books} />}
                    </div>
                    <ul>
                    <li><label style={{ marginLeft: '140px', color: 'white' }}>Cart</label>
                        <Link to="/Cart" style={{ backgroundColor: 'brown', color: 'white', width: '80px', height: '50px' }} >
                            <ion-icon name="cart-outline" ></ion-icon><span style={{ marginLeft: '7px' }}><Badge anchorOrigin={{ vertical: 'Top', horizontal: 'right' }} badgeContent={booksInCart.length} color="primary">
                {/*badgeContent={this.props.cartCount}*/}
                            </Badge></span></Link></li>
                    <li><Link to="/WishList" style={{ backgroundColor: 'brown', color: 'white', width: '50px' }}  >
                        <ion-icon name="list-circle-outline"></ion-icon>
                        <span style={{ marginLeft: '6px' }}><Badge anchorOrigin={{ vertical: 'Top', horizontal: 'right' }} badgeContent={booksInWishList.length} color="primary">
                        </Badge></span></Link></li>
                        <li><Link to="/SignInForm" style={{ marginLeft: '30px', color: 'white' }}>Login</Link></li>    
                    </ul>
                </nav>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    cartCount: state.cartLength
})

export default connect(mapStateToProps) (Navbar);