import React from "react";
import "./Nosotros.css";

const SobreNosotros = () => {
  return (
    <section id="nosotros">
      <h2>Sobre nosotros</h2>
      <h4>
        Somos un grupo de jóvenes que salimos a las calles de Tucumán a
        compartir el evangelio
      </h4>
      <nav className="socials">
        <a
          href="https://www.instagram.com/thekingdom.arg/"
          target="_blank"
          rel="noopener noreferrer"
          className="ig"
        >
          <img
            className="igimg"
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.tiktok.com/@thekingdom.arg"
          target="_blank"
          rel="noopener noreferrer"
          className="tikTok"
        >
          <img className="tiktokimg" src="/tiktok.svg" alt="TikTok" />
        </a>
      </nav>
    </section>
  );
};

export default SobreNosotros;
