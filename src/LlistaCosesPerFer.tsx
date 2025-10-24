import React, {useState} from 'react';

function LlistaCosesPerFer(){

    const [tasques, setTasques] = useState<string[]>([]);
    const [novaTasca, setNovaTasca] = useState<string>("");

    function handleTascaChange(event: React.ChangeEvent<HTMLInputElement>){
        setNovaTasca(event.target.value);
    }

    function handleAfegirTasca(){
        if(novaTasca.trim() !== ""){
            setTasques([...tasques, novaTasca.trim()]);
            setNovaTasca("");
        }
    }

    function handleEliminarTasca(index: number){
        const tasquesActualitzades = tasques.filter((_, i) => i !== index);
        setTasques(tasquesActualitzades);
    }

    function handleMoureTascaAmunt(index: number){
        if(index > 0){
            const tasquesActualitzades = [...tasques];
            [tasquesActualitzades[index], tasquesActualitzades[index-1]] =
            [tasquesActualitzades[index-1], tasquesActualitzades[index]];
            setTasques(tasquesActualitzades);
        }
    }

    function handleMoureTascaAvall(index: number){

        if(index < tasques.length - 1){
            const tasquesActualitzades = [...tasques];
            [tasquesActualitzades[index], tasquesActualitzades[index+1]] =
            [tasquesActualitzades[index+1], tasquesActualitzades[index]];
            setTasques(tasquesActualitzades);
        }
    }



    return (<div className="llista-coses-per-fer">
             <h1 className="llista-coses-per-fer-titol">Llista de Coses Per Fer</h1>
                <input type="text" value={novaTasca} onChange={handleTascaChange} placeholder="Introdueix una tasca"/>
                <button onClick={handleAfegirTasca} className="afegir">Afegir Tasca</button>
                <ul>
                      {tasques.map((tasca:string, index:number) => (
                        <li key={index}>
                            {tasca}
                            <div className="botons-tasca">
                                <button onClick={() => handleEliminarTasca(index)} className="eliminar">Eliminar</button>
                                <button onClick={() => handleMoureTascaAmunt(index)} className="moure-amunt">⬆️</button>
                                <button onClick={() => handleMoureTascaAvall(index)} className="moure-avall">⬇️</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    );
}

export default LlistaCosesPerFer;