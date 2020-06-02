import React from 'react'
import '../css/book-style.css'

const BookDetailComponent = ({ titulo, imagen, description }) => (

    <div>
        <div className='book-detail'>
            <img src={imagen} alt="img book" />
            <div>{description}</div>
        </div>

    </div>

)

export default BookDetailComponent