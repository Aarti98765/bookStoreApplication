import React, { Component } from 'react';
import CustomerDetailsForm from './CustomerDetailsForm';
import CartBookView from './CartBookView';
import OrderSummaryView from './OrderSummaryView';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
        booksOrderSummary : [],
        showHide : false,
        showHideOrderSummary : false,
        counter : 0,
        view: false
        }
    }

    hidePlaceOrderView = () => {
        this.setState({
            showHide : !this.state.showHide
        })
    }

    handleClick = () => {
         this.props.history.push('/OrderConfirm')
     }

     hideSummary = () => {
        this.setState({
            showHideOrderSummary : !this.state.showHideOrderSummary,
        })
    }
    
    showEditView = (event) => {
        event.preventDefault();
        this.setState({
          showHideEdit: !this.state.showHideEdit,
          view : !this.state.view
        })
    }

    render() {
        let {counter} = this.state.counter + 1
    return (
        counter === 0? <h2 style={{ marginLeft:'300px', marginTop:'100px' }}>"Oops!  You'r cart is empty."</h2> :
        <div>
            <div style={{ border: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop: '10px' }}>
                <div>
                    <h4 style={{ marginLeft: '96px' }}> My cart</h4>
                </div>
            </div>
            <CartBookView /> 
            <div style={{ border: '1px solid red', height: '40px', marginLeft: '130px', marginRight: '130px', marginTop: '0px' }}>          
                <button className="btn-style-placeorder" onClick={this.hidePlaceOrderView}>PLACE ORDER</button>
            </div>

            <div style={{ border: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop:'10px' }}>
                <span></span>
                <div>
                <button className="btn-style-custom" >Customer Details</button>
                { this.state.showHideEdit && <button style={{ marginLeft: '540px', backgroundColor: 'white', border: 'white' }}>Edit</button>}
                </div>

                { this.state.showHide && 
                    <div>
                        <span></span>
                            <CustomerDetailsForm />
                        <button onClick={this.showEditView} style={{ marginLeft: '500px', width: '100px', height: '27px', border: 'white', color: 'white', backgroundColor: 'rgb(26, 74, 165)', marginBottom: '10px' }} className="btn btn-default">
                            Continue
                        </button>
                    </div> 
                }
            </div>
            <div style={{ border: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop:'10px' }}>
                <button className="btn-style-summary" onClick={this.hideSummary}>Order Summary</button>

                { this.state.view && 
                    <div >
                    <div style={{ borderTop: '1px solid red', width:'100%'}}>
                        <OrderSummaryView />
                    </div>
                    <div style={{ borderTop: '1px solid red', width:'100%' }}>
                        <button type="button" style={{backgroundColor:'rgb(26, 74, 165)', color:'white', border:'white', marginTop:'10px', marginBottom:'10px',marginLeft:'480px', height:'30px', width:'100px'}} onClick={this.handleClick}> Checkout</button>
                    </div>
                    </div>
                }
            </div> 
        </div>
    );
    }
}

export default Cart