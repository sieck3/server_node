import React from 'react'
import '../css/book-style.css'

function replace_func(description) {

    let string_sans_html = description.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/<br>/g, '').replace(/<i>/g, '').replace(/<\/i>/g,'')
    //let string_sans_html_deuxieme = string_sans_html.replace(/<\/p>/g,'')

    return string_sans_html
}

const BookDetailComponent = ({ imagen, description }) => (

    <div>
        <div className='book-detail'>
            <img src={imagen} alt="img book" />
            <div>{typeof description !== 'undefined' ? replace_func(description) : 'not description'}</div>
        </div>

    </div>

)

export default BookDetailComponent