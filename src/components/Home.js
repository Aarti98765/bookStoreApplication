import React from 'react'
import BookDataLayer from './BookDataLayer';

var data = new BookDataLayer();

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            isShown: false,
            activePage: 8
        }
        this.setIsShown = this.setIsShown.bind(this);
        this.setIsHide = this.setIsHide.bind(this);
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

    handleClickAddToCart = (e) => {
        data.addToCart(101, e, 1)
        console.log("hi aarti", e)
    }

    handleClickAddToWishList = (e) => {
        data.addToWishlist(101, e)
        console.log("aarti", e)
    } 

    handleChangeBookAsc = () => {
        data.fetchAllBookAsc(response => {
            this.setState({
                books : response.content
            })
        })
    }   

    render() {
        let { books } = this.state
        return (
            <div style={{ flexDirection: 'row', marginTop: '30px' }}>
                <div className="flex-container-sort">
                    <h3 className="title-book">Books <text is="x3d" style={{ fontSize: '13px', opacity: '0.5' }}>({books.length} items)</text></h3>
                    <select onChange={this.handleChangeBookAsc} className="select-list">
                        <option>Sort by relevance</option>
                        <option>Price : High to low</option>
                        <option>Price : Low to High</option>
                        <option>Newest Arrivals</option>
                    </select>
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
                                )  }
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

export default Home;