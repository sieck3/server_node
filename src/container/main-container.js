
import React, { Component } from 'react'
import '../css/style.css'
import BookContainer from '../container/book-container'
import BookDetailContainer from '../container/book-detail-container'
import DanielaContainer from '../container/daniela-container'

const APIKEY = require('../../../server_node/index').apikey

class MainContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageCourrante: 'BookContainer',
            livreIdCourrante: '',
            livre: {},
            livres: null,
            bookName: '',
            bookAutor: '',
            bookContainerOn: true,
            BookDetailContainerOn: false
        }
        this.changePage = this.changePage.bind(this)
        this.pageCourrante = this.pageCourrante.bind(this)
        this.changeLivre = this.changeLivre.bind(this)
        this.changeLivres = this.changeLivres.bind(this)
        this.changeInputs = this.changeInputs.bind(this)


    }

    componentDidMount() {
        //console.log('Main container ComponentDidMount')

    }

    changePage(page) {

        // this.setState({ pageCourrante: page })

        switch (page) {
            case 'BookContainer':
                //    pageChoisi = <BookContainer changePage={this.changePage} changeLivre={this.changeLivre} changeLivres={this.changeLivres} livres={this.state.livres} changeInputs={this.changeInputs} bookNameC={this.state.bookName} bookAutorC={this.state.bookAutor} />

                this.setState({ bookContainerOn: true })
                this.setState({ BookDetailContainerOn: false })
                break;
            case 'BookDetailContainer':
                //  pageChoisi = <BookDetailContainer livre={this.state.livre} changePage={this.changePage} />

                this.setState({ bookContainerOn: false })
                this.setState({ BookDetailContainerOn: true })
                break;

            default:
                break;
        }
    }

    changeLivre(livre) {

        let searchLivre = 'https://www.googleapis.com/books/v1/volumes/' + livre + '?key=' + APIKEY
        // fetch('/ruta1', { method: 'GET' })
        fetch(searchLivre, {
            method: 'GET', credentials: 'same-origin'
        })
            .then(response => response.json())
            .then(response => {
                this.setState({ livre: response })
                // this.setState({ pageCourrante: 'BookDetailContainer' })
                this.changePage('BookDetailContainer')
            })
    }

    changeLivres(livresLien) {

        fetch(livresLien, {
            method: 'GET', credentials: 'same-origin'
        })
            .then(response => response.json())
            .then(response => {
                if (typeof (response.items) !== 'undefined') {
                    this.setState({ livres: response.items })

                } else {
                    this.setState({ livres: null })
                }
            })
        //fetch('/ruta1', { method: 'GET' })
    }

    changeInputs(title, autor) {

        this.setState({ bookName: title })
        this.setState({ bookAutor: autor })
    }
    pageCourrante() {
        let pageChoisi = null

        switch (this.state.pageCourrante) {
            case 'BookContainer':
                pageChoisi = <BookContainer changePage={this.changePage} changeLivre={this.changeLivre} changeLivres={this.changeLivres} livres={this.state.livres} changeInputs={this.changeInputs} bookNameC={this.state.bookName} bookAutorC={this.state.bookAutor} />
                break;
            case 'BookDetailContainer':
                pageChoisi = <BookDetailContainer livre={this.state.livre} changePage={this.changePage} />
                break;

            default:
                break;
        }

        return pageChoisi

    }

    render() {

        return (
            <div>
                <h1>Buscalibros</h1>
                {this.state.bookContainerOn ? <BookContainer changePage={this.changePage} changeLivre={this.changeLivre} changeLivres={this.changeLivres} livres={this.state.livres} changeInputs={this.changeInputs} bookNameC={this.state.bookName} bookAutorC={this.state.bookAutor} /> : ''}
                {this.state.BookDetailContainerOn ? <BookDetailContainer livre={this.state.livre} changePage={this.changePage} /> : ''}
            </div>
        )
    }

}

export default MainContainer

