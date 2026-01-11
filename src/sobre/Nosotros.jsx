import React from 'react';

import './Nosotros.css'; 

const Nosotros = () => {
  return (
<div>
    <section id="nosotros">
    <h2>Sobre nosotros</h2>
    <h4>Somos un grupo de jovenes que salimos a las calles de tucuman a compartir el evangelio</h4>
    <a
      href="https://www.instagram.com/thekingdom.arg/" 
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      >
     <button>
        <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" className='ig' alt="Instragram" />
     </button>
    </a>
         </section>
    </div>
  );
};

export default Nosotros;