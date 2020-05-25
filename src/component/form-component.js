import React from 'react'
import '../css/form-component.css'

const FormComponent = ({metodo,getBookName}) => (

    <div>
        <form onSubmit={metodo}>
            <div>
                <label>Nombre del libro :&nbsp;</label>
                <input type='text' onChange={getBookName}/>
            </div>
            <button type='submit' >Enviar</button>
        </form>
     
    </div>

)

export default FormComponent