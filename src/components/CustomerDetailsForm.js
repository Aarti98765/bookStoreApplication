import React, { Component } from "react";
import OrderSummaryView from './OrderSummaryView';

const initialState = {
  name : '',
  nameError: '',
  phoneNumberError: '',
  pinCodeError: '',
  showHideEdit: false,
  view: false
}

class CustomerDetailsForm extends Component {
  constructor() {
    super();
    this.state = initialState
    this.onValueChange = this.onValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  showEditView = (event) => {
    event.preventDefault();
    this.setState({
      showHideEdit: !this.state.showHideEdit,
      view : true
    })
  }

  validate = () => {
    let nameError = "";
    let phoneNumberError = "";
    let pinCodeError = "";

    if(!this.state.name) {
      nameError = "name can not be blank"
    }

    if(nameError) {
      this.setState({nameError});
      return false;
    }

    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
    const isValid = this.validate();
    if(isValid) {
      console.log(this.state)
      // clear form
      this.setState(initialState);
    }
  }

  render() {
    return (
      <div>
        {this.state.showHideEdit && <button style={{ marginLeft: '540px', backgroundColor: 'white', border: 'white' }}>Edit</button>}
        <form onSubmit={this.handleSubmit}>
          <span></span>
          <input
            type="text"
            placeholder="   Name"
            className="style-name-text"
          />
          <input className="style-number-text"
            type="text"
            placeholder="    Phone Number"
          />
          <div>

            <div>
              <span></span>
              <div style={{ color: 'red', marginLeft: '75px', fontSize: '12px' }}>{this.state.nameError}</div>
              <div style={{ color: 'red', marginLeft: '142px', fontSize: '12px' }}>{this.state.phoneNumberError}</div>
            </div>

            <span> </span>
            <input className="style-pincode-text"
              type="text"
              placeholder="    Pincode"
            />
            <input className="style-number-text"
              type="text"
              placeholder="    Locality"
            />
          </div>
          <div>
            <span></span>
            <div style={{ color: 'red', marginLeft: '75px', fontSize: '12px' }}>{this.state.pinCodeError}</div>
            <div style={{ color: 'red', marginLeft: '175px', fontSize: '12px' }}>{this.state.pinCodeError}</div>
          </div>
          <div>
            <textarea className="style-address-text"
              type="text"
              placeholder="  Address"
            />
          </div>
          <div style={{ color: 'red', fontSize:'12px', marginLeft:'75px' }}>{this.state.pinCodeError}</div>          
          <div>
            <span> </span>
            <input className="style-pincode-text"
              type="text"
              placeholder="    City/Town"
            />
            <input className="style-number-text"
              type="text"
              placeholder="    Landmark"
            />
          </div>
          <div>
            <span></span>
            <lable style={{ color:'red', marginLeft:'75px', fontSize:'12px' }}>{this.state.pinCodeError}</lable>
            <lable style={{ color:'red', marginLeft:'142px', fontSize:'12px' }}>{this.state.pinCodeError}</lable>
          </div> 

          <div className="radio">
            <span></span>
            <label style={{ marginRight: '50px', marginLeft: '69px' }}>
              <input
                type="radio"
                value="Home"
                checked={this.state.selectedOption === "Home"}
                onChange={this.onValueChange}
              />
          Home
        </label>

            <label style={{ marginRight: '50px' }}>
              <input
                type="radio"
                value="Work"
                checked={this.state.selectedOption === "Work"}
                onChange={this.onValueChange}
              />
          Work
        </label>

            <label>
              <input
                type="radio"
                value="Other"
                checked={this.state.selectedOption === "Other"}
                onChange={this.onValueChange}
              />
          Other
        </label>

          {/* <div>
              <span></span>
              <div style={{ marginLeft: '120px', marginBottom: '20px' }}>
                Selected option is : {this.state.selectedOption}
                <button style={{ marginTop: '18px', marginLeft: '166px', width: '80px', height: '27px', border: 'white', color: 'white', backgroundColor: 'rgb(26, 74, 165)' }} className="btn btn-default" type="submit">
                  Submit
                </button>
                <button onClick={this.showEditView} style={{ marginTop: '18px', marginLeft: '10px', width: '80px', height: '27px', border: 'white', color: 'white', backgroundColor: 'rgb(26, 74, 165)' }} className="btn btn-default">
                  Continue
                </button>
              </div>
          </div> */}
          </div>
        </form>
      </div>
    );
  }
}

export default CustomerDetailsForm;