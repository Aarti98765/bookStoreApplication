import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookDataLayer from './HomeDataLayer';
import Home from './Home';

var data = new BookDataLayer();

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            books: [],
            showHome: false
        }
    }    

    handleSearchBookView = () => {
        data.fetchByAuthor(response => {
            this.setState({
                showHome: true,
                books: response
            })
        })
    }   

    render() {
    return (       
        <div> 
        <nav className="menu">
            <ion-icon name="book-outline" style={{color:'white', marginTop:'15px',
                width:'30px', height:'30px', marginLeft:'37px'}}></ion-icon> 
         
            <div className="font-size">
            <Link to="/" style={{color:'brown'}}><h1 style={{ color:'white' }} >Bookstore</h1></Link>
            </div>   
            <div>
                <input onClick={this.handleSearchBookView} style={{marginTop:'18px', marginLeft:'20px', width:'260px', height:'20px'}} 
                    placeholder="Search..."></input>
                { this.state.showHome && <Home info={this.state.books} /> }    
            </div>     
            <ul>
                <li><Link to="/Home" style={{marginLeft:'100px', color:'white'}}>Home</Link></li>
                <li><label style={{marginLeft:'15px', color:'white'}}>Cart</label>
                <Link to="/Cart" style={{backgroundColor:'white', color:'brown'}}>
                    <ion-icon name="cart-outline" ></ion-icon><span>{0}</span></Link></li>
                <li><Link to="/WishList"style={{backgroundColor:'white', color:'brown'}}  >
                    <ion-icon name="list-circle-outline"></ion-icon>
                    <span>{0}</span></Link></li>
            </ul>      
        </nav>
        </div>  
       
    )}
}

export default Navbar;