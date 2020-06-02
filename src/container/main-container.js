
import React, { Component } from 'react'
import '../css/style.css'
import BookContainer from '../container/book-container'
import BookDetailComponent from '../component/book-detail-component'
import BookDetailContainer from '../container/book-detail-container'

class MainContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageCourrante: 'BookContainer',
            livreIdCourrante: '',
            livre: {},
            livres: null
        }
        this.changePage = this.changePage.bind(this)
        this.pageCourrante = this.pageCourrante.bind(this)
        this.changeLivre = this.changeLivre.bind(this)
        this.changeLivres = this.changeLivres.bind(this)


    }

    componentDidMount() {
        //console.log('Main container ComponentDidMount')

    }

    changePage(page) {

        this.setState({ pageCourrante: page })
    }

    changeLivre(livre) {

        let searchLivre = 'https://www.googleapis.com/books/v1/volumes/' + livre + '?key=AIzaSyBlAK2pStJIbffK6pUx2MhH0wIescuMrHw'
        // fetch('/ruta1', { method: 'GET' })
        fetch(searchLivre, { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ livre: response })
                this.setState({ pageCourrante: 'BookDetailContainer' })

            })
    }

    changeLivres(livresLien) {
        console.log('Charge books', livresLien)
        fetch(livresLien, { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                if (typeof (response.items) !== 'undefined') {
                    this.setState({ livres: response.items })

                } else {
                    this.setState({ livres: null })
                }
            })
        fetch('/ruta1', { method: 'GET' })
    }

    pageCourrante() {
        let pageChoisi = null

        switch (this.state.pageCourrante) {
            case 'BookContainer':
                pageChoisi = <BookContainer changePage={this.changePage} changeLivre={this.changeLivre} changeLivres={this.changeLivres} livres={this.state.livres} />
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
                {this.pageCourrante()}
            </div>

        )
    }

}

export default MainContainer

