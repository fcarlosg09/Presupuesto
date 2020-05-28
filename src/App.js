import React, {useState, useEffect} from 'react';
import Pregunta from './Components/Pregunta';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';
import ControlPresupuesto from './Components/ControlPresupuesto';

function App() {
  const [presupuesto, setpresupuesto] = useState(0);
  const [restante, setrestante] = useState(0);
  const [mostrarpregunta, setmostrarpregunta] = useState(true);
  const [gastos, setgastos] = useState([]);
  const [gasto, agregarNuevoGasto] = useState({});
  const [creargasto, setcreargasto] = useState(false);

  useEffect( () => {
    if(creargasto){
      // agrega el nuevo presupuesto
      setgastos([
        ...gastos,
        gasto
      ]);

      //Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidadgasto;
      setrestante(presupuestoRestante);

      //Resetear a false
      setcreargasto(false);
    }    
  }, [gasto, creargasto, gastos, restante]);

  return (
    <div className="App">
      <h1 className="text-white text-center my-4">Gasto Semanal</h1>
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">        
                { mostrarpregunta ? (
                  <Pregunta 
                  setpresupuesto={setpresupuesto}
                  setrestante={setrestante}
                  setmostrarpregunta={setmostrarpregunta}
                />
                ) : 
                (
                  <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <Formulario 
                        agregarNuevoGasto={agregarNuevoGasto}
                        setcreargasto={setcreargasto}
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <Listado
                        key={gastos.id}
                        gastos={gastos}
                      />

                      <ControlPresupuesto 
                        presupuesto={presupuesto}
                        restante={restante}
                      />
                    </div>
                  </div>
                )  
              }
                
              </div>
            </div><hr />
          </div>
          <div className="card-footer h4 text-right">
            CodePic&copy;
          </div>
        </div>
      </div>            
    </div>
  );
}

export default App;
