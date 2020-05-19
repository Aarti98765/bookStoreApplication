import React, { useEffect } from 'react';
import image from '../images/new.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
import { getNumbers } from '../actions/getAction';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

function Navbar(props) {
    console.log(props);

    useEffect(() => {
        getNumbers();
    }, [])
    return (
        <header> 
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
            <Link to="/Cart" style={{backgroundColor:'white'}}><ion-icon name="cart-outline"></ion-icon><span>{props.basketProps.basketNumbers}</span></Link></li>
            </ul>

        </nav>
        <div>
       {/*     <img src={image} alt="" style={{width:'900px', height:'330px',marginTop:'0px'}}></img> */}
        </div>
        </div>  
        </header> 
    );
}
const mapStateToProps = state => ({
    basketProps: state.basketState
})
export default connect(mapStateToProps, { getNumbers })(Navbar);