import { GET_NUMBERS_BASKET, GET_NUMBERS_WISHLIST } from './types';

export const getNumbers = () => {
    return(dispatch) => {
        console.log("Getting all basket numbers");
        dispatch({
            type: GET_NUMBERS_BASKET
        });
    } 
}

export const getWishList = () => {
    return(dispatch) => {
        console.log("Getting all wishlist numbers");
        dispatch({
            type: GET_NUMBERS_WISHLIST
        });
    } 
}