import React, { Fragment, Component } from 'react';
import dontMakeMeThink from '../images/book1.jpeg';
import react from '../images/book2.jpg';
import php from '../images/book3.jpeg';
import reactjs from '../images/book4.png';
import CustomerDetailsForm from './CustomerDetailsForm';
let booksImages = [];

class SingleBookView extends Component {
     constructor(props){
         super(props);
         this.state = {
             count : 0,  
             showHide : false
         }
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

    incrementCount = (e) => {
        this.setState({
          count: this.state.count + 1
        });
    }

    DecrementCount = (e) => {
        this.setState({
          count: this.state.count - 1
        });
    }
   
    booksImages = [dontMakeMeThink, react, php, reactjs];
    
    render(){
        const { showHide } = this.state;
         const{name, author, price, numbers} = this.props;
         return(
              <Fragment>
              <div className="flex-container-column">
              <div style={{ border: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop: '10px' }}>
                  <div>
                      <h4 className="heading_style"> My cart(1)</h4>
                  </div>

                  <div className="flex-container-row">
                      <div><img src={booksImages[name]} alt="" className="image_style" /></div>
                      <div>
                          <h4 className="heading-style-first">{this.props.name}</h4>
                          <h6 className="heading-style-second">{this.props.author}</h6>
                          <h4 className="heading-style-third">Rs.{this.props.price}</h4>
                      </div>
                  </div>

                  <div className="flex-container-row">
                      <div className="counter">
                          <button className="btn-style-count" type="button" onClick={this.DecrementCount}>-</button>
                          <button className="btn-style-count1">{this.state.count}</button>
                          <button type="button" onClick={this.incrementCount}>+</button>
                      </div>
                      <div>
                          <button className="btn-style-remove">Remove</button>
                      </div>
                  </div> 

                  <div>
                      <button className="btn-style-placeorder" onClick={this.hideComponent}>PLACE ORDER</button>
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
     }
}

export default SingleBookView;









                           