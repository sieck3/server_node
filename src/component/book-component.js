import React from 'react'
import '../css/book-style.css'
const STRING_SOLUTIONS = require('../../../server_node/index').STRING_SOLUTIONS


const BookComponent = ({ titulo, imagen, changePage }) => (

    <div >
        <div className='book' >
            <h2 >{STRING_SOLUTIONS.cortaTitulo(titulo)}</h2>
            <img src={imagen} alt="img book" id='ssss' value='aa' onClick={changePage} />
        </div>

    </div>

)

export default BookComponent