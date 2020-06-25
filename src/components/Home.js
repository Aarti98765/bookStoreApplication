import React from 'react'
import BookDataLayer from './BookDataLayer';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

var data = new BookDataLayer();

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            isShown: false,
            activePage: 8,
            value : 'Sort by relevance',
            cardHover: false
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
        await this.setState ({
            value : event.target.value
        })
        console.log("hello",this.state.value)
        if("Price : Low to High" === this.state.value){
            data.fetchAllBookAsc(response => {
                this.setState({
                    books : response.content
                })
            })
        }
        else
        {   data.fetchAllBookDesc(response => {
                this.setState({
                    books : response.content
                })
            })
        }
    }   

    render() {
        let { books } = this.state
        console.log(books.description)
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
                    { 
                        books.map(book => (
                        <div className="single-book-view" key={book.id} onMouseEnter= {this.handleOnHoverCard} onMouseLeave={this.handleOnHoverCard} >
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
                            {this.state.cardHover? <div>{book.nameOfBook}</div> : null}
                            {/*<Card className="bookInfo" variant="outlined">
                            <CardContent>
                            <Typography color="textPrimary" style={{ fontFamily: 'Arial', fontSize: 16, fontWeight: 600 }} gutterBottom>
                                Book Detail
                            </Typography>
                            <Typography color="textSecondary" style={{ fontSize: 12, textAlign: 'initial' }} gutterBottom>
                                {book.description}
                            </Typography>
                        </CardContent>
                        </Card> */}
                    </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;