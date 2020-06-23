import React, { Component } from 'react';
import image from '../images/new.jpg';
import BookDataLayer from '../components/BookDataLayer';
import { Link } from 'react-router-dom';

var data = new BookDataLayer();

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      emailId: '',
      password: '',
      userName: '',
      phoneNumber: '',
      role: [],
      hasAgreed: false,
      roleChecked: false,
      admin: false,
      user: false
    };
  }

  handleSetName = async(e) => {
    await this.setState({
      userName : e.target.value
    })
  }

  handleSetPassword = async(e) => {
    await this.setState({
      password : e.target.value
    })
  }

  handleSetPhoneNumber = async(e) => {
    await this.setState({
      phoneNumber : e.target.value
    })
  }

  handleSetEmailAddress = async(e) => {
    await this.setState({
      emailId : e.target.value
    })
  }

  handleSelectRoleAdmin = () => {
    this.setState({
      admin: !this.state.admin
    })
  }

  handleSelectRoleUser = async() => {
    this.setState({
      user: !this.state.user
    })
  }

  handleSubmitSignUpForm = () => {
    if (this.state.admin)
    this.setState({
      role: this.state.role.push("admin")
    })

    if (this.state.user)
    this.setState({
      role: this.state.role.push("user")
    })

    data.signUpData(this.state.userName, this.state.password, this.state.emailId, this.state.phoneNumber, this.state.role)
  }

  handleChange = (e) => {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="Main_view">
        <div className="App__Aside">
          <img src={image} alt="" className="App_Img"></img>
        </div>
        <div className="App__Form">
          <div className="FormTitle">
            <lable className="FormTitle__Link_SignUp">Sign In</lable> or <lable className="FormTitle__Link_SignIn">Sign Up</lable>
          </div>
          <div className="FormCenter">
            <div className="FormFields">
              <div className="FormField">
                <label className="FormField__Label">Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your name" onChange={this.handleSetName} />
              </div>
              <div className="FormField">
                <label className="FormField__Label">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" onChange={this.handleSetPassword} />
              </div>
              <div className="FormField">
              <label className="FormField__Label">Phone Number</label>
              <input type="phoneNumber" id="phoneNumber" className="FormField__Input" placeholder="Enter your phone number" onChange={this.handleSetPhoneNumber} />
            </div>
              <div className="FormField">
                <label className="FormField__Label">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" onChange={this.handleSetEmailAddress} />
              </div>
              <div className="FormField">
              <label className="CheckboxLabel">Select Role : </label>
              <input className="FormField_Checkbox_Admin" type="checkbox" value="Admin" onChange={this.handleSelectRoleAdmin}/><label style={{color:'brown'}}>Admin</label>
              <input className="FormField_Checkbox_User" type="checkbox" value="User" onChange={this.handleSelectRoleUser}/><label style={{color:'brown'}}>User</label>
              </div>
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                  <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
                </div>
              <div className="FormField">
                <Link to="/SignInForm">
                <button className="FormField__Button mr-20" onClick={this.handleSubmitSignUpForm}>Sign Up</button></Link> 
                <Link to="/SignInForm" className="FormField__Link">I'm already member</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm