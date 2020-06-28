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
            searchView: false,
            books: []
        }
    }

    handleChange = async (event) => {
        await this.setState({
            searchText: event.target.value
        })

        if (this.state.searchText !== '') {
            data.fetchAllSearchBook(this.state.searchText, response => {
                console.log("text1", this.state.searchText)
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

    render() {
        console.log("hhhh", this.state.searchText, this.state.books)
        return (
            <div>
                <nav className="menu">
                    <ion-icon name="book-outline" style={{
                        color: 'white', marginTop: '15px',
                        width: '30px', height: '30px', marginLeft: '37px'
                    }}></ion-icon>

                    <div className="font-size">
                        <Link to="/" style={{ color: 'brown' }}><h1 style={{ color: 'white', marginTop: '16px' }} >Bookstore</h1></Link>
                    </div>
                    <div>
                        <input onChange={event => this.handleChange(event)} style={{ marginTop: '18px', marginLeft: '20px', width: '220px', height: '20px' }}
                            placeholder="Enter book title or author name..."></input>
                    </div>
                    <ul>
                        <li><label style={{ marginLeft: '120px', color: 'white' }}>Cart</label>
                            <Link to="/Cart" style={{ backgroundColor: 'brown', color: 'white', width: '80px', height: '50px' }} >
                                <ion-icon name="cart-outline" ></ion-icon><span style={{ marginLeft: '7px' }}><Badge anchorOrigin={{ vertical: 'Top', horizontal: 'right' }} badgeContent={this.props.cartBookCount} showZero color="primary">
                                </Badge></span></Link></li>
                        <li><Link to="/WishList" style={{ backgroundColor: 'brown', color: 'white', width: '50px' }}  >
                            <ion-icon name="list-circle-outline"></ion-icon>
                            <span style={{ marginLeft: '6px' }}><Badge anchorOrigin={{ vertical: 'Top', horizontal: 'right' }} badgeContent={this.props.wishBookCount} showZero color="primary">
                            </Badge></span></Link></li>
                        <li><Link to="/SignInForm" style={{ marginLeft: '30px', color: 'white' }}>Login</Link></li>
                    </ul>
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