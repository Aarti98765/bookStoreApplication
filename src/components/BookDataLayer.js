//var booksObject = '';
//var booksCount = '';
class BookDataLayer {
    
    fetchAllBook(callback) {
       fetch('http://localhost:8080/verifyaccount/all')
        .then(res => res.json())
        .then(values => callback(values))
    }
    
    addToCart(userId, bookId, quantity) {
        fetch("http://localhost:8080/home/user/cart/add-update", {
        method: 'PUT',
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify({"bookId": bookId, "bookQuantity": quantity, "userId": userId})})
        .then(res => res.text())
        .then(res => console.log(res))
    }

    fetchAllCartBook(callback) {
        fetch("http://localhost:8080/home/user/cart/getall/101")
        .then(res => res.json())
        .then(values => { 
           // console.log("my books", booksObject = values);
            callback(values);
         })
    }

    /*initialStates(callback) {
        var booksObject = ''
        var booksCount = ''
        let initialState = ''
        this.fetchAllCartBook( response => (
            booksObject = response,
            console.log("i am booksobject", response),
            initialState = {
                booksCount : booksObject.length
            },
            callback(initialState)
        )
        )
    }*/
    
    addToWishlist(userId, bookId) {
        fetch("http://localhost:8080/home/user/wishlist/add", {
        method: 'PUT',
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify({"bookId": bookId, "userId": userId})})
        .then(res => res.text())
        .then(res => console.log(res))
    }

    fetchAllWishlistBook(callback) {
        fetch("http://localhost:8080/home/user/wishlist/getall/101")
        .then(res => res.json())
        .then(values => callback(values))
    }

    fetchAllBookAsc(callback) {
        fetch('http://localhost:8080/verifyaccount/sort-asc/price')
        .then(res => res.json())
        .then(values => callback(values))
    }

    fetchAllBookDesc(callback) {
        fetch('http://localhost:8080/verifyaccount/sort-desc/price')
        .then(res => res.json())
        .then(values => callback(values))
    }

    fetchAllSearchBook(searchBook, callback) {
        fetch(`http://localhost:8080/verifyaccount/searchbooks/${searchBook}`)
        .then(res => res.json())
        .then(values => callback(values))
    }

    removeBookFromCart(userId, bookId, quantity){
        fetch("http://localhost:8080/home/user/cart/remove", {
            method: 'PUT',
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify({"bookId": bookId, "bookQuantity": quantity, "userId": userId})})
            .then(res => res.text())
            .then(res => console.log(res))
    }
    
    removeBookFromWishList(userId, bookId){
        fetch("http://localhost:8080/home/user/wishlist/remove", {
        method: 'PUT',
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify({"bookId": bookId, "userId": userId})})
        .then(res => res.text())
        .then(res => console.log(res))
    }

    updateCart(userId, bookId, quantity) {
        fetch("http://localhost:8080/home/user/cart/add-update", {
        method: 'PUT',
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify({"bookId": bookId, "bookQuantity": quantity, "userId": userId})})
        .then(res => res.text())
        .then(res => console.log(res))
    }
}

export default BookDataLayer;