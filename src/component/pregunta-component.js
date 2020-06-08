import React from 'react'
//import '../css/book-style.css'



const PreguntaComponent = ({ pregunta, opcion1, opcion2, opcion3, opcion4 }) => (

    <div className='preguntas-container'>

        <h2 >{pregunta}</h2>
        <div>

            <div id={opcion1}>{opcion1}</div>
            <div id={opcion2}>{opcion2}</div>
            <div id={opcion3}>{opcion3}</div>
            <div id={opcion4}>{opcion4}</div>

        </div>


    </div>

)

export default PreguntaComponent