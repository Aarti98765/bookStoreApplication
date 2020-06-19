import React, {Component } from 'react';
import BookDataLayer from './BookDataLayer';

var data = new BookDataLayer();

class OrderSummaryView extends Component {
    constructor() {
        super();
        this.state = {
        booksOrderSummary : [],
        showHide : false,
        showHideOrderSummary : false,
        }
    }

    componentDidMount() {
        data.fetchAllCartBook(response => {
            console.log(response)
            this.setState({
                booksOrderSummary: response
            })
        })
    }
     
    render() {
        let { booksOrderSummary } = this.state  
    return (
        <div> 
         { booksOrderSummary.map(books => (
                <div className="flex-container-column">
                    <div style={{ borderLeft: 'white', borderRight: 'white', borderTop: 'white', marginLeft: '0px', marginRight: '180px', marginTop: '0px' }}>
    
                        <div style={{ border: 'white', marginLeft: '30px', marginRight: '30px', marginTop: '20px', marginBottom: '20px' }}>
                            <div className="flex-container-row">
                                <div style={{ marginTop: '20px' }}><img src={books.picPath} alt="" className="image_style" /></div>
                                <div style={{ marginTop: '20px' }}>
                                    <h4 className="heading-style-first">{books.nameOfBook}</h4>
                                    <h6 className="heading-style-second">{books.author}</h6>
                                    <h4 className="heading-style-third">Rs. {books.price}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         )) }
        </div>
    );
    }
}

export default OrderSummaryView