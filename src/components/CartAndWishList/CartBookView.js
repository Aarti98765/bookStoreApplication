import React, { Fragment, Component } from 'react';
import BookDataLayer from '../BookDataLayer';
import { connect } from 'react-redux';
import './BookCartStyle/CartAndWishList.scss';

var data = new BookDataLayer();

class CartBookView extends Component {
    constructor() {
        super();
        this.state = {
            booksInCart: [], 
            booksCount: ''
        }
    }

    async componentDidMount() {
        await data.fetchAllCartBook(response => {
            console.log(response)
            this.setState({
                booksInCart: response,
                bookCount: response.length
            })
        })
        this.props.dispatch({ type: "returnCartBooksLength", payload: this.state.booksInCart.length })
    }

    async handleChangeBookDec(e) {
        let quantity = e.bookQuantity - 1;
        await data.updateCart(e.id, quantity)
        window.location.reload(true)
        await data.fetchAllCartBook(response => {
            this.setState({
                booksInCart: response
            })
        })
        window.location.reload(true)
        this.props.dispatch({ type: "returnCartBooksLength", payload: this.state.booksInCart.length })
    }

    async handleChangeBookInc(e) {
        let quantity = e.bookQuantity + 1;
        await data.updateCart(e.id, quantity)
        window.location.reload(true)
        await data.fetchAllCartBook(response => {
            console.log(response)
            this.setState({
                booksInCart: response
            })
        })
        window.location.reload(true)
        this.props.dispatch({ type: "returnCartBooksLength", payload: this.state.booksInCart.length })
    }

    handleRemoveBookFromCart = async (e) => {
        await data.removeFromCart(e, 1)
        window.location.reload(false);
        await data.fetchAllCartBook(response => {
            this.setState({
                booksIncart: response
            })
        });
        this.props.dispatch({ type: "returnCartBooksLength", payload: this.state.booksInCart.length })
    }

    render() {
        this.props.dispatch({ type: "returnCartBooksLength", payload: this.state.booksInCart.length });
        let { booksInCart } = this.state
        return (
            <div>
                { booksInCart.map(books => (
                    <Fragment key={books.id}>
                        <div className="flex-container-column">
                           <div className="cart-content-outer-view"> 
                                <div className='book-cart-bottom-line-view'> 
                                    <div className="flex-container-row">
                                        <div style={{ marginTop: '6px' }}><img src={books.picPath} alt="" className="image_style" /></div>
                                        <div style={{ marginTop: '6px' }}>
                                            <h4 className="heading-style-book-name">{books.nameOfBook}</h4>
                                            <h6 className="heading-style-book-author">{books.author}</h6>
                                            <h4 className="heading-style-book-price">Rs. {books.price}</h4>
                                        </div>
                                    </div>

                                    <div className="flex-container-row-quantity-view">
                                        <div>
                                            <button className="btn-style-quantity-decrement" type="button" onClick={() => this.handleChangeBookDec(books)}><ion-icon name="remove-circle-outline"></ion-icon></button>
                                            <button className="btn-style-quantity-count">{books.bookQuantity}</button>
                                            <button className="btn-style-quantity-increment" type="button" onClick={() => this.handleChangeBookInc(books)}><ion-icon name="add-circle-outline"></ion-icon></button>
                                        </div>
                                        <div>
                                            <button className="btn-style-remove" onClick={() => this.handleRemoveBookFromCart(books.id)}>Remove</button>
                                        </div>
                               </div>     
                              </div>
                            </div> 
                        </div>
                    </Fragment>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cartCount: state.cartCount
});

export default connect(mapStateToProps)(CartBookView)