import React, { Component } from 'react';
import BookDataLayer from './HomeDataLayer';

var data = new BookDataLayer();

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: 'Sort by relevance',
            books: []
        };
    }

    handleChange = (event) =>
        this.setState({ value: event.target.value });

    handleChangeBookDesc = (event) => {
        data.fetchAllBookDesc(response => {
            this.setState({
                books : response.content
            })
        })
    }   

    render() {
        let { books } = this.state
        return (
            <div className="flex-container-sort">
                    <h3 className="title-book">Books <text is="x3d" style={{ fontSize: '13px', opacity: '0.5' }}>(50 items)</text></h3>
                        <select onChange={this.handleChangeBookDesc} value={this.state.value} className="select-list" >
                            <option value="grapefruit">Sort by relevance</option>
                            <option value="lime">Price:Low to High</option>
                            <option value="coconut">Price:High to Low</option>
                            <option value="mango">Newest Arrivals</option>
                    </select>
            </div>
        );
    }
}

export default Sort 