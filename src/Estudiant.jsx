function Estudiant({nom = "Invitat", edat = 18, esEstudiant = false}){
    return(
        <div className="estudiant">
            <p>Nom: {nom}</p>
            <p>Edat: {edat}</p>
            <p>Estudiant: {esEstudiant ? "Si": "No"}</p>
        </div>
    );
}


export default Estudiant;