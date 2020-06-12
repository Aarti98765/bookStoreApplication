import React from 'react'
import BookDataLayer from './HomeDataLayer';
import Sort from './Sort';

var data = new BookDataLayer();

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            books: [],
            isShown: false,
            activePage: 8
        }
        this.setIsShown = this.setIsShown.bind(this);
        this.setIsHide = this.setIsHide.bind(this);
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    setIsShown(event) {
        this.setState({
          isShown : true
        });
    }

    setIsHide(event) {
        this.setState({
          isShown : false
        });
    }
    
    async componentDidMount() {
        await data.fetchAllBook(response => {
            this.setState({
                books: response
            })
        })
    }

    render() {
        let { books } = this.state
        return (
            <div style={{ flexDirection: 'row', marginTop: '30px' }}>
                <Sort />
                <div className="all-books-view" >
                    { books.map(book => (
                        <div className="single-book-view" >
                            <div className="image-outer-view" >
                            <img className="image-view" src={book.picPath} alt="" onMouseEnter = { this.setIsShown}
                            onMouseLeave={this.setIsHide} />
                            </div>
                            <br></br>
                        { /* 
                                isShown && (
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
                                                I'll appear when you hover over the fourth image.
                            </div>
                                ) */ }
                            <div style={{ marginLeft: '18px' }}>
                            <text className="book-name-view" >{book.nameOfBook}</text><br></br>
                            <text className="book-author-view" >{book.author}</text><br></br>
                            <text className="book-price-view" >Rs. {book.price}</text><br></br>
                            </div>
                            <button className="addToCart" >ADD TO BAG</button>
                            <button className="addToWishList" >WISHLIST</button>     
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;