import React from 'react'
import BookDataLayer from '../BookDataLayer';
import Pagination from '../Pagination/Pagination';
import '../Home/Home.css';

var data = new BookDataLayer();

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            isShown: false,
            pageOfItems: [],
            value: 'Sort by relevance',
            cardHover: false
        }
        this.onChangePage = this.onChangePage.bind(this);
    }
    
    async componentDidMount() {
        await data.fetchAllBook(response => {
            this.setState({
                books: response
            })
        })
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    handleClickAddToCart = (e) => {
        data.addToCart(e, 1)
        window.location.reload(false);
    }

    handleClickAddToWishList = (e) => {
        data.addToWishlist(101, e)
        window.location.reload(false);
    }

    handleOnHoverCard = (e) => {
        console.log("entering");
        this.setState({
            cardHover: !this.state.cardHover
        })
    }

    handleChangeBookSort = async (event) => {
        await this.setState({
            value: event.target.value
        })
        console.log("hello", this.state.value)
        if ("Price : Low to High" === this.state.value) {
            data.fetchAllBookAsc(response => {
                this.setState({
                    books: response.content
                })
            })
        }
        else {
            data.fetchAllBookDesc(response => {
                this.setState({
                    books: response.content
                })
            })
        }
    }

    render() {
        let { books } = this.state
        return (
            <div style={{ flexDirection: 'row', marginTop: '30px' }}>
                <div className="flex-container-sort">
                    <h3 className="title-book">Books <text is="x3d" style={{ fontSize: '13px', opacity: '0.5' }}>({books.length} items)</text></h3>
                    <select onChange={this.handleChangeBookSort} value={this.state.value} className="select-list">
                        <option>Sort by relevance</option>
                        <option>Price : High to low</option>
                        <option>Price : Low to High</option>
                        <option>Newest Arrivals</option>
                    </select>
                </div>
                <div className="all-books-view" >
                    { this.state.pageOfItems.map(book => (
                        <div className="onBookHover" key={book.id} style={{ margin: '10px', outlineWidth: 'thin', outlineColor: '#F8F8F8', outlineStyle: 'groove', width: '160px', height: '234px' }}>
                            <div className="image-outer-view" >
                                <img className="image-view" src={book.picPath} alt="" />
                            </div>
                            <br></br>
                            <div style={{ marginLeft: '10px' }}>
                                <text className="book-name-view" >{book.nameOfBook}</text><br></br>
                                <text className="book-author-view" >{book.author}</text><br></br>
                                <text className="book-price-view" >Rs. {book.price}</text><br></br>
                            </div>
                            <button className="addToCart" onClick={() => this.handleClickAddToCart(book.id)}>ADD TO BAG</button>
                            <button className="addToWishList" onClick={() => this.handleClickAddToWishList(book.id)} >WISHLIST</button>
                            <div className="bookDescription">
                                <p style={{ padding: '13px' }}>{book.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <Pagination items={this.state.books} onChangePage={this.onChangePage} />
                </div>
            </div>
        );
    }
}

export default Home;