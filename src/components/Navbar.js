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
        return (
            <div>
                <nav className="menu">
                    <ion-icon name="book-outline" style={{
                        color: 'white', marginTop: '15px',
                        width: '90px', height: '30px', marginLeft: '10px'
                    }}></ion-icon> 

                    <div className="font-size">
                        <Link to="/" style={{ color: 'brown' }}><h1 style={{ color: 'white', marginTop: '16px' }} >Bookstore</h1></Link>
                    </div>
                    <div>
                        <input onChange={event => this.handleChange(event)} style={{ marginTop: '18px', marginLeft: '20px', width: '260px', height: '20px' }}
                            placeholder="Search..."></input>
                    </div>
                    <div style={{ display:'flex', flexDirection:'row' }}>
                        <label style={{ marginLeft: '120px', color: 'white', marginTop:'20px' }}>Cart</label>
                            <Link to="/Cart" style={{ marginTop:'20px', color: 'white', width: '50px', height: '50px' }} >
                                <ion-icon name="cart-outline" ></ion-icon><lable style={{ marginLeft: '7px' }}><Badge anchorOrigin={{ vertical: 'Top', horizontal: 'right' }} badgeContent={this.props.cartBookCount} showZero color="primary">
                                </Badge></lable></Link>
                                <label style={{ color: 'white', marginTop:'20px' }}>WishList</label>
                        <Link to="/WishList" style={{ marginTop:'20px', backgroundColor: 'brown', color: 'white', width: '50px' }}  >
                            <ion-icon name="list-circle-outline"></ion-icon>
                            <lable style={{ marginLeft: '6px' }}><Badge anchorOrigin={{ vertical: 'Top', horizontal: 'right' }} badgeContent={this.props.wishBookCount} showZero color="primary">
                            </Badge></lable></Link>
                        <Link to="/SignInForm" style={{ marginTop:'20px', marginLeft: '30px', color: 'white' }}>Login</Link>
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