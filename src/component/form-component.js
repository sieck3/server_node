import React from 'react'
import '../css/filtre-style.css'


const FormComponent = ({ metodo, getBookName, getAutor }) => (

    <div>

        <form onSubmit={metodo}>


            <fieldset>
                <legend>Buscador</legend>
                <div>
                    <label >Nombre</label>
                    <input type="text" onChange={getBookName} />
                </div>

                <div>
                    <label>Autor:</label>
                    <input type='text' onChange={getAutor} />
                </div>


            </fieldset>

            <div>
                <input type="submit" />
            </div>

        </form>
    </div>

)

export default FormComponent