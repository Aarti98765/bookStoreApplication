import { ADD_PRODUCT_BASKET, ADD_PRODUCT_WISHLIST } from './types';

export const addBasket = (bookId) => {
    return (dispatch) => {
        console.log("Adding to basket");
        console.log("Books: ", bookId);
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: bookId
        });
    }
}
export const addWishList = (bookId) => {
    return (dispatch) => {
        console.log("Adding to WishList");
        console.log("Books: ", bookId);
        dispatch({
            type: ADD_PRODUCT_WISHLIST,
            payload: bookId
        });
    }
}