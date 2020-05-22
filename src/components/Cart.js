import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import CustomerDetailsForm from './CustomerDetailsForm';

function Cart({ basketProps }) {
    console.log(basketProps);
    //const { showHide } = this.state;
    let booksInCart = [];
    const [count, setCount] = useState(0);
    let showHide;
    let counter1 = 0;

    Object.keys(basketProps.books).forEach(function (item) {
        console.log(item);
        console.log(basketProps.books[item].inCart);
        if (basketProps.books[item].inCart) {
            booksInCart.push(basketProps.books[item])
            counter1 = counter1 + 1 ;
        }
        console.log(booksInCart);
    })

    booksInCart = booksInCart.map((books) => {
        return (
            <Fragment>
                <div className="flex-container-column">
                    <div style={{ borderLeft: '1px solid red', borderRight: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop: '0px' }}>
                        
                        <div style={{ border: '1px solid red', marginLeft:'60px', marginRight:'60px', marginTop: '10px', marginBottom: '20px' }}>
                        <div className="flex-container-row">
                            <div style ={{ marginTop:'20px' }}><img src={books.url} alt="" className="image_style" /></div>
                            <div style={{ marginTop:'20px' }}>
                                <h4 className="heading-style-first">{books.name}</h4>
                                <h6 className="heading-style-second">{books.author}</h6>
                                <h4 className="heading-style-third">Rs. {books.price}</h4>
                            </div>
                        </div>
                        

                        {/*       <div className="flex-container-row">
                            <div className="counter">
                                <button className="btn-style-count" type="button" onClick={this.DecrementCount}>-</button>
                                <button className="btn-style-count1">{this.state.count}</button>
                                <button type="button" onClick={this.incrementCount}>+</button>
        </div> */}
                        <div className="flex-container-row">
                            <div className="counter">
                                <button className="btn-style-count1" type="button" onClick={() => setCount(count - 1)}><ion-icon name="remove-circle-outline"></ion-icon></button>
                                <button className="btn-style-count2">{count}</button>
                                <button className="btn-style-count3" type="button" onClick={() => setCount(count + 1)}><ion-icon name="add-circle-outline"></ion-icon></button>
                            </div>
                            <div>
                                <button className="btn-style-remove">Remove</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    })

    return (
            <div>
                <div style={{ borderLeft: '1px solid red', borderRight: '1px solid red', borderTop: '1px solid red', borderBottom:'1px solid red',  marginLeft: '130px', marginRight: '130px', marginTop: '10px' }}>
                <div>
                    <h4 style={{ marginLeft: '96px' }}> My cart</h4>
                </div>
            </div>
            {booksInCart}
            <div style={{ border: '1px solid red', height: '40px', marginLeft: '130px', marginRight: '130px', marginTop: '0px' }}>
                <button className="btn-style-placeorder" onClick={() => this.hideComponent("showHide")}>PLACE ORDER</button>
            </div>
            {showHide && <CustomerDetailsForm />}
            <hr />
            <div style={{ border: '1px solid red', height: '40px', marginLeft: '130px', marginRight: '130px' }}>
                <button className="btn-style-custom">Customer Details</button>
            </div>
            <div style={{ border: '1px solid red', height: '40px', marginTop: '10px', marginLeft: '130px', marginRight: '130px' }}>
                <button className="btn-style-summary" >Order Summary</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps)(Cart)