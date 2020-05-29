
import React, { Component } from 'react'
import '../css/style.css'
import BookContainer from '../container/book-container'
import BookDetailComponent from '../component/book-detail-component'

class MainContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageCourrante: 'BookContainer',
            containerCourrant: <BookContainer />
        }
        this.changePage = this.changePage.bind(this)


    }

    componentDidMount() {
        console.log('Main container ComponentDidMount')

    }

    changePage(page) {
        let nextPage = ''
        switch (page) {
            case 'BookContainer':
                nextPage = <BookContainer changePage={this.changePage} />
                break;
            case 'BookDetailContainer':
                nextPage = <BookDetailComponent />
                break;

            default:
                break;
        }

        this.setState({ containerCourrant: nextPage })
    }

    render() {
        return (
            <div>
                <h1>Buscalibros</h1>
                {this.state.containerCourrant}
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