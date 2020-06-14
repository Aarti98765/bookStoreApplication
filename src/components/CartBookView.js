import React, { Fragment, Component } from 'react';
import BookDataLayer from './BookDataLayer';

var data = new BookDataLayer();

class CartBookView extends Component {
    constructor() {
        super();
        this.state = {
        booksInCart : [] ,
        count : 0,
        }
    }

    componentDidMount() {
        data.fetchAllCartBook(response => {
            console.log(response)
            this.setState({
                booksInCart: response
            })
        })
    }

    setCountIncrement = () => {
        this.setState({
            count  : this.state.count + 1
        })
    }

    setCountDecrement = () => {
        this.setState({
            count  : this.state.count - 1
        })
    }

    handleRemoveBookFromOrder = (e) =>{
        data.removeBookFromCart(101,e,1)
        console.log("aarti", e);
        window.location.reload(false);
    }   

    render() {
       let { booksInCart } = this.state        
    return (
            <div>
            { booksInCart.map(books => (
                    <Fragment key={books.id}>
                        <div className="flex-container-column" >
                            <div style={{ borderTop: 'white', borderLeft: '1px solid red', borderRight: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop: '0px' }}>
        
                                <div style={{ border: '1px solid red', marginLeft: '60px', marginRight: '60px', marginTop: '20px', marginBottom: '20px' }}>
                                    <div className="flex-container-row">
                                        <div style={{ marginTop: '20px' }} ><img src={books.picPath} alt="" className="image_style" /></div>
                                        <div style={{ marginTop: '20px' }}>
                                            <h4 className="heading-style-first">{books.nameOfBook}</h4>
                                            <h6 className="heading-style-second">{books.author}</h6>
                                            <h4 className="heading-style-third">Rs. {books.price}</h4>
                                        </div>
                                    </div>
        
                                    <div className="flex-container-row">
                                        <div className="counter">
                                            <button className="btn-style-count1" type="button" onClick={this.setCountDecrement}><ion-icon name="remove-circle-outline"></ion-icon></button>
                                            <button className="btn-style-count2">{this.state.count}</button>
                                            <button className="btn-style-count3" type="button" onClick={this.setCountIncrement}><ion-icon name="add-circle-outline"></ion-icon></button>
                                        </div>
                                        <div>
                                            <button className="btn-style-remove" onClick={() => this.handleRemoveBookFromOrder(books.id)}>Remove</button>
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

export default CartBookView