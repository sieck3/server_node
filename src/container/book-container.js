
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
            libros: null,
            bookAutor: '',
            spinner: false
        }

        this.envoie = this.envoie.bind(this)
        this.getBookName = this.getBookName.bind(this)
        this.getAutor = this.getAutor.bind(this)
        this.goDetailBook = this.goDetailBook.bind(this)
    }

    componentDidMount() {
        fetch('/ruta1', { method: 'GET' })
    }



    getBookName(e) {
        this.setState({ bookName: e.target.value })
        console.log('getBookName ' + e.target.value)
        console.log(this.state.bookName)
    }

    getAutor(e) {
        this.setState({ bookAutor: e.target.value })
        console.log('getBookAutor ' + e.target.value)
        console.log(this.state.bookAutor)
    }

    envoie(event) {
        event.preventDefault()
        this.setState({ spinner: true })
        let searchUrl = ''
        searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.bookName + '&maxResults=40' + '&key=' + APIKEY
        if (this.state.bookAutor !== '') {
            searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.bookName + '+' + 'inauthor:' + this.state.bookAutor + '&key=' + APIKEY
        }
        console.log('search result =' + searchUrl)
        fetch(searchUrl, { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                if (typeof (response.items) !== 'undefined') {
                    this.setState({ libros: response.items })
                    this.setState({ spinner: false })

                } else {
                    this.setState({ libros: null })
                }
            })
        fetch('/ruta1', { method: 'GET' })
    }

    goDetailBook() {
        //this.props.changePage('BookDetailContainer')
        console.log('detalles')
    }

    render() {
        return (
            <div>

                <FormComponent metodo={this.envoie} getBookName={this.getBookName} getAutor={this.getAutor} />


                <div id='books-container' onClick={this.goDetailBook()}>
                    {this.state.spinner === true ? <span className="spinner"></span> : ''}
                    {this.state.libros !== null ? this.state.libros.map((libro, index) => <BookComponent titulo={libro.volumeInfo.title} imagen={typeof libro.volumeInfo.imageLinks === 'undefined' ? 'img/notFound.png' : libro.volumeInfo.imageLinks.thumbnail} key={index} />) : ''}

                </div>
            </div>

        )
    }

}

export default BookContainer
