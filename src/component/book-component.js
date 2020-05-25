import React from 'react'
import '../css/book-style.css'

const BookComponent = ({ titulo, imagen }) => (

    <div>
        <div className='book'>
            <h2>{titulo}</h2>
            <img src={imagen} alt="img book" />
        </div>

    </div>

)

export default BookComponent