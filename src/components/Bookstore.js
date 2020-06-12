import React, { Component } from 'react';
import image from '../images/new.jpg';

class Bookstore extends Component {
    render() {
        return (
            <div>
            <img src={image} alt="" style={{width:'900px', height:'330px',marginTop:'0px'}} /> 
            <textarea>Hello</textarea>
            </div>
        );
    }
}

export default Bookstore