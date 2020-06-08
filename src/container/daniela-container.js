
import React, { Component } from 'react'
import '../css/daniela-style.css'

import PreguntaComponent from '../component/pregunta-component'

//const APIKEY = require('../../../server_node/index').apikey

const PREGUNTAS = [
    {
        pregunta: 'dos mas uno?',
        respuesta: 'tres',
        opcion1: 'uno',
        opcion2: 'dos',
        opcion3: 'tres',
        opcion4: 'cuatro'
    },
    {
        pregunta: 'dos mas uno?',
        respuesta: 'tres',
        opcion1: 'uno',
        opcion2: 'dos',
        opcion3: 'tres',
        opcion4: 'cuatro'
    }
]


class DanielaContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numero_pregunta: 0
        }

        // this.returneSearch = this.returneSearch.bind(this)

    }

    componentDidMount() {
    }



    render() {

        return (
            <div>
                <div id='daniela-container'>
                    <h1>Pagina Secreta</h1>
                    <PreguntaComponent
                        pregunta={PREGUNTAS[this.state.numero_pregunta].pregunta}
                        opcion1={PREGUNTAS[this.state.numero_pregunta].opcion1}
                        opcion2={PREGUNTAS[this.state.numero_pregunta].opcion2}
                        opcion3={PREGUNTAS[this.state.numero_pregunta].opcion3}
                        opcion4={PREGUNTAS[this.state.numero_pregunta].opcion4}
                    />
                </div>

            </div>

        )
    }

}

export default DanielaContainer
