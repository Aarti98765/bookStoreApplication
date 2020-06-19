import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/CartBookView';
import BookDataLayer from './BookDataLayer';
import { Badge } from '@material-ui/core';
import Home from './Home';

var data = new BookDataLayer();

class Navbar extends Component {
    constructor(basketProps) {
        super(basketProps)
        this.state = {
            books: [],
            booksInCart: [],
            booksInWishList: [],
            showHome: false
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
        return (
            <div>
                <nav className="menu">
                    <ion-icon name="book-outline" style={{
                        color: 'white', marginTop: '15px',
                        width: '30px', height: '30px', marginLeft: '37px'
                    }}></ion-icon>

                    <div className="font-size">
                        <h1 style={{ color: 'white' }} >Bookstore</h1>
                    </div>
                    <div>
                        <input onClick={event => window.location.href = '/SearchBook'} style={{ marginTop: '18px', marginLeft: '20px', width: '260px', height: '20px' }}
                            placeholder="Search..."></input>
                        {this.state.showHome && <Home info={this.state.books} />}
                    </div>
                    <ul>
                        <li><Link to="/Home" style={{ marginLeft: '100px', color: 'white' }}>Home</Link></li>
                        <li><label style={{ marginLeft: '15px', color: 'white' }}>Cart</label>
                            <Link to="/Cart" style={{ backgroundColor: 'brown', color: 'white', width: '80px', height: '50px' }} >
                                <ion-icon name="cart-outline" ></ion-icon><span style={{ marginLeft: '7px' }}><Badge anchorOrigin={{ vertical: 'Top', horizontal: 'right' }} badgeContent={booksInCart.length} color="primary">
                                </Badge></span></Link></li>
                        <li><Link to="/WishList" style={{ backgroundColor: 'brown', color: 'white', width: '50px' }}  >
                            <ion-icon name="list-circle-outline"></ion-icon>
                            <span style={{ marginLeft: '6px' }}><Badge anchorOrigin={{ vertical: 'Top', horizontal: 'right' }} badgeContent={booksInWishList.length} color="primary">
                            </Badge></span></Link></li>
                    </ul>
                </nav>
            </div>

        )
    }
}

export default Navbar