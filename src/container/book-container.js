
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
        // fetch('/ruta1', { method: 'GET' })
    }



    getBookName(e) {
        this.setState({ bookName: e.target.value })

        this.props.changeInputs(e.target.value, this.state.bookAutor)
    }

    getAutor(e) {
        this.setState({ bookAutor: e.target.value })
        this.props.changeInputs(this.state.bookName, e.target.value)
    }

    envoie(event) {
        event.preventDefault()
        this.setState({ spinner: true })
        let searchUrl = ''
        searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.bookName + '&maxResults=40' + '&key=' + APIKEY
        if (this.state.bookAutor !== '') {
            searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.bookName + '+' + 'inauthor:' + this.state.bookAutor + '&key=' + APIKEY
        }
        fetch(searchUrl, {
            method: 'GET', credentials: 'same-origin'
        })
            .then(response => response.json())

            .then(response => {

                if (typeof (response.items) !== 'undefined') {
                    this.setState({ libros: response.items })
                    this.setState({ spinner: false })

                } else {
                    this.setState({ libros: null })
                }
            })
        // fetch('/ruta1', { method: 'GET' })

        this.props.changeLivres(searchUrl)
    }

    goDetailBook(event) {
        //this.props.changePage('BookDetailContainer')

        this.props.changeLivre(event.target.id)

    }

    render() {

        let libros = this.props.livres !== {} ? this.props.livres : null

        return (

            <div>
                <FormComponent bookNameC={this.props.bookNameC} bookAutorC={this.props.bookAutorC} metodo={this.envoie} getBookName={this.getBookName} getAutor={this.getAutor} bookName={this.state.bookName} />
                <div id='books-container' >
                    {this.state.spinner === true ? <span className="spinner"></span> : ''}
                    {libros !== null ? libros.map((libro, index) => <BookComponent bookId={libro.id} titulo={libro.volumeInfo.title} imagen={typeof libro.volumeInfo.imageLinks === 'undefined' ? 'img/notFound.png' : (libro.volumeInfo.imageLinks.thumbnail)} changePage={this.goDetailBook} key={index} />) : ''}
                </div>
            </div>

        )
    }

}

export default BookContainer
