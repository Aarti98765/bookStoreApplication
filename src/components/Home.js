import React from 'react';
import book1 from '../images/book1.jpeg';
import book2 from '../images/book2.jpg';
import book3 from '../images/book3.jpeg';
import book4 from '../images/book4.png';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="image">
                <img src={book1} alt="" className="img" />
                <h5>Don't Make Me Think</h5>
                <h6>by steve krug</h6>
                <h5>Rs.1500</h5>
                <button onClick={ () => props.addBasket('dontMakeMeThink')} className="addToCart">Add to cart</button>
            </div>    
            
            <div className="image">
                <img src={book2} alt="" className="img"/>
                <h5>Don't Make Me Think</h5>
                <h6>by steve krug</h6>
                <h5>Rs.1500</h5>
                <button onClick={ () => props.addBasket('react')} className="addToCart">Add to cart</button>
            </div>

            <div className="image">
                <img src={book3} alt="" className="img"/>
                <h5>Don't Make Me Think</h5>
                <h6>by steve krug</h6>
                <h5>Rs.1500</h5>
                <button onClick={ () => props.addBasket('php')} className="addToCart">Add to cart</button>
            </div>
            
            <div className="image">
                <img src={book4} alt="" className="img"/>
                <h5>Don't Make Me Think</h5>
                <h6>by steve krug</h6>
                <h5>Rs.1500</h5>
                <button onClick={ () => props.addBasket('reactjs')} className="addToCart">Add to cart</button>
            </div>
        
        </div>
        
    );
}

export default connect(null, { addBasket })(Home);