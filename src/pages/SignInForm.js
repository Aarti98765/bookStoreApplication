import React, { Component } from 'react';
import image from '../images/new.jpg';
import { HashRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import SignUpForm from '../pages/SignUpForm';
import ResetPassword from '../components/ResetPassword';
import ForgotPassword from '../components/ForgotPassword';
//import image from '../images/loginImage.jpeg';


class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick = () => {
    this.props.history.push('/ResetPassword')
  }

  handleSignUpPage = () => {
    this.props.history.push('/SignUpForm')
  }

  handleForgotPasswordPage = () => {
    this.props.history.push('/ForgotPassword')
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
        <div className="Main_view">
          <div className="App__Aside">
            <img src={image} alt="" className="App_Img"></img>
          </div>
          <div className="App__Form">
            <div className="FormTitle">
              <lable className="FormTitle__Link_SignIn">Sign In</lable> or <lable className="FormTitle__Link_SignUp">Sign Up</lable>
            </div>
            <div className="FormCenter">
              <form className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                  <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <button className="FormField__Button mr-20" onClick={this.handleForgotPasswordPage}>Sign In</button> <button className="FormField_Create_account" onClick={this.handleSignUpPage}>Create an account</button>
                </div>
                <Link to="/ResetPassword" className="FormField__Link">Forget Password</Link>
              </form>
            </div>
          </div>
        </div>  
    );
  }
}

export default SignInForm
