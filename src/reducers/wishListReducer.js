import { ADD_PRODUCT_WISHLIST, GET_NUMBERS_WISHLIST } from "../actions/types";
import { initialState } from "../components/homeDataLayer";

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_WISHLIST:
            let addQuantity = {...state.books[action.payload]}       
            addQuantity.numbers += 1;
            addQuantity.inwish = true;
                 console.log(addQuantity);
                 return { 
                     ...state,
                     basketNumbers: state.basketNumbers + 1,
                     books: {
                         ...state.books,
                         [action.payload]:addQuantity
                     } 
                 }
        case GET_NUMBERS_WISHLIST:
            return {
                ...state
            } 
          
        default:
            return state;
    }
}