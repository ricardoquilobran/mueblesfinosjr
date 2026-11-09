import './styles/main.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ComoTrabajamos from "./components/ComoTrabajamos";
import Whatsapp from "./components/Whatsapp";
import ScrollTop from "./components/ScrollTop";


function App() {

    


  return (
    <>
      <Header />
      <Hero />
      <Nosotros />
      <Servicios />
      <ComoTrabajamos />
      <Galeria />
      <Contacto />     
      <Footer />
      <Whatsapp />
      <ScrollTop />
      


    </>
  );
}

export default App;