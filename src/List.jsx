function List({category = "Categoria",items = []}){
    /*
    const fruites = [{id:1,nom:"poma",calorias:95},
                     {id:2,nom:"mandarina",calorias:45},
                     {id:3,nom:"melocoto",calorias:105},
                     {id:4,nom:"melo",calorias:37}];
    */

    //fruites.sort((a,b)=> a.nom.localeCompare(b.nom)); //Alfabetic
    //fruites.sort((a,b)=> a.nom.localeCompare(a.nom)); //Alfabetic invers
    //fruites.sort((a,b)=> a.calorias - b.calorias); //Numeric
    //fruites.sort((a,b)=> b.calorias - a.calorias); //Numeric invers

    //const pocaCalFruita = fruites.filter(fruita => fruita.calorias < 100);
    //const MoltaCalFruita = fruites.filter(fruita => fruita.calorias >= 100);



    const llistarElements = items.map(item => <li key={item.id}>{item.nom}: &nbsp;<b>{item.calorias}</b></li>)

    

    return(<>
                <h3 className="llista-categoria">{category}</h3>
                <ol className="llistar-items">{llistarElements}</ol>
            
           </>);
}

export default List