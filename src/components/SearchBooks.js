import React, { Component } from 'react'
import BookDataLayer from './BookDataLayer';

var data = new BookDataLayer();

class SearchBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

   componentDidMount() {
        this.setState({
            books: this.props.data
        })
    }

    handleClickAddToCart = (e) => {
        data.addToCart(e.id, 1)
    }

    handleClickAddToWishList = (e) => {
        data.addToWishlist(101, e)
    } 
  
    render() {
        return (
            <div style={{ flexDirection: 'row', marginTop: '30px' }}>
                { this.state.books !== '' ? 
                <div className="all-books-view" >
                    { this.state.books.map(book => (
                        <div className="single-book-view" key={book.id} >
                            <div className="image-outer-view" >
                            <img className="image-view" src={book.picPath} alt="" onMouseEnter = { this.setIsShown}
                            onMouseLeave={this.setIsHide} />
                            </div>
                            <br></br>
                            <div style={{ marginLeft: '18px' }}>
                            <text className="book-name-view" >{book.nameOfBook}</text><br></br>
                            <text className="book-author-view" >{book.author}</text><br></br>
                            <text className="book-price-view" >Rs. {book.price}</text><br></br>
                            </div>
                            <button className="addToCart" onClick={() => this.handleClickAddToCart(book.id)}>ADD TO BAG</button>
                            <button className="addToWishList" onClick={() => this.handleClickAddToWishList(book.id)} >WISHLIST</button>     
                        </div>
                    ))} 
                    </div> : null }
            </div>
        );
    }
}

export default SearchBook;




