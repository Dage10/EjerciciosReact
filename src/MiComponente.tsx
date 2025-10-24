import React,{createContext,useEffect, useState,useRef} from 'react';
import Component2 from './Component2';

type Cotxe = {
        any: number;
        marca: string;
        model: string;
}

export const UserContext = createContext("David Gelma");

function MiComponente(){
    const [nom,setNom] = useState("");

    const[edat,setEdat] = useState(0);

    const[esEmpleat,setEsEmpleat] = useState(false);
    
    //OnChange Event handler

    const [nom2,setNom2] = useState("Invitat");
    const [quantitat,setQuantitat] = useState(0);
    const [comentari,setComentari] = useState("");
    const [pagament,setPagament] = useState("");
    const [enviament,setEnviament] = useState("");

    //UPDATE Functions

    const[count,setCount] = useState(0);

    function increment(){

        //UPDATE
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }

    function decrement(){
        setCount(count => count - 1);
        setCount(count => count - 1);
        setCount(count => count - 1);
    }

    function reset(){
        setCount(0);
    }


    function handleNomCambi(event: React.ChangeEvent<HTMLInputElement>){
        setNom2(event.target.value);
    }

    
    function handleQuantitatCambi(event: React.ChangeEvent<HTMLInputElement>){
        setQuantitat(Number(event.target.value));
    }

    function handleComentariCambi(event: React.ChangeEvent<HTMLTextAreaElement>){
        setComentari(event.target.value);
    }

    function handlePagamentCanvi(event: React.ChangeEvent<HTMLSelectElement>){
        setPagament(event.target.value);
    }

    function handleEnviamentCanvi(event: React.ChangeEvent<HTMLInputElement>){
        setEnviament(event.target.value);
    }

    const updateNom = () => {
       setNom("David Gelma");

    }

    const incrementarEdat = () => {
        setEdat(edat + 1);
    }

    const cambiarEstatEmpleat = () => {
        setEsEmpleat(!esEmpleat);
    }

    //UPDATE OBJECTS

    const [cotxe,setCotxe] = useState({any: 2025,
                               marca: "Ferrari",
                               model: "Mustang"});

                               

    function handleAnyCambi(event: React.ChangeEvent<HTMLInputElement>){
       setCotxe(cotxe => ({ ...cotxe, any: Number(event.target.value) }));
    }   
    function handleMarcaCambi(event: React.ChangeEvent<HTMLInputElement>){
        setCotxe(cotxe => ({ ...cotxe, marca: event.target.value }));
    }                        

    function handleModelCambi(event: React.ChangeEvent<HTMLInputElement>){
        setCotxe(cotxe => ({ ...cotxe, model: event.target.value }));
    }

    //UPDATE ARRAYS STATE

    const [fruites,setFruites] = useState(["Manca","Pera","Poma"]);
    
    function handleAfegirFruita(){
        const novaFruitaInput = document.getElementById("novaFruita") as HTMLInputElement;
        const novaFruita = novaFruitaInput.value;
        setFruites([...fruites,novaFruita]);
        novaFruitaInput.value = "";
    }
    function handleEliminarFruita(index : number){
        setFruites(fruites.filter((_,i) => i !== index));
    }

    //UPDATE ARRAYS OF OBJECTS STATE
    

    const [cotxes,setCotxes] = useState<Cotxe[]>([]);
    const [cotxeAny,setCotxeAny] = useState(new Date().getFullYear());
    const [cotxeMarca,setCotxeMarca] = useState("");
    const [cotxeModel,setCotxeModel] = useState("");

    function handleAfegirCotxe(){
        const nouCotxe = {any: cotxeAny,
                           marca: cotxeMarca,
                           model: cotxeModel};
        setCotxes([...cotxes,nouCotxe]);
        setCotxeAny(new Date().getFullYear());
        setCotxeMarca("");
        setCotxeModel("");
    }

    function handleEliminarCotxe(index : number){
        setCotxes(cotxes.filter((_,i) => i !== index));
    }

    function handleAnyCambiCotxe(event: React.ChangeEvent<HTMLInputElement>){
        setCotxeAny(Number(event.target.value));
    }

    function handleMarcaCambiCotxe(event: React.ChangeEvent<HTMLInputElement>){
        setCotxeMarca(event.target.value);
    }

    function handleModelCambiCotxe(event: React.ChangeEvent<HTMLInputElement>){
        setCotxeModel(event.target.value);
    }

    //Use Effect
    const [comptadorUseEffect,setComptadorUseEffect] = useState(0);
    const [color,setColor] = useState("green");

    useEffect(() => {
        document.title = `Comptador: ${comptadorUseEffect} color: ${color}`;
    }, [comptadorUseEffect, color]);

    function incrementarComptadorUseEffect(){
        setComptadorUseEffect(comptador => comptador + 1);
    }

    function substreureComptadorUseEffect(){
        setComptadorUseEffect(comptador => comptador - 1);
    }

    function cambiarColor(){
        setColor(color === "green" ? "red" : "green");
    }

    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize",handleResize);
        console.log("Event Listener afegit");

        return () => {
            window.removeEventListener("resize",handleResize);
            console.log("Event Listener eliminat");
        }
    },[]);

    useEffect(() => {
        document.title = `Width: ${width} Height: ${height}`;
    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    //Use context

    const [userName,setUserName] = useState("David Gelma");

    //Use Ref

    const ref = useRef(0);
    const inputref = useRef<HTMLInputElement>(null);

    console.log(ref);

    useEffect(() => {
        console.log("El component s'ha renderitzat");
    }, []);

    function handleClick(){
        ref.current = ref.current + 1;
        console.log(ref.current);
        if (inputref.current) {
            inputref.current.focus();
            inputref.current.style.backgroundColor = "yellow";
        }
    }


    return(<div>
                <p>Nom: {nom}</p>
                <button onClick={updateNom}>Set nom</button>

                <p>Edat: {edat}</p>
                <button onClick={incrementarEdat}>Incrementar Edat</button>

                <p>Esta empleat?: {esEmpleat ? "Si" : "No"}</p>
                <button onClick={cambiarEstatEmpleat}>Cambiar estat</button>

                <input value={nom2} onChange={(handleNomCambi)}></input>
                <p>Nom: {nom2}</p>

                <input value={quantitat} onChange={(handleQuantitatCambi)} type="number"></input>
                <p>Quantitat: {quantitat}</p>
                 
                <textarea value={comentari} onChange={handleComentariCambi}
                placeholder="Introdueix un comentari" />
                <p>Comentari: {comentari}</p>

                <select value={pagament} onChange={handlePagamentCanvi}>
                    <option value="">Selecciona una opcio</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">GiftCard</option>
                </select>
                <p>Pagament: {pagament}</p>

                <label>
                    <input type="radio" value="Pick up" 
                    checked={enviament === "Pick up"}
                    onChange={handleEnviamentCanvi}
                    ></input>
                    Pick Up
                </label>
                <br></br>
                <label>
                    <input type="radio" value="Delivery" 
                    checked={enviament === "Delivery"}
                    onChange={handleEnviamentCanvi}
                    ></input>
                   Delivery
                </label>
                <p>Enviament: {enviament}</p>
                <p>Comptador: {count}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>Decrement</button>

                <p>El teu cotxe preferit es: {cotxe.any} {cotxe.marca} {cotxe.model}</p>
                <input type="number" value={cotxe.any} onChange={handleAnyCambi}/><br></br>
                <input type="text" value={cotxe.marca} onChange={handleMarcaCambi}/><br></br>
                <input type="text" value={cotxe.model} onChange={handleModelCambi}/><br></br>

                <h2>Fruites:</h2>
                <ul>
                    {fruites.map((fruita,index) => <li key={index} onClick={() => handleEliminarFruita(index)}>{fruita}</li>)}
                </ul>
                <input type="text" placeholder="Introdueix un nom d'una fruita" id="novaFruita"></input>
                <button onClick={handleAfegirFruita}>Afegir fruita</button>

                <h2>Llista de Objectes Cotxes</h2>
                <ul>
                    {cotxes.map((cotxe,index) =>
                        <li key={index} onClick={() => handleEliminarCotxe(index)}>
                            {cotxe.any} {cotxe.marca} {cotxe.model}
                        </li>
                    )}
                </ul>

                <input type="number" value={cotxeAny} onChange={handleAnyCambiCotxe}/><br></br>
                <input type="text" value={cotxeMarca} onChange={handleMarcaCambiCotxe} placeholder="Introdueix una marca"/><br></br>
                <input type="text" value={cotxeModel} onChange={handleModelCambiCotxe} placeholder="Introdueix un model"/><br></br>
                <button onClick={handleAfegirCotxe}>Afegir Cotxe</button>

                <p style={{color: color}}>Comptador Use Effect: {comptadorUseEffect}</p>
                <button onClick={incrementarComptadorUseEffect}>Incrementar Comptador</button>
                <button onClick={substreureComptadorUseEffect}>Substreure Comptador</button>
                <button onClick={cambiarColor}>Cambiar Color</button>

                <p>Window height: {height}</p>
                <p>Window width: {width}</p>

                <h1>Primer component</h1>
                <h2>{`Hola ${userName}`}</h2>
                <UserContext.Provider value={userName}>
                    <Component2/>
                </UserContext.Provider>

                <button onClick={handleClick}>Click me</button>
                <input ref={inputref}/>
           </div>
           )
}

export default MiComponente