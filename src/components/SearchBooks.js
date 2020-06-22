import React, { Component } from 'react'
import BookDataLayer from './BookDataLayer';

var data = new BookDataLayer();

class SearchBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            searchBook: ''
        }
    }

    async componentDidMount() {
        await data.fetchAllBook(response => {
            this.setState({
                books: response
            })
        })
    }

    handleSearchBookView = async (event) => {
        await this.setState({
            searchBook: event.target.value
        }) 
        
        if(this.state.searchBook !== '') {
            data.fetchAllSearchBook(this.state.searchBook, response => {
                this.setState({
                    books: response
                })
            })
            console.log('my books', this.state.books);
        }
    }

    handleClickAddToCart = (e) => {
        data.addToCart(101, e, 1)
        console.log("hi aarti", e)
    }

    handleClickAddToWishList = (e) => {
        data.addToWishlist(101, e)
        console.log("aarti", e)
    } 
    
    render() {
        let { books } = this.state
        return (
            <div style={{ flexDirection: 'row', marginTop: '30px' }}>
                <div className="flex-container-sort">
                    <input className="search-author-view" placeholder="  Search book by title, author..." onChange={(event) => this.handleSearchBookView(event)}></input>
                </div>
                <div className="all-books-view" >
                    { books.map(book => (
                        <div className="single-book-view" key={book.id} >
                            <div className="image-outer-view" >
                            <img className="image-view" src={book.picPath} alt="" onMouseEnter = { this.setIsShown}
                            onMouseLeave={this.setIsHide} />
                            </div>
                            <br></br>
                            { this.state.isShown && (
                                book.nameOfBook === 'The Girl in Room 105' ? <div>
                                    I'll appear when you hover over the first image.
                            </div> :
                                    book.nameOfBook === 'Angels And Demons' ? <div>
                                        I'll appear when you hover over the second image.
                            </div> :
                                    book.nameOfBook === 'Angels & Demons - Movie Tie-In' ? <div>
                                            I'll appear when you hover over the third image.
                            </div> :
                                        <div>
                            </div>
                            )}
                            <div style={{ marginLeft: '18px' }}>
                            <text className="book-name-view" >{book.nameOfBook}</text><br></br>
                            <text className="book-author-view" >{book.author}</text><br></br>
                            <text className="book-price-view" >Rs. {book.price}</text><br></br>
                            </div>
                            <button className="addToCart" onClick={() => this.handleClickAddToCart(book.id)}>ADD TO BAG</button>
                            <button className="addToWishList" onClick={() => this.handleClickAddToWishList(book.id)} >WISHLIST</button>     
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default SearchBook;




