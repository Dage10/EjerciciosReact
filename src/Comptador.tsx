import React, {useState} from 'react';

function Comptador(){

    const [comptador,setComptador] = useState(0);

    const incrementar = () => {
        setComptador(comptador + 1);
    }

    const decrementar = () => {
        setComptador(comptador - 1);
    }

    const resetear = () => {
        setComptador(0);
    }

    return(<div className="comptador-contenidor">
                <p className="mostrar-comptador">{comptador}</p>
                <button className="comptador-boto" onClick={decrementar}>Decrementar</button>
                <button className="comptador-boto" onClick={resetear}>Resetear</button>
                <button className="comptador-boto" onClick={incrementar}>Incrementar</button>
           </div>)

}

export default Comptador