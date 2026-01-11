import Home from "./Home/Home.jsx";
import Creacion from "./sobre/Creacion.jsx";
import Nosotros from "./sobre/Nosotros.jsx";
import './App.css';
function App() {
  return (
    <div>
      <Home />
      <nav>
        <a href="#nosotros">Nosotros</a>
      </nav>
      <Creacion/>
      <Nosotros />
    </div>
  );
}

export default App;
