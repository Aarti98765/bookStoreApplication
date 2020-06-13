import React, { Fragment, Component } from 'react';
import HomeDataLayer from './HomeDataLayer'

var data = new HomeDataLayer();

class WishList extends Component {
    constructor() {
        super()
        this.state = {
            booksInWishList : [],
            counter : 0
        }
    }

    componentDidMount() {
        data.fetchAllWishlistBook(response => {
            console.log(response)
            this.setState({
                booksInWishList: response
            })
        })
    }

    render() {
        let { booksInWishList } = this.state
        let {counter} = this.state.counter + 1
    return (
       counter === 0? <h2 style={{ marginLeft:'300px', marginTop:'100px' }}>"Oops!  You'r wishlist is empty."</h2> : 
        <div>,
        { booksInWishList.map((books) => (
                <Fragment>
                    <div className="flex-container-column" key={books.id} >
                        <div style={{ border: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop:'10px' }}>
                            <div>
                                <h4 className="heading_style"> My WishList</h4>
                            </div>
                            <div className="flex-container-row">
                                <div><img src={books.picPath} alt="" className="image_style" /></div>
                                <div>
                                    <h4 className="heading-style-first">{books.nameOfBook}</h4>
                                    <h6 className="heading-style-second">{books.author}</h6>
                                    <span></span>
                                    <div>
                                    <h4 className="heading-style-third">Rs.{books.price}</h4>
                                    <button className="btn-remove-wishlist">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>   
                </Fragment>
            )
        )}
        </div>
    )}
}

export default WishList