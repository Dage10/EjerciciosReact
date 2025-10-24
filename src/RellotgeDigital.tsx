import React, {useEffect, useState} from 'react';

function RellotgeDigital() {

    const [tempsActual, setTempsActual] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTempsActual(new Date())
        },1000);

        return () => {
            clearInterval(intervalId);
        }

    },[]);

    return (
        <div className="rellotge-digital-contenidor"> 
            <div className="rellotge-digital">
                <span>{tempsActual.toLocaleTimeString()}</span>
            </div>
        </div>
    );

}

export default RellotgeDigital;