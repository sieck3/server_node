
import React, { Component } from 'react'

import BookDetaillComponent from '../component/book-detail-component'
import BookDetailComponent from '../component/book-detail-component'

const APIKEY = require('../../../server_node/index').apikey

class BookContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }


    }

    componentDidMount() {
        // fetch('/ruta1', { method: 'GET' })
    }


    render() {
        return (
            <div>
                <h2>Book Detail</h2>
                <BookDetailComponent titulo='example' imagen='img/notFound.png' />
            </div>

        )
    }

}

export default BookContainer
