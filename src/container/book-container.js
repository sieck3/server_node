
import React, { Component } from 'react'
import '../css/book-style.css'
import FormComponent from '../component/form-component'

class BookContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test_value: 'Book!',
            bookName: ''
        }

        this.envoie = this.envoie.bind(this)
        this.getBookName = this.getBookName.bind(this)
    }

    componentDidMount() {
        console.log('Book Container')
        fetch('/ruta1', { method: 'GET' })
        .then(response => response)
        .then(response => {
            console.log('holi')
        })

       /* fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBlAK2pStJIbffK6pUx2MhH0wIescuMrHw', { method: 'GET' })
        .then(response => response.json)
        .then(response => {
            console.log(response)
        })*/
    }

    

    getBookName (e) {
        this.setState({ bookName: e.target.value })
        console.log('getBookName '+e.target.value)
        console.log(this.state.bookName)
    }

    envoie (event) {
        event.preventDefault()
         fetch('https://www.googleapis.com/books/v1/volumes?q='+this.state.bookName+':keyes&key=AIzaSyBlAK2pStJIbffK6pUx2MhH0wIescuMrHw', { method: 'GET' })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))
        })
    }

    render() {
        return (
            <div>
                <h2> Container  {this.state.test_value}</h2>
                <FormComponent metodo={this.envoie} getBookName={this.getBookName} />
            </div>

        )
    }

}

export default BookContainer


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