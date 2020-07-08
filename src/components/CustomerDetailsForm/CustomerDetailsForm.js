import React, { Component } from "react";
import '../CustomerDetailsForm/CustomerDetailsForm.css';

class CustomerDetailsForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      pincode: '',
      locality: '',
      address: '',
      city: '',
      landmark: '',
      addressType: '',
      home: false,
      work: false,
      other: false
    }
  }

  handleSetName = async (e) => {
    await this.setState({
      name: e.target.value
    })
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
    this.props.function(this.state.name, this.state.pincode, this.state.locality, this.state.address, this.state.city, this.state.landmark,
      this.state.home, this.state.work, this.state.other);
  }

  handleSelectWork = async () => {
    await this.setState({
      work: true,
      home: false,
      other: false
    })
  }

  handleSelectOther = async () => {
    await this.setState({
      work: false,
      home: false,
      other: true
    })
  }

  render() {
    return (
      <div>
        <form>
          <span></span>
          <input className="style-name-text" placeholder="             Name" required pattern="(/^[a-zA-Z]{3,}$/)" onChange={(e) => this.handleSetName(e)} />
          <input className="style-number-text" placeholder="           Pincode" required pattern="^[1-9][0-9]{6}$" onChange={(e) => this.handleSetPincode(e)} />
          <div>
            <span> </span>
            <input className="style-pincode-text" placeholder="   Gender" />
            <input className="style-number-text" placeholder="    Locality" onChange={(e) => this.handleSetLocality(e)} />
          </div>
          <div>
            <textarea className="style-address-text" required pattern="(/^[a-zA-Z0-9.,-:() ]{5,}$/))" placeholder="  Address" />
          </div>

          <div style={{ color: 'red', fontSize: '12px', marginLeft: '75px' }}>{this.state.pinCodeError}</div>
          <div>
            <span> </span>
            <input className="style-pincode-text" placeholder="    City/Town" onChange={(e) => this.handleSetCity(e)} />
            <input className="style-number-text" placeholder="    Landmark" required pattern="(/^[a-zA-Z ]{3,}$/)" onChange={(e) => this.handleSetLandmark(e)} />
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