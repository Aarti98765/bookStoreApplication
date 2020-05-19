import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers,getWishList } from '../actions/getAction';
 
import { Link } from 'react-router-dom';

function Navbar(props) {
    console.log(props);

    useEffect(() => {
        getNumbers();
    }, [])
    return (
       
        <div> 
        <nav className="menu">
            
            <ion-icon name="book-outline" style={{color:'white', marginTop:'15px',
                width:'30px', height:'30px', marginLeft:'40px'}}></ion-icon> 
         
            <div className="font-size">
                <h1>Bookstore</h1>
            </div>   
            <div>
                <input style={{marginTop:'18px', marginLeft:'20px', width:'260px', height:'20px'}} placeholder="Search..."></input>
            </div>     
            <ul>
            <li><Link to="/" style={{marginLeft:'160px', color:'white'}}>Home</Link></li>
            <li><label style={{marginLeft:'15px', color:'white'}}>Cart</label>
            <Link to="/Cart" style={{backgroundColor:'white'}}><ion-icon name="cart-outline">
                </ion-icon><span>{props.basketProps.basketNumbers}</span></Link></li>
            <li><Link to="/WishList"style={{backgroundColor:'white'}}  >
                 <ion-icon name="list-circle-outline"></ion-icon><span>{props.WishListProps.basketNumbers}</span></Link></li>
            </ul>
        </nav>
        </div>  
       
    );
}
const mapStateToProps = state => ({
    basketProps: state.basketState,
    WishListProps: state.wishListState 
})
export default connect(mapStateToProps, { getNumbers, getWishList })(Navbar);