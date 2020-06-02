import React from 'react'
import '../css/filtre-style.css'



const FormComponent = ({ bookNameC, bookAutorC, metodo, getBookName, getAutor, bookName }) => (

    <div>

        <form onSubmit={metodo}>
            <fieldset>
                <legend>Buscador</legend>
                <div>
                    <label>Nombre:</label>
                    <input type="text" onChange={getBookName} value={bookNameC} />
                </div>
                <div>
                    <label>Autor:</label>
                    <input type='text' onChange={getAutor} value={bookAutorC} />
                </div>
            </fieldset>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>

)

export default FormComponent