import React, { Fragment, Component } from 'react';
import BookDataLayer from '../BookDataLayer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './BookCartStyle/CartAndWishList.scss';

var data = new BookDataLayer();

class BookWishList extends Component {
    constructor() {
        super()
        this.state = {
            booksInWishList: [],
            counter: 0,
            cartBookCount: ''
        }
    }

    componentDidMount() {
        data.fetchAllWishlistBook(response => {
            console.log(response)
            this.setState({
                booksInWishList: response
            })
        })
        this.props.dispatch({ type: "returnWishListLength", payload: this.state.booksInWishList.length });
    }

    handleRemovebooks = async (e) => {
        await data.removeFromWishList(e)
        window.location.reload(false);
        await data.fetchAllWishlistBook(response => {
            this.setState({
                booksInWishList: response
            })
        })
        this.props.dispatch({ type: "returnWishListLength", payload: this.state.booksInWishList.length });
    }

    handleClickAddToCart = async (e) => {
        await data.addToCart(e, 1)
        this.props.history.push('/cart');
        data.removeFromWishList(101, e)
        window.location.reload(false);
        await data.fetchAllWishlistBook(response => {
            this.setState({
                booksInWishList: response
            })
        })
        this.props.dispatch({ type: "returnWishListLength", payload: this.state.booksInWishList.length });
        await data.fetchAllCartBook(response => {
            this.setState({
                cartBookCount: response.length
            })
        })
        this.props.dispatch({ type: "returnCartBooksLength", payload: this.state.cartBookCount });
    }

    render() {
        let { booksInWishList } = this.state
        return (
            localStorage.getItem("token") != null && localStorage.getItem("token") !== "undefined" ?
            this.state.counter === booksInWishList.length ? <h2 style={{ marginLeft: '300px', marginTop: '100px' }}>"Oops!  You'r wishlist is empty."</h2> :
                <div>
                    { booksInWishList.map((books) => (
                        <Fragment>
                            <div className="flex-container-column" >
                                <div className="wishlist-outer-view">
                                    <div>
                                        <h4 className="heading-style-wishlist-text"> My WishList</h4>
                                    </div>
                                    <div className="flex-container-row">
                                        <div><img src={books.picPath} alt="" className="image_style" /></div>
                                        <div>
                                            <h4 className="heading-style-first">{books.nameOfBook}</h4>
                                            <h6 className="heading-style-second">{books.author}</h6>
                                            <span></span>
                                            <div>
                                                <h4 className="heading-style-third">Rs. {books.price}</h4>
                                                <button className="btn-remove-wishlist" onClick={() => this.handleRemovebooks(books.id)}>Remove</button>
                                                <button className="btn-wishlist-to-cart" onClick={() => this.handleClickAddToCart(books.id)}>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )
                    )}
                </div>
                :  <Redirect to='/SignInForm' onClick={sessionStorage.setItem("isFrom", "WishList")} />
        )
    }
}

const mapStateToProps = (state) => ({
    wishListCount: state.wishListCount
});

export default connect(mapStateToProps)(BookWishList)