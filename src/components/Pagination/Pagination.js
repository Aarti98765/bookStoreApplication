import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pager: {},
            initialPage: 1,
        };

        if (this.props.items && this.props.items.length) {
            this.setBookPage(this.state.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== prevProps.items) {
            this.setBookPage(this.state.initialPage);
        }
    }

    setBookPage(page) {
        var items = this.props.items;
        var pager = this.state.pager;
        if (page < 1 || page > pager.totalPages) {
            return;
        }
        pager = this.getBookPagerObjectWithStartEndIndexValues(items.length, page);
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        this.setState({
            pager: pager
        });
        this.props.onChangePage(pageOfItems);
    }

    getBookPagerObjectWithStartEndIndexValues(totalItems, currentPage, pageSize) {
        currentPage = currentPage || 1;
        pageSize = pageSize || 10;
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        }
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        var pager = this.state.pager;
        
        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }

        return (
            <div className="pagination-style">
                <div className="pagination">
                    <button className="page-button-view1" onClick={() => this.setBookPage(1)}>First</button>
                    <button className="page-button-view1" onClick={() => this.setBookPage(pager.currentPage - 1)} >Previous</button>
                    { pager.pages.map((page) =>
                        <button className="page-button-view" onClick={() => this.setBookPage(page)}>{page}</button>
                    )}
                    <button className="page-button-view1" onClick={() => this.setBookPage(pager.currentPage + 1)}>Next</button>
                    <button className="page-button-view1" onClick={() => this.setBookPage(pager.totalPages)}>Last</button>
                </div>
            </div>
        );
    }
}

export default Pagination