import imatge from './assets/drip.jpg';

function Carta(){
    return(
    <div className="carta">
        <img className="imatge" src={imatge}></img>
        <h2 className="titol">David Gelma</h2>
        <p className="text">Aprendiendo React</p>
    </div>
    );
}

export default Carta