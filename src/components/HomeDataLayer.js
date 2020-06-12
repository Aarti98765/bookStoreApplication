var booksObject = '';
var books = '';
class HomeDataLayer {
    fetchAllBook(callback) {
       fetch('http://localhost:8082/verifyaccount/all')
       .then(res => res.json())
       .then(values => { 
           booksObject = values;
           callback(values);
        })
        console.log('heyyyyyy', booksObject);
    }

    initialStates() {
        const initialState = {
            basketNumbers: 0,
            cartCost: 0,
            books : booksObject 
        }
        return initialState
    }
}

export default HomeDataLayer;