import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './Components/Skills';
import { Mensajes } from './Components/Mensajes';
import { Credito } from './Components/Credito';
import { Bolivia } from './Components/Bolivia';
import { ContentHome } from './Components/ContentHome';
import { Arte } from './Components/Arte';
import { Ciencia } from './Components/Ciencia';
import { Historia } from './Components/Historia';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Mensajes/>
      <Credito/>
      <Bolivia/>
      <ContentHome/>
      <Arte/>
      <Ciencia/>
      <Historia/>

    </div>
  );
}

export default App;
