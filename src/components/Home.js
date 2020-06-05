import React from 'react';
import { connect } from 'react-redux';
import Sort from '../components/Sort';
import { addBasket, addWishList } from '../actions/addAction';

function Home({ basketProps, addBasket, addWishList}) {
    let booksArray = [];
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
                    <img src={books.url} alt="" className="img" />
                    <h5>{books.name}</h5>
                    <h6>{books.author}</h6>
                    <h5>Rs. {books.price}</h5>
                    <button onClick={()=> addBasket(books.id)} className="addToCart">Add to cart</button>
                    <button onClick={() => addWishList(books.id)} className="addToWish">WishList</button>
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