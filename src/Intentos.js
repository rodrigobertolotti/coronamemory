import { render } from "react-dom"
import React from 'react';

const Intentos = props => (
    <div className="boxIntentos">
        <p className="texto" >Cantidad de intentos</p>
        <p className="puntaje">{props.cantidad}</p>
    </div>
)

export default Intentos;