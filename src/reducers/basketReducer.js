import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";
const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    books: {
        dontMakeMeThink: {
            name: "Don't Make Me Think",
            author: "by steve krug",
            price: 1500,
            numbers: 0,
            inCart: false
        },
        react: {
            name: "React",
            author: "by steve krug",
            price: 1500,
            numbers: 0,
            inCart: false
        },
        php: {
            name: "PHP",
            author: "by steve krug",
            price: 1500,
            numbers: 0,
            inCart: false
        },
        reactjs: {
            name: "React-js",
            author: "by steve krug",
            price: 1500,
            numbers: 0,
            inCart: false
        }
    }
}

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