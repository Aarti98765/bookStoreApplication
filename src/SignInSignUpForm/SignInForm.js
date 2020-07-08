import React, { Component } from 'react';
import image from '../Image/BackgroundImage.jpg';
import { Link } from 'react-router-dom';
import BookDataLayer from '../components/BookDataLayer';
import './SignInSignUpForm.css';

var data = new BookDataLayer();

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSetUserName = (event) => {
    this.setState({
      username: event.target.value
    })
    console.log(this.state.username)
  } 

  handleSetPassword = (event) => {
    this.setState({
      password: event.target.value
    })  
    console.log(this.state.password)
  }

  handleSignInOfUser = () => {
    data.signInData(this.state.username, this.state.password)
    console.log(localStorage.getItem("token"))
  }

  handleClick = () => {
    this.props.history.push('/ResetPassword')
  }

  handleSignUpView = () => {
    this.props.history.push('/SignUpForm')
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
              <div className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label">User Name</label>
                  <input type="username" id="username" className="FormField__Input" placeholder="Enter your user name" onChange={(e) => this.handleSetUserName(e)} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label">Password</label>
                  <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" onChange={(e) => this.handleSetPassword(e)} />
                </div>
                <div className="FormField">
                  <Link to="/">
                  <button className="FormField__Button mr-20" onClick={this.handleSignInOfUser}>Sign In</button> 
                  </Link>
                  <button className="FormField_Create_account" onClick={this.handleSignUpView}>Create an account</button>
                </div>
                <Link to="/ForgotPassword" className="FormField__Link">Forget Password</Link>
              </div>
            </div>
          </div>
        </div>  
    );
  }
}

export default SignInForm
