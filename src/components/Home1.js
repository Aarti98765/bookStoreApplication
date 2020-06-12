import React, { useState } from 'react';
import { connect } from 'react-redux';
import Sort from './Sort';
import { addBasket, addWishList } from '../actions/addAction';
import HomeDataLayer from './HomeDataLayer';


function Home({ basketProps, addBasket, addWishList}) {
    let booksArray = [];
    const [isShown, setIsShown] = useState(false);
    Object.keys(basketProps.books).forEach(function (item) {
        console.log(item);
        console.log(basketProps.books[item]);
        booksArray.push(basketProps.books[item])
        console.log(booksArray);
    })
     
    booksArray = booksArray.map((books, index) => {
        return (
            <div>
                <div className="image">
                    <img src={books.picPath} alt="" onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)} className="img" />
                    {isShown && (
                        index === 1? <div>
                            I'll appear when you hover over the first image.
                        </div> : 
                        index === 2? <div>
                            I'll appear when you hover over the second image.
                        </div> : 
                        index === 3? <div>
                            I'll appear when you hover over the third image.
                        </div>  : 
                        <div>
                            I'll appear when you hover over the fourth image.
                        </div>
                    )}
                    <h5>{books.nameOfbook}</h5>
                    <h6>{books.author}</h6>
                    <h5>Rs. {books.price}</h5>
                    <button onClick={()=> addBasket(books.nameOfbook)} className="addToCart">Add to cart</button>
                    <button onClick={() => addWishList(books.nameOfbook)} className="addToWish">WishList</button>
                </div>
            </div>
        );
    })

    return (
        <div>
            <Sort />
        <div className="flex-container-row-books" >
            {booksArray}
        </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps, {addBasket, addWishList})(Home);