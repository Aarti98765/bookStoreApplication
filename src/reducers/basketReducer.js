import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, initialState } from "../actions/types";

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
           let addQuantity = {...state.books[action.payload]}
            
            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);
            return { 
                ...state,
                basketNumbers: state.basketNumbers + 1,
 //               cartCost: state.cartCost + state.books[action.payload].price,
                books: {
                    ...state.books,
                    [action.payload]:addQuantity
                } 
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            } 
        
        default:
            return state;
    }
}