import React, {Fragment, useState } from 'react';
import Error from './Error'

const Pregunta = ({setpresupuesto, setrestante, setmostrarpregunta}) => {

    const [cantidad, setcantidad] = useState(0);
    const [error, seterror] = useState(false);

    const definirPresupuesto = (e) =>{
        setcantidad(parseInt(e.target.value), 10);
    }

    const agregarPresupuesto = (e) =>{
        e.preventDefault();
                
        //Validar
        if(cantidad < 1 || isNaN(cantidad)){
            seterror(true);
            return;
        }
        seterror(false);

        //Si se pasa la validación
        setpresupuesto(cantidad);
        setrestante(cantidad);
        setmostrarpregunta(false);
    }

    return ( 
        <Fragment>      
            <form
                onSubmit={agregarPresupuesto}
            >   
                { error ? <Error mensaje="Hubo un error, vuelve a intentarlo" /> : null }
                
                        <h4 className="text-center">Coloca tu presupuesto</h4>                    
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Coloca tu presupuesto"
                                onChange={definirPresupuesto}
                            />
                        </div>
                        <input 
                            type="submit"
                            className="btn btn-block btn-outline-danger"
                            value="Definir Presupuesto"
                        />
                   
            </form>
        </Fragment>
     );
}
 
export default Pregunta;