import React from 'react';
import book1 from '../images/book1.jpeg';
import book2 from '../images/book2.jpeg';
import book3 from '../images/book3.jpeg';
import book4 from '../images/book4.jpeg';
import { connect } from 'react-redux';
import { addBasket, addWishList } from '../actions/addAction';

const Home = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="image">
                <img src={book1} alt="" className="img" />
                <h5>The Girl in Room 105</h5>
                <h6>Chetan Bhagat</h6>
                <h5>Rs.193</h5>
                <button onClick={ () => props.addBasket('1')} className="addToCart">Add to cart</button>
                <button onClick={ () => props.addWishList('1')} className="addToWish">WishList</button>
            </div>    
            
            <div className="image">
                <img src={book2} alt="" className="img"/>
                <h5> Indian Superfoods</h5>
                <h6>by Rujuta Divekar</h6>
                <h5>Rs.495</h5>
                <button onClick={ () => props.addBasket('2')} className="addToCart">Add to cart</button>
                <button onClick={ () => props.addWishList('2')} className="addToWish">WishList</button>
            </div>

            <div className="image">
                <img src={book3} alt="" className="img"/>
                <h5> Angels And Demons</h5>
                <h6>by Dan Brown</h6>
                <h5>Rs.218</h5>
                <button onClick={ () => props.addBasket('3')} className="addToCart">Add to cart</button>
                <button onClick={ () => props.addWishList('3')} className="addToWish">WishList</button>
            </div>
            
            <div className="image">
                <img src={book4} alt="" className="img"/>
                <h5>Angels & Demons - Movie Tie-In</h5>
                <h6>by Dan Brown</h6>
                <h5>Rs.462</h5>
                <button onClick={ () => props.addBasket('4')} className="addToCart">Add to cart</button>
                <button onClick={ () => props.addWishList('4')} className="addToWish">WishList</button>
            </div>
        
        </div>   
    );
}

export default connect(null, { addBasket, addWishList })(Home);