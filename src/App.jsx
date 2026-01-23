import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";

import Home from "./componentes/secciones/Home";
import About from "./componentes/secciones/About";
import Cursos from "./componentes/secciones/Cursos";
import Contacto from "./componentes/secciones/Contacto";
import Login from "./componentes/secciones/Login";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
