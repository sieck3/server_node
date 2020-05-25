
import React, { Component } from 'react'

import FormComponent from '../component/form-component'
import BookComponent from '../component/book-component'

const APIKEY = require('../../../server_node/index').apikey

class BookContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test_value: 'Book!',
            bookName: '',
            libros: null
        }

        this.envoie = this.envoie.bind(this)
        this.getBookName = this.getBookName.bind(this)
    }

    componentDidMount() {
     
    }



    getBookName(e) {
        this.setState({ bookName: e.target.value })
        console.log('getBookName ' + e.target.value)
        console.log(this.state.bookName)
    }

    envoie(event) {
        event.preventDefault()
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.state.bookName + '&key=' + APIKEY, { method: 'GET' })
            .then(response => response.json())
            .then(response => {
   
                this.setState({ libros: response.items })
            })
    }

    render() {
        return (
            <div>
             
                <FormComponent metodo={this.envoie} getBookName={this.getBookName} />
                <div id='books-container'>
                {this.state.libros !== null ? this.state.libros.map((libro, index) => <BookComponent titulo={libro.volumeInfo.title} imagen={typeof libro.volumeInfo.imageLinks === 'undefined' ? 'img/notFound.png' : libro.volumeInfo.imageLinks.thumbnail} key={index} />) : <label></label>}
                </div>
            </div>

        )
    }

}

export default BookContainer
