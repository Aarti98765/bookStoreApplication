import React, { Component } from 'react';
import image from '../images/new.jpg';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from '../pages/SignUpForm';
import SignInForm from '../pages/SignInForm';
import ResetPassword from './ResetPassword';
//import image from '../images/loginImage.jpeg';

class LoginRegistration extends Component {
    render() {
        return (
            <Router basename="/react-auth-ui/">
            <div className="Main_view">
            <div className="App__Aside"> 
                <img src={image} alt="" className="App_Img"></img>
            </div>
            <div className="App__Form">
              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>
              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>
             {  /*  <img src={image} alt="" style={{width:'900px', height:'330px',marginTop:'0px'}} /> */ } 
            </div>
            </Router>
        );
    }
}

export default LoginRegistration