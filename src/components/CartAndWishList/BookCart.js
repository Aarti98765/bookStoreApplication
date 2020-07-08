import React, { Component } from 'react';
import CustomerDetailsForm from '../CustomerDetailsForm/CustomerDetailsForm';
import CartBookView from './CartBookView';
import OrderSummaryView from './OrderSummaryView';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import BookDataLayer from '../BookDataLayer';
import './BookCartStyle/CartAndWishList.scss';

var data = new BookDataLayer();

class BookCart extends Component {
    constructor() {
        super();
        this.state = {
            addressType: '',
            showCustomerDetails: false,
            showSummary: false,
            name: '',
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

    handleChangeEnableCustomerDetails = async () => {
        await data.isCustomerDetailsExisted(response => {
            if (response === 'true') {
                this.setState({
                    showCustomerDetails: false,
                    showSummary: true
                })
            }
            if (response === 'false') {
                this.setState({
                    showCustomerDetails: true,
                    showSummary: false
                })
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

    render() {
        return (
            localStorage.getItem("token") !== null && localStorage.getItem("token") !== "undefined" ?
            <div>
                <div className="outer_view_cart_text">
                            <h4 className="book-cart-text-style"> My cart</h4>
                </div>
                <CartBookView />
                <div className="placeorder-button-view">
                    <button className="btn-style-placeorder" onClick={this.handleChangeEnableCustomerDetails}>PLACE ORDER</button>
                </div>
                <div className="customer-details-view">
                    <span></span>
                    <div>
                        <button className="btn-style-custom" >Customer Details</button>
                    </div>
                    {this.state.showCustomerDetails &&
                        <div>
                            <span></span>
                            <CustomerDetailsForm function={this.getCustomerDetails} />
                            <button onClick={this.handleChangeEnableOrderSummary} style={{ marginLeft: '500px', width: '100px', height: '27px', border: 'white', color: 'white', backgroundColor: 'rgb(26, 74, 165)', marginBottom: '10px' }} className="btn btn-default">
                                Continue
                        </button>
                        </div>
                    }
                </div>
                <div className="order-summary-outer-div-style">
                    <button className="button-summary-style">Order Summary</button>
                    {this.state.showSummary &&
                        <div >
                            <div className="order-summary-div-style">
                                <OrderSummaryView />
                            </div>
                            <div order-confirm-div-style>
                                <a href="/OrderConfirm">
                                    <button className="btn-style-checkout" type="button" onClick={this.handleChangePlaceOrder}> Checkout</button>
                                </a>
                            </div>
                        </div>
                    }
                </div>
            </div>
            :  <Redirect to='/SignInForm' onClick={sessionStorage.setItem("isFrom", "Cart")} />
        );
    }
}

const mapStateToProps = (state) => ({
    cartCount: state.cartCount
});

export default connect(mapStateToProps)(BookCart)