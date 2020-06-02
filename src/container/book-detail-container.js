
import React, { Component } from 'react'

import BookDetailComponent from '../component/book-detail-component'

const APIKEY = require('../../../server_node/index').apikey

class BookDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            livre: this.props.livre

        }

        this.returneSearch = this.returneSearch.bind(this)

    }

    componentDidMount() {
    }

    returneSearch() {
        this.props.changePage('BookContainer')
    }


    render() {

        return (
            <div>
                <h2>{this.state.livre.volumeInfo.title}</h2>
                <BookDetailComponent titulo={this.state.livre.volumeInfo.title} imagen={typeof this.state.livre.volumeInfo.imageLinks === 'undefined' ? 'notFound' : this.state.livre.volumeInfo.imageLinks.smallThumbnail} description={this.state.livre.volumeInfo.description} />
                <button onClick={this.returneSearch}>return</button>
            </div>

        )
    }

}

export default BookDetailContainer
