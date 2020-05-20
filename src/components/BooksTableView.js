import React, { Fragment, Component } from 'react';
import dontMakeMeThink from '../images/book1.jpeg';
import react from '../images/book2.jpg';
import php from '../images/book3.jpeg';
import reactjs from '../images/book4.png';
import CustomerDetailsForm from './CustomerDetailsForm';
let booksImages = [];

class BooksTableView extends Component {
     constructor(props){
         super(props);
         this.state = {
             showHide : false
         };
    }

    handleShow = () => {
        this.setState({
          showHide: true
        });
    };
    
    handleHide = () => {
        this.setState({
          showHide: false
        });
    };
    
    hideComponent(event) {
        this.setState({ showHide: !this.state.showHide });
    }

    booksImages = [dontMakeMeThink, react, php, reactjs];

    render(){
        const { showHide } = this.state; 
        const{name, price, numbers} = this.props;
         return(
              <Fragment>
                        <div>
                            <div className="books"><ion-icon name="close-circle"></ion-icon><img src={booksImages[name]} alt=""/>
                                <span className="sm-hide">{name}</span>
                            </div>
                            <div className="price sm-hide">Rs.{price}</div>    
                            <div className="quantity"> 
                                <ion-icon className="decrease" name="arrow-black-circle-outline"></ion-icon>
                                    <span>{numbers}</span>
                                <ion-icon className="increase" name="arrow-forward-circle-outline"></ion-icon>    
                            </div>
                            <div className="total">${numbers * price},00</div>
                        </div>
                            
                            <div>
                                <button className="btn-style-placeorder" onClick={() => this.hideComponent("showHide")}> PLACE ORDER</button>
                            </div>
    
                        {showHide && <CustomerDetailsForm />}
                        <hr />
    
                        <div style={{ border: '1px solid red', height: '40px', marginLeft: '130px', marginRight: '130px' }}>
                            <button className="btn-style-custom">Customer Details</button>
                        </div>
    
                        <div style={{ border: '1px solid red', height: '40px', marginTop: '10px', marginLeft: '130px', marginRight: '130px' }}>
                            <button className="btn-style-summary" >Order Summary</button>
                        </div>
                </Fragment>  
            ) 
     }
}

export default BooksTableView;