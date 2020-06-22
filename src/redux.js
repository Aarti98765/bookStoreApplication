import BookDataLayer from './components/BookDataLayer';
//import CartBookView from './components/CartBookView';
const {createStore} = require('redux');

//var cartData = new BookDataLayer();
//var cartLength = '';
//var wishListLength = '';
// books = []

//var booksObject= '';
var data = new BookDataLayer();
var initialValue = '';


// /*function initialStates(callback) {
//         //let initialState = 8
//         // var booksObject = ''
//         /*var booksCount = ''
//         let initialState = ''*/
//         data.fetchAllCartBook( response => (
//            // booksObject = response.length,
//             /*console.log("i am booksobject", response),
//             initialState = {
//                 booksCount : booksObject.length
//         },*/
//         callback(response.length),
//         console.log(response.length)
//         )
//         )
// }

// function sample () {
//     //var initialValue = '';
//     initialStates((response) => (
//         initialValue = response
//       //  console.log("i am redux", initialValue)
//     ));
//     console.log("initial value", initialValue)
//     return initialValue
// }

// var initialValueofs = sample();
// console.log("i am callback", initialValueofs)*/

 
  //  cartData.fetchAllWishlistBook(response => {
//    wishListLength : 0
  //  })

//}

/*cartData.fetchAllCartBook(response => {
    cartLength = response.length
}) */

/*function fetchAllCartBook(callback){
    const bookObject={
        name : 'vaish'
    }
   
    callback(bookObject)
}*/

/*function fetchAllCartBook(callback){
    const bookObject={
        name : 'vaish'
    }
   
    callback(bookObject)
}*/

function sample () {
    //var initialValue = '';
    
    // initialStates.initialStates((response) => (
    //  initialValue = response
    //  //console.log("i am redux", initialValue)
    // ));
   
   data.fetchAllCartBook((response) =>   
      initialValue = response
   )
        
    console.log("initial value", initialValue)
    return initialValue
    }
    
   // sample().then(
     // response => console.log("i am final", response)
  //  )
 
    var initialValues = sample();
    console.log('vvvvvv',initialValues)
   
   

const myReducer = (state = initialValues, action) => {
    const newState = {...state}
    if (action.type === 'findLengthOfCart') {
        newState.cartLength = newState.cartLength
    }
    if (action.type === 'findLengthOfWishList') {
        newState.wishListLength = newState.wishListLength
    }
    return newState;
}

const store = createStore(myReducer)
console.log("initial state" + JSON.stringify(store.getState()))
store.dispatch({type: 'findLengthOfCart'})
console.log("after api call" + JSON.stringify(store.getState()))

export default store
