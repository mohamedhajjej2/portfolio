import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarr from './compontens/Navbarr';
import Home from './compontens/Home';
import { Route, Routes } from 'react-router-dom';
import About from './compontens/About';
import Contact from './compontens/Contact';
import Portfolio from './compontens/Portfolio';
import Footer from './compontens/Footer';

function App() {
  return (
    <div>
      <Navbarr/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/portfolio" element={ <Portfolio/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    
      <Footer/>
    </div>
  );
}

export default App;
