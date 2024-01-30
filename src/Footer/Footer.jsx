import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { PiInstagramLogoFill, PiFacebookLogoFill } from "react-icons/pi";

function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="logo">
          <Link to='/'><img src='./src/assets/logo.png' /></Link>
        </div>

        <div className="primeros-enlaces">
          <Link to='sobreNosotros' >SOBRE NOSOTROS</Link>
          <Link to='Talleres' >TALLERES</Link>
          <Link to='buscar' >BUSCAR</Link>
          <Link to='cuenta' >CUENTA</Link>
        </div>
        <div className="segundos-enlaces">
          <Link to='crochet' >TEJIDO</Link>
          <Link to='reciclado' >RECICLADO</Link>
          <Link to='pinturaMadera' >PINTURA SOBRE MADERA</Link>
          <Link to='pinturaTela'>PINTURA SOBRE TELA</Link>
        </div>
        <div className="terceros-enlaces">
          <Link to='macrame' >MACRAMÉ</Link>
          <Link to='porcelana' >PORCELANA</Link>
          <Link to='cocina' >COCINA</Link>
          <Link to='peluqueria' >PELUQUERÍA</Link>
        </div>
        <div className='redes'>
          <div className="icons-redes">
            <PiInstagramLogoFill className='icono-redes'/>
            <PiFacebookLogoFill  className='icono-redes'/>
          </div>
          <p>SEGUINOS EN NUESTRAS REDES</p>
        </div>
        <div className='copy-p'>
             <p>&copy; Carla Areán 2024 </p> 
        </div>
       
      </div>
  
    </footer>
  );
}

export default Footer;
