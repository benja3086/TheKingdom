import React from "react";
import Home from "./Home/Home.jsx";
import Creacion from "./sobre/Creacion.jsx";
import SobreNosotros from "./sobre/Nosotros.jsx";
import Carousel from "./sobre/carrousel.jsx";
import './App.css';
function App() {
  return (
    <div>
      <Home />
      <Carousel/>
      <SobreNosotros />
    </div>
  );
}

export default App;