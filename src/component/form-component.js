import React from 'react'
import '../css/filtre-style.css'


const FormComponent = ({metodo,getBookName,getAutor}) => (

    <div>
        <form onSubmit={metodo}>
            <div>
                <label>Nombre del libro:</label>
                <input type='text' onChange={getBookName}/>
            </div>
            <div>
                <label>Autor:</label>
                <input type='text' onChange={getAutor}/>
            </div>
            <button type='submit' >Enviar</button>
        </form>
     
    </div>

)

export default FormComponent