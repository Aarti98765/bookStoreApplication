import React, { Component } from "react";
import OrderSummaryView from './OrderSummaryView';

const initialState = {
  name: '',
  pincode: '',
  locality: '',
  address: '',
  city: '',
  landmark: '',
  addressType: '',
  home: false,
  work: false,
  other: false,
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
  }

  validate = () => {
    let nameError = "";
    let phoneNumberError = "";
    let pinCodeError = "";

    if (!this.state.name) {
      nameError = "name can not be blank"
    }

    if (nameError) {
      this.setState({ nameError });
      return false;
    }

    return true;
  }


  handleSetName = async(e) => {
    await this.setState({
      name: e.target.value
    })

    this.props.function(this.state.name)
  }

  handleSetPincode = (e) => {
    this.setState({
      pincode: e.target.value
    })
  }

  handleSetLocality = async (e) => {
    await this.setState({
      locality: e.target.value
    })
  }

  handleSetAddress = (e) => {
    this.setState({
      address: e.target.value
    })
  }

  handleSetCity = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleSetLandmark = async (e) => {
    await this.setState({
      landmark: e.target.value,
    })
  }

  handleSelectHome = async () => {
    await this.setState({
      work: false,
      home: true,
      other: false
    })
  }

  handleSelectWork = async () => {
    await this.setState({
      work: true,
      home: false,
      other: false
    })
    console.log("work", this.state.work);
  }

  handleSelectOther = async () => {
    await this.setState({
      work: false,
      home: false,
      other: true
    })
    console.log("other", this.state.other);
  }

  render() {
    return (
      <div>
        <form>
          <span></span>
          <input className="style-name-text" placeholder="   Name" onChange={(e) => this.handleSetName(e)}/>
          <input className="style-number-text" placeholder="    Pincode " onChange={(e) => this.handleSetPincode(e)} />
          <div>
            <div>
              <span></span>
              <div style={{ color: 'red', marginLeft: '75px', fontSize: '12px' }}>{this.state.nameError}</div>
              <div style={{ color: 'red', marginLeft: '142px', fontSize: '12px' }}>{this.state.phoneNumberError}</div>
            </div>
            <span> </span>
            <input className="style-pincode-text" placeholder="   Gender" />
            <input className="style-number-text" placeholder="    Locality" onChange={(e) => this.handleSetLocality(e)}/>
          </div>

          <div>
            <span></span>
            <div style={{ color: 'red', marginLeft: '75px', fontSize: '12px' }}>{this.state.pinCodeError}</div>
            <div style={{ color: 'red', marginLeft: '175px', fontSize: '12px' }}>{this.state.pinCodeError}</div>
          </div>

          <div>
            <textarea className="style-address-text" placeholder="  Address" />
          </div>

          <div style={{ color: 'red', fontSize: '12px', marginLeft: '75px' }}>{this.state.pinCodeError}</div>
          <div>
            <span> </span>
            <input className="style-pincode-text" placeholder="    City/Town" onChange={(e) => this.handleSetCity(e)}/>
            <input className="style-number-text" placeholder="    Landmark" onChange={(e) => this.handleSetLandmark(e)}/>
          </div>
          <div>
            <span></span>
            <lable style={{ color: 'red', marginLeft: '75px', fontSize: '12px' }}>{this.state.pinCodeError}</lable>
            <lable style={{ color: 'red', marginLeft: '142px', fontSize: '12px' }}>{this.state.pinCodeError}</lable>
          </div>

          <div className="radio">
            <text style={{ marginLeft: '62px' }}>Type</text>
            <span></span>
            <label style={{ marginRight: '50px', marginLeft: '60px' }}>
              <input type="radio" value="Home" onChange={this.handleSelectHome} /> Home
            </label>
            <label style={{ marginRight: '50px' }}>
              <input type="radio" value="Work" onChange={this.handleSelectWork} /> Work
            </label>
            <label>
              <input type="radio" value="Other" onChange={this.handleSelectOther} /> Other
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default CustomerDetailsForm;