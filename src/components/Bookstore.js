import React, { Component } from 'react';
import image from '../images/new.jpg';

class Bookstore extends Component {
    render() {
        return (
            <img src={image} alt="" style={{width:'900px', height:'330px',marginTop:'0px'}}></img> 
        );
    }
}

export default Bookstore