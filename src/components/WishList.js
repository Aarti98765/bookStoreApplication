import React, { Fragment } from 'react';
import { connect } from 'react-redux';

function WishList({ WishListProps }) {
    console.log( WishListProps);
    let booksInWishList= [];
    let counter = 0;

    Object.keys( WishListProps.books).forEach(function (item) {
            console.log(item);
        console.log( WishListProps.books[item].inwish);
        if ( WishListProps.books[item].inwish) {
            booksInWishList.push( WishListProps.books[item])
            counter = counter + 1;
        }
        console.log(booksInWishList);
    })

    booksInWishList = booksInWishList.map((books) => {
        return (
            <Fragment>
                <div className="flex-container-column">
                    <div style={{ border: '1px solid red', marginLeft: '130px', marginRight: '130px', marginTop:'10px' }}>
                        <div>
                            <h4 className="heading_style"> My WishList</h4>
                        </div>
                        <div className="flex-container-row">
                            <div><img src={books.url} alt="" className="image_style" /></div>
                            <div>
                                <h4 className="heading-style-first">{books.name}</h4>
                                <h6 className="heading-style-second">{books.author}</h6>
                                <span></span>
                                <div>
                                <h4 className="heading-style-third">Rs.{books.price}</h4>
                                <button className="btn-style-remove">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>   
            </Fragment>
        )
    })
    
    return (
        counter === 0? <h2 style={{ marginLeft:'300px', marginTop:'100px' }}>"Oops!  You'r wishlist is empty."</h2> :
        <div>
            {booksInWishList}
        </div>
    )
}

const mapStateToProps = state => ({
    WishListProps: state.wishListState 
});

export default connect(mapStateToProps)(WishList)