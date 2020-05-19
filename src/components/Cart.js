import React, { Fragment, useState } from 'react';
import dontMakeMeThink from '../images/book1.jpeg';
import react from '../images/book2.jpg';
import php from '../images/book3.jpeg';
import reactjs from '../images/book4.png';
import { connect } from 'react-redux';
import CustomerDetailsForm from './CustomerDetailsForm';
import store from '../store';

function Cart({ basketProps }) {
    console.log(basketProps);
    const [count, setCount] = useState(0);
    const [showHide, setStateHideComponent] = useState(false);
    let booksInCart = [];
    let counter1;

    Object.keys(basketProps.books).forEach(function (item) {
        console.log(item);
        console.log(basketProps.books[item].inCart);
        if (basketProps.books[item].inCart) {
            booksInCart.push(basketProps.books[item])
            counter1 = counter1 + 1;
        }
        console.log(booksInCart);
    })

    const booksImages = [dontMakeMeThink, react, php, reactjs];
    
    booksInCart = booksInCart.map((books, index) => {
        return ( 
            <Fragment>
                <div className="flex-container-column">
                    <div style={{ border: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop: '10px' }}>
                        <div>
                            <h4 className="heading_style"> My cart(1)</h4>
                        </div>

                        <div className="flex-container-row">
                            <div><img src={booksImages[index]} alt="" className="image_style" /></div>
                            <div>
                                <h4 className="heading-style-first">{books.name}</h4>
                                <h6 className="heading-style-second">{books.author}</h6>
                                <h4 className="heading-style-third">Rs.{books.price}</h4>
                            </div>
                        </div>

                        <div className="flex-container-row">
                            <div className="counter">
                                <button className="btn-style-count" type="button" onClick={() => setCount(count - 1)}>-</button>
                                <button className="btn-style-count1">{count}</button>
                                <button type="button" onClick={() => setCount(count + 1)}>+</button>
                            </div>
                            <div>
                                <button className="btn-style-remove">Remove</button>
                            </div>
                        </div> 

                        <div>
                            <button className="btn-style-placeorder" onClick={() => setStateHideComponent({ showHide: true })}>PLACE ORDER</button>
                        </div>
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
            </Fragment>  
        ) 
    })
    
    return (
        <div>
            {booksInCart}
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps)(Cart)