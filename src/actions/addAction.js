import { ADD_PRODUCT_BASKET, ADD_PRODUCT_WISHLIST } from './types';

export const addBasket = (bookName) => {
    return (dispatch) => {
        console.log("Adding to basket");
        console.log("Books: ", bookName);
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: bookName
        });
    }
}
export const addWishList = (bookName) => {
    return (dispatch) => {
        console.log("Adding to WishList");
        console.log("Books: ", bookName);
        dispatch({
            type: ADD_PRODUCT_WISHLIST,
            payload: bookName
        });
    }
}