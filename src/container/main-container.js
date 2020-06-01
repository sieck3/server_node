
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
            livre: {}
        }
        this.changePage = this.changePage.bind(this)
        this.pageCourrante = this.pageCourrante.bind(this)
        this.changeLivre = this.changeLivre.bind(this)


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
                console.log('response general'+ response.volumeInfo.title)
                this.setState({livre:response}) 
                console.log('livre interno :'+this.state.livre.volumeInfo.title)
                this.setState({pageCourrante:'BookDetailContainer'})
            
        })
    }

    pageCourrante() {
        let pageChoisi = null

        switch (this.state.pageCourrante) {
            case 'BookContainer':
                pageChoisi = <BookContainer changePage={this.changePage} changeLivre={this.changeLivre} />
                break;
            case 'BookDetailContainer':
                pageChoisi = <BookDetailContainer livre={this.state.livre} changePage={this.changePage}/>
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


/*
class MainContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            detailleAlbum: {},
            mainContainer: true
        }
        this.clickTrack = this.clickTrack.bind(this)
    }

    componentDidMount () {
        //   console.log('AlbumsContainer')
    }

    returnIdPourAlbum (event) {
        console.log(event.target.id)
    }

    clickTrack (event) {
        const x = discogs.database()

        x.getMaster(event.target.id, (err, master) => {
            if (err) {
                console.log(err)
            }

            this.setState({ detailleAlbum: master })
            if (this.state.albums !== {}) {
                this.setState({ detailleContainer: true })
            }
            this.setState({ mainContainer: false })
        })
    }

    render () {
        return (
            <div className='d-flex flex-column p-3 mb-2 bg-info text-white '>
                {this.state.mainContainer ? this.props.albums.results.map((album, index) => <AlbumsContainerComponent album={album} handleClick={this.clickTrack} key={index} />) : <DetailleContainer detaille={this.state.detailleAlbum} genderCurrent={this.props.genderCurrent} />}

            </div>
        )
    }
}

export default MainContainer

*/