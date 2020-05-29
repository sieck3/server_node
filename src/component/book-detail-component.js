import React from 'react'
import '../css/book-style.css'

const BookDetailComponent = ({ titulo, imagen }) => (

    <div>
        <div className='book'>
            <h4>Book detail Component</h4>
            <h2>{titulo}</h2>
            <img src={imagen} alt="img book" />
        </div>

    </div>

)

export default BookDetailComponent