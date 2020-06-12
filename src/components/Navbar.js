import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    console.log(props);
    return (
       
        <div> 
        <nav className="menu">
            
            <ion-icon name="book-outline" style={{color:'white', marginTop:'15px',
                width:'30px', height:'30px', marginLeft:'37px'}}></ion-icon> 
         
            <div className="font-size">
            <Link to="/" style={{color:'brown'}}><h1 style={{ color:'white' }} >Bookstore</h1></Link>
            </div>   
            <div>
                <input style={{marginTop:'18px', marginLeft:'20px', width:'260px', height:'20px'}} 
                    placeholder="Search..."></input>
            </div>     
            <ul>
                <li><Link to="/Home" style={{marginLeft:'100px', color:'white'}}>Home</Link></li>
                <li><label style={{marginLeft:'15px', color:'white'}}>Cart</label>
                <Link to="/Cart" style={{backgroundColor:'white', color:'brown'}}>
                    <ion-icon name="cart-outline" ></ion-icon><span>{}</span></Link></li>
                <li><Link to="/WishList"style={{backgroundColor:'white', color:'brown'}}  >
                    <ion-icon name="list-circle-outline"></ion-icon>
                    <span>{}</span></Link></li>
            </ul>      
        </nav>
        </div>  
       
    );
}

export default Navbar;