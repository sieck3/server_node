import React from 'react'
import '../css/book-style.css'
const STRING_SOLUTIONS = require('../../../server_node/index').STRING_SOLUTIONS


const BookComponent = ({ bookId, titulo, imagen, changePage }) => (

    <div >
        <div className='book' id={bookId} onClick={changePage}>
            <h2 id={bookId} onClick={changePage}>{STRING_SOLUTIONS.cortaTitulo(titulo)}</h2>
            <img src={imagen} alt="img book" id={bookId} onClick={changePage} />
        </div>

    </div>

)

export default BookComponent