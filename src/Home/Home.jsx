import React from "react";
import "./Home.css";
function Home() {
  return (
    <header>
      <h1>The Kingdom </h1>
      <nav className="menu">
        <a href="#nosotros" className="sobremi">
          Nosotros
        </a>
        <a href="#creaciones" className="sobremi">
          Creaciones
        </a>
      </nav>
    </header>
  );
}

export default Home;
