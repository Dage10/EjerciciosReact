import styles from './Button.module.css'
function Button(){

    /*
    let comptador = 0;
    const eventClick = (nom) => {
        if(comptador < 3){
            comptador++;
            console.log(`${nom} has clicat ${comptador} vegades`)
        }
        else{
            console.log(`${nom} para de clickarme!`)
        }
    }
    */

    //const eventClick = (e) => console.log(e);

    const eventClick = (e) => e.target.textContent = "Patata";

    //const eventClick = () => console.log("Hola");
    //const eventClick2 = (nom) => console.log(`${nom} para de clickar`);
    return(
        <button className={styles.Boto} onClick={(e) => {eventClick(e)}}>Clica</button>
    );
}
console.log(styles);

export default Button;