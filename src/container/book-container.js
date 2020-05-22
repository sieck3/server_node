
import React, { Component } from 'react'
import '../css/book-style.css'

class BookContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test_value: 'Book!'
        }
    }

    componentDidMount() {
        console.log('Book Container')
        fetch('/ruta1', { method: 'GET' })
        .then(response => response)
        .then(response => {
            console.log('holi')
        })
    }


    render() {
        return (
            <div>
                <h2> Container  {this.state.test_value}</h2>
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