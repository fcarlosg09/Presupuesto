import React, { Fragment } from 'react';
import '../gasto.css';

const Gasto = ({gasto}) => {
    return ( 
        <Fragment>
            <li className="gastos">
                <div className="card">
                    <div className="card-body">
                        <div className="row justify-content-between">
                            <div className="col-7">
                                {gasto.nombregasto}
                            </div>
                            <div className="col-3">
                            <span className="gasto">$ {gasto.cantidadgasto}</span>
                            </div>
                        </div>                  
                    </div>
                </div>
                
            </li>
        </Fragment>
     );
}
 
export default Gasto;