import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Sort by relevance' };
    }

    handleChange = (event) =>
        this.setState({ value: event.target.value });

    render() {
        return (
            <div className="flex-container-sort">
                    <h2 className="title-book">Books</h2>
                        <select value={this.state.value} onChange={this.handleChange} className="select-list" >
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