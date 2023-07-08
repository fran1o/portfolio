import './App.css';
import Home from './componentes/home/home';
import NavBar from './componentes/navbar/navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Proyectos from './componentes/proyectos/proyectos';
import Contacto from './componentes/contacto/contacto';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/portfolio' element= {<Home /> } />
          <Route exact path='/proyectos' element={<Proyectos />} />
          <Route exact path='/contacto' element={<Contacto />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
