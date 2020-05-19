export const ADD_PRODUCT_BASKET = 'ADD_PRODUCT_BASKET';
export const GET_NUMBERS_BASKET = 'GET_NUMBERS_BASKET';
export const ADD_PRODUCT_WISHLIST = 'ADD_PRODUCT_WISHLIST';
export const GET_NUMBERS_WISHLIST = 'GET_NUMBERS_WISHLIST';

export const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    books: {
        1: {
            name: "The Girl in Room 105",
            author: "Chetan Bhagat",
            url: 'https://books.google.com/books/content?id=GHt_uwEACAAJ&printsec=frontcover&img=1&zoom=5',
            price: 193,
            numbers: 0,
            inwish: false,
            inCart: false,
        },
        2: {
            name: "Indian Superfoods",
            author: "by Rujuta Divekar",
            url: 'https://books.google.com/books/content?id=4oFoDwAAQBAJ&printsec=frontcover&img=1&zoom=5',
            price: 495,
            numbers: 0,
            inwish: false,
            inCart: false,
        },
        3: {
            name: "Angels And Demons",
            author: "by Dan Brown",
            url: 'https://books.google.com/books/content?id=d5xgYw4Ts0gC&printsec=frontcover&img=1&zoom=5',
            price: 218,
            numbers: 0,
            inwish: false,
            inCart: false,

        },
        4: {
            name: "Angels & Demons - Movie Tie-In",
            author: "by Dan Brown",
            url: 'https://books.google.com/books/content?id=GXznEnKwTdAC&printsec=frontcover&img=1&zoom=5',
            price: 462,
            numbers: 0,
            inwish: false,
            inCart: false,

        }
    }
}
