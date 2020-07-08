import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { connect } from 'react-redux';
import BookDataLayer from './BookDataLayer';

var data = new BookDataLayer();

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartCount: '',
            wishListCount: '',
            searchText: '',
            books: []
        }
    }

    handleChange = async (event) => {
        await this.setState({
            searchText: event.target.value
        })

        if (this.state.searchText !== '') {
            data.fetchAllSearchBook(this.state.searchText, response => {
                this.props.function(
                    response
                )
                this.props.history.push('/SearchBooks')
            })
        }

        if (this.state.searchText === '') {
            data.fetchAllSearchBook(this.state.searchText, response => {
                window.location.reload(false)
            })
        }
    }

    handleLogOut = () => {
        localStorage.removeItem("token");
    }

    render() {
        return (
            <div>
                <nav className="book-menu">
                    <ion-icon name="book-outline" style={{ color: 'white', marginTop: '15px', width: '90px', height: '30px', marginLeft: '0px'}}>
                    </ion-icon>
                    <div className="bookstore-text-div-style">
                        <Link to="/" style={{ color: 'brown' }}><h1 style={{ color: 'white', marginTop: '16px' }} >Bookstore</h1></Link>
                    </div>
                    <div>
                        <input onChange={event => this.handleChange(event)} style={{ marginTop: '18px', marginLeft: '20px', width: '260px', height: '20px' }}
                            placeholder="Search..."></input>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <label className="book-cart-text-style">Cart</label>
                        <Link to="/Cart" className="book-cart-link-style" >
                            <ion-icon name="cart-outline" ></ion-icon><lable style={{ marginLeft: '7px' }}><Badge anchorOrigin={{ vertical: 'Top', horizontal: 'right' }} badgeContent={this.props.cartBookCount} showZero color="primary">
                            </Badge></lable></Link>
                        <label className="wishlist-book-text-style">WishList</label>
                        <Link to="/WishList" className="wishlist-book-link-style">
                            <ion-icon name="list-circle-outline"></ion-icon>
                            <lable style={{ marginLeft: '6px' }}><Badge anchorOrigin={{ vertical: 'Top', horizontal: 'right' }} badgeContent={this.props.wishBookCount} showZero color="primary">
                            </Badge></lable></Link>
                        <a href="/SignInForm" className="login-link-style"><label className="login-text-style">Login</label></a>
                        <a href="/" className="logout-link-style" onClick={this.handleLogOut}><label className="logout-text-style">Logout</label></a>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartCount: state.cartCount,
    wishListCount: state.wishListCount
});

const ShowTheLocationWithRouter = withRouter(Navbar)

export default connect(mapStateToProps)(ShowTheLocationWithRouter);