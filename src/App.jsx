import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Menjar from './Menjar.jsx';
import Carta  from './Carta.jsx';
import Button from './Button/Button.jsx';
import Estudiant from './Estudiant.jsx';
import AgraimentUsuari from './AgraimentUsuari.jsx';
import List from './List.jsx';
import MiComponente from './MiComponente.tsx';
import Comptador from './Comptador.tsx';
import ColorPicker from './ColorPicker.jsx';
import LlistaCosesPerFer from './LlistaCosesPerFer.tsx';
import RellotgeDigital from './RellotgeDigital.tsx';
import StopWatch from './StopWatch.tsx';

function App() {

  const fruites = [{id:1,nom:"poma",calorias:95},
                     {id:2,nom:"mandarina",calorias:45},
                     {id:3,nom:"melocoto",calorias:105},
                     {id:4,nom:"melo",calorias:37}];

  const vegetals = [{id:5,nom:"patatas",calorias:95},
                     {id:6,nom:"broccoli",calorias:45},
                     {id:3,nom:"api",calorias:105},
                     {id:4,nom:"enciam",calorias:37}];
                     
  
  return (
    <>
      <Header/>
      <Menjar/>
      <Carta/>
      <AgraimentUsuari estaLoguejat={true}/>
      <Button/>
      {fruites.length > 0  && <List items={fruites} category="Fruites"/>}
      {vegetals.length > 0 && <List items={vegetals} category="Vegetals"/>}
      <MiComponente/>
      <Comptador/>
      <LlistaCosesPerFer/>
      <RellotgeDigital/>
      <StopWatch/>
      <Estudiant nom="David Gelma" edat={30} esEstudiant={true}/>
      <ColorPicker/>
      <Footer/>
    </>
  )
}

export default App
