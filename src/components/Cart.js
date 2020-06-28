import React, { Component } from 'react';
import CustomerDetailsForm from './CustomerDetailsForm';
import CartBookView from './CartBookView';
import OrderSummaryView from './OrderSummaryView';
import { connect } from 'react-redux';
import BookDataLayer from './BookDataLayer';

var data = new BookDataLayer();

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            booksOrderSummary : [],
            showHideOrderSummary : false,
            counter : 0,
            addressType: '',
            toggle: false,
            showHide : false,
            summaryToggle: false,
            names:''
        }
    }

    getCustomerDetails = (name) => {
        this.setState({
            names : name
        })
        console.log("wassup", this.state.names)
    }

    handleChangeEnableCustomerDetails = async() => {
        await data.isCustomerDetailsExisted(response => {
            console.log("result : ", response)
            if (response == 'true') {
             this.setState({
                toggle: false,
                summaryToggle: true
            })
            console.log("toggle : ", this.state.toggle);
            console.log("summarytoggle : ", this.state.summaryToggle);
        }else {
            this.setState({
                toggle: true,
                summaryToggle: false
            })
            console.log("toggle123 : ", this.state.toggle);
            console.log("summarytoggle : ", this.state.summaryToggle);
        }
        })
    }

    handleChangeEnableOrderSummary = async () => {
        
        if (this.state.home) {
            await this.setState({
                addressType: 'home'
            })
        }
        if (this.state.work) {
            await this.setState({
                addressType: 'work'
            })
        }
        if (this.state.other) {
            await this.setState({
                addressType: 'other'
            })
        }

        console.log("type", this.state.addressType);

        await data.addCustomerDetails(this.state.name, this.state.pincode, this.state.locality, this.state.address, this.state.city, this.state.landmark, this.state.addressType)
        await this.setState({
            summaryToggle: true,
            toggle: false
        })

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

    async handleChangePlaceOrder() {
        await data.placeOrder(response => {
            console.log("order id : ", response)
        })
    }

    render() {
        console.log('cart length', this.props.cartCount)
    return (
        /*this.props.cartCount === 0? <h2 style={{ marginLeft:'300px', marginTop:'100px' }}>"Oops!  You'r cart is empty."</h2> :*/
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
                            <CustomerDetailsForm function={this.getCustomerDetails}/>
                        <button onClick={this.handleChangeEnableOrderSummary}  style={{ marginLeft: '500px', width: '100px', height: '27px', border: 'white', color: 'white', backgroundColor: 'rgb(26, 74, 165)', marginBottom: '10px' }} className="btn btn-default">
                            Continue
                        </button>
                    </div> 
                }
            </div>
            <div style={{ border: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop:'10px' }}>
                <button className="btn-style-summary">Order Summary</button>

                { this.state.summaryToggle && 
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

const mapStateToProps = (state) => ({
    cartCount: state.cartCount
});

export default connect(mapStateToProps) (Cart)