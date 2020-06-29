import React, { Component } from 'react';
import CustomerDetailsForm from '../CustomerDetailsForm/CustomerDetailsForm';
import CartBookView from './CartBookView';
import OrderSummaryView from './OrderSummaryView';
import { connect } from 'react-redux';
import BookDataLayer from '../BookDataLayer';
import './CartAndWishList.css';

var data = new BookDataLayer();

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            booksOrderSummary : [],
            showHideOrderSummary : false,
            counter : 0,
            addressType: '',
            showCustomerDetails: false,
            showHide : false,
            showSummary: false,
            name:'',
            pincode: '',
            locality: '',
            address: '',
            city: '',
            landmark: '',
            home: false,
            work: false,
            other: false
        }
    }

    getCustomerDetails = async (name, pincode, locality, address, city, landmark, home, work, other) => {
        await this.setState({
            name: name,
            pincode: pincode,
            locality: locality,
            address: address,
            city: city,
            landmark: landmark,
            home: home,
            work: work,
            other: other
        })
    }

    handleChangeEnableCustomerDetails = async() => {
        await data.isCustomerDetailsExisted(response => {
            console.log("response result : ", response)
           if (response === 'true') {
            this.setState({
                showCustomerDetails: false,
                showSummary: true
            })
            console.log("Customer : ", this.state.showCustomerDetails);
            console.log("summary : ", this.state.showSummary);
           }
        if(response === 'false') 
            {
            this.setState({
                showCustomerDetails: true,
                showSummary: false
            })
            console.log("customer123 : ", this.state.showCustomerDetails);
            console.log("summary123 : ", this.state.showSummary);
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

        await data.addCustomerDetails(this.state.name, this.state.pincode, this.state.locality, this.state.address, this.state.city, this.state.landmark, this.state.addressType)
        await this.setState({
            showSummary: true,
            showCustomerDetails: false
        })

    }

    async handleChangePlaceOrder() {
        await data.placeOrder(response => {
            console.log("customer orderid  : ", response)
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
    return (
        <div>
            <div style={{ border: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop: '10px' }}>
                <div>
                    <h4 style={{ marginLeft: '96px' }}> My cart</h4>
                </div>
            </div>
            <CartBookView /> 
            <div style={{ border: '1px solid red', height: '40px', marginLeft: '130px', marginRight: '130px', marginTop: '0px' }}>          
                <button className="btn-style-placeorder" onClick={this.handleChangeEnableCustomerDetails}>PLACE ORDER</button>
            </div>

            <div style={{ border: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop:'10px' }}>
                <span></span>
                <div>
                <button className="btn-style-custom" >Customer Details</button>
                { this.state.showHideEdit && <button style={{ marginLeft: '540px', backgroundColor: 'white', border: 'white' }}>Edit</button>}
                </div>
                { this.state.showCustomerDetails && 
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
                { this.state.showSummary && 
                    <div >
                    <div style={{ borderTop: '1px solid red', width:'100%'}}>
                        <OrderSummaryView />
                    </div>
                    <div style={{ borderTop: '1px solid red', width:'100%' }}>
                        <a href="/OrderConfirm">
                        <button type="button" style={{backgroundColor:'rgb(26, 74, 165)', color:'white', border:'white', marginTop:'10px', marginBottom:'10px',marginLeft:'480px', height:'30px', width:'100px'}} onClick={this.handleChangePlaceOrder}> Checkout</button>
                        </a>
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