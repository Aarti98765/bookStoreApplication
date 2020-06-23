import React, { Component } from 'react';
import image from '../images/new.jpg';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      name: '',
      hasAgreed: false,
      roleChecked: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleChangeRoleChecked = (e) => {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
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
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
              <label className="FormField__Label" htmlFor="phoneNumber">Phone Number</label>
              <input type="phoneNumber" id="phoneNumber" className="FormField__Input" placeholder="Enter your phone number" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div>
              <label className="CheckboxLabel">Select Role : </label>
              <input className="FormField_Checkbox_Admin" type="checkbox" name="roleChecked" value={this.state.roleChecked} onChange={this.handleChangeRoleChecked}/><label style={{color:'brown'}}>Admin</label><input className="FormField_Checkbox_User" type="checkbox" name="roleChecked" value={this.state.roleChecked} onChange={this.handleChangeRoleChecked}/><label style={{color:'brown'}}>User</label>
              </div>
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                  <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
                </div>
              <div className="FormField">
                <button className="FormField__Button mr-20">Sign Up</button> <Link to="/SignInForm" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm