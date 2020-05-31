import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import CustomerDetailsForm from './CustomerDetailsForm';
import OrderConfirm from './OrderConfirm';
import { useHistory } from 'react-router-dom';

function Cart({ basketProps }) {
    console.log(basketProps);
    let booksInCart = [];
    let booksOrderSummary = [];
    const [showHide, hideComponent] = useState(false);
    const [showHideOrderSummary, hideSummary] = useState(false);
    const [count, setCount] = useState(0);
    let counter1 = 0;
    let history = useHistory();

    function show() {
        showHide = true;
    }

    function hide() {
        showHide = false;
    }

    function handleClick() {
        history.push("/OrderConfirm");
    }

    Object.keys(basketProps.books).forEach(function (item) {
        console.log(item);
        console.log(basketProps.books[item].inCart);
        if (basketProps.books[item].inCart) {
            booksInCart.push(basketProps.books[item])
            booksOrderSummary.push(basketProps.books[item])
            counter1 = counter1 + 1;
        }
        console.log(booksInCart);
    })

    booksInCart = booksInCart.map((books) => {
        return (
            <Fragment>
                <div className="flex-container-column">
                    <div style={{ borderLeft: '1px solid red', borderRight: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop: '0px' }}>

                        <div style={{ border: '1px solid red', marginLeft: '60px', marginRight: '60px', marginTop: '20px', marginBottom: '20px' }}>
                            <div className="flex-container-row">
                                <div style={{ marginTop: '20px' }}><img src={books.url} alt="" className="image_style" /></div>
                                <div style={{ marginTop: '20px' }}>
                                    <h4 className="heading-style-first">{books.name}</h4>
                                    <h6 className="heading-style-second">{books.author}</h6>
                                    <h4 className="heading-style-third">Rs. {books.price}</h4>
                                </div>
                            </div>

                            <div className="flex-container-row">
                                <div className="counter">
                                    <button className="btn-style-count1" type="button" onClick={() => setCount(count - 1)}><ion-icon name="remove-circle-outline"></ion-icon></button>
                                    <button className="btn-style-count2">{count + basketProps.basketNumbers}</button>
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

    booksOrderSummary = booksOrderSummary.map((books) => {
        console.log("Book Name", books.name);
        return (
            <div className="flex-container-column">
                <div style={{ borderLeft: 'white', borderRight: 'white', borderTop: 'white', marginLeft: '0px', marginRight: '180px', marginTop: '0px' }}>

                    <div style={{ border: 'white', marginLeft: '30px', marginRight: '30px', marginTop: '20px', marginBottom: '20px' }}>
                        <div className="flex-container-row">
                            <div style={{ marginTop: '20px' }}><img src={books.url} alt="" className="image_style" /></div>
                            <div style={{ marginTop: '20px' }}>
                                <h4 className="heading-style-first">{books.name}</h4>
                                <h6 className="heading-style-second">{books.author}</h6>
                                <h4 className="heading-style-third">Rs. {books.price}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    
    return (
        counter1 === 0? <h2 style={{ marginLeft:'300px', marginTop:'100px' }}>"Oops!  You'r cart is empty."</h2> :
        <div>
            <div style={{ borderLeft: '1px solid red', borderRight: '1px solid red', borderTop: '1px solid red', borderBottom: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop: '10px' }}>
                <div>
                    <h4 style={{ marginLeft: '96px' }}> My cart</h4>
                </div>
            </div>
            {booksInCart} 
            <div style={{ border: '1px solid red', height: '40px', marginLeft: '130px', marginRight: '130px', marginTop: '0px' }}>
                <button className="btn-style-placeorder" onClick={() => hideComponent(!showHide)}>PLACE ORDER</button>
            </div>

            <div style={{ border: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop:'10px' }}>
                <span></span>
                <button className="btn-style-custom" >Customer Details</button>
                <button style={{ marginLeft:'334px', width:'30px', backgroundColor:'white', border:'white' }} >Edit</button>
                {showHide && <CustomerDetailsForm />}
            </div>
            <div style={{ border: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop:'10px' }}>
                <button className="btn-style-summary" onClick={() => hideSummary(!showHideOrderSummary)}>Order Summary</button>

                { showHideOrderSummary && 
                    <div >
                    <div style={{ borderTop: '1px solid red', width:'100%'}}>
                        {booksOrderSummary}
                    </div>
                    <div style={{ borderTop: '1px solid red', width:'100%' }}>
                        <button type="button" style={{backgroundColor:'rgb(26, 74, 165)', color:'white', border:'white', marginTop:'10px', marginBottom:'10px',marginLeft:'480px', height:'30px', width:'100px'}} onClick={handleClick}> Checkout</button>
                    </div>
                    </div>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps)(Cart)