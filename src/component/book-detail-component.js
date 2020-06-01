import React from 'react'
import '../css/book-style.css'

const BookDetailComponent = ({ titulo, imagen }) => (

    <div>
        <div className='book-detail'>
            <img src={imagen} alt="img book" />
        </div>

    </div>

)

export default BookDetailComponent