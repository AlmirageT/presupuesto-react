import React, {Fragment, useState} from 'react';
import Error from './Error'
import PropTypes from 'prop-types';

const Pregunta = ({guardarRestante,guardarPresupuesto,actualizaPregunta}) =>{

    //definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //funcion que lee el presupuesto

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //submit para definir presupuesto
    const agregarPresupuesto = e => {
        //prevenir reload
        e.preventDefault();
        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        //si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizaPregunta(false);

    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null }
            <form 
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    name="cantidad"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}

Pregunta.propType = {
    guardarRestante: PropTypes.func.isRequired,
    guardarPresupuesto: PropTypes.func.isRequired,
    actualizaPregunta: PropTypes.func.isRequired
}

export default Pregunta;