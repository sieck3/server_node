import React from 'react'
import '../css/book-style.css'
const STRING_SOLUTIONS = require('../../../server_node/index').STRING_SOLUTIONS


const BookComponent = ({ titulo, imagen, changePage }) => (

    <div >
        <div className='book' >
            <h2 id='ssss' value={'funciona value'} onClick={changePage}>{STRING_SOLUTIONS.cortaTitulo(titulo)}</h2>
            <img src={imagen} alt="img book" />
        </div>

    </div>

)

export default BookComponent