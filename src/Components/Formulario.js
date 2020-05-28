import React, { Fragment, useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({agregarNuevoGasto,setcreargasto}) => {

    const [nombregasto, setnombregasto] = useState('');
    const [cantidadgasto, setcantidadgasto] = useState(0);
    const [error, seterror] = useState(false);

    const guardarNombre = (e) =>{
        setnombregasto(e.target.value);
    }

    const guardarCantidad = (e) =>{
        setcantidadgasto(parseInt(e.target.value));
    }

    const agregarGasto = (e) =>{
        e.preventDefault();

        //validar
        if(cantidadgasto < 1 || isNaN(cantidadgasto) || nombregasto.trim() === ''){
            seterror(true);
            return;
        }
        seterror(false);

        //Construir el gasto
        const gasto = {
            nombregasto,
            cantidadgasto,
            id: shortid.generate()
        }

        //Pasar el gasto al componente principal
        agregarNuevoGasto(gasto);
        setcreargasto(true);
        //Resetear Form
        setnombregasto('');
        setcantidadgasto(0);

    }

    return ( 
        <Fragment>
            <h4 className="text-center">Agrega tus gastos aquí</h4>
            {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" /> : null}
            <form
                onSubmit={agregarGasto}
            >            
                <div className="form-group">
                    <label htmlFor="txtNombreGasto">Nombre Gasto</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Ej. Transporte"
                        name="txtNombreGasto"
                        value={nombregasto}
                        onChange={guardarNombre}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="txtCantidadGasto">Cantidad Gasto</label>
                    <input 
                        type="number"
                        className="form-control"
                        placeholder="Ej. 300"
                        name="txtCantidadGasto"
                        value={cantidadgasto}
                        onChange={guardarCantidad}
                    />
                </div>
                <input 
                    type="submit"
                    className="btn btn-block btn-primary"
                    value="Agregar Gasto"
                />
            </form>
        </Fragment>
     );
}
 
export default Formulario;