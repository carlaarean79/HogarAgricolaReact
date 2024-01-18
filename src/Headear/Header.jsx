import { FaUserCircle } from "react-icons/fa";
import React, { useState } from 'react';
import './Header.css';
import { RiFileSearchFill } from "react-icons/ri";
import { Link } from "react-router-dom";







function Header() {
  const [menuVisible, setMenuVisible] = useState(false);



  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (

    <>
    <div className="contenedor-total">

      <div className='header'>
        <div className='logo-cuenta'>
          <div className={`nav_toggle ${menuVisible ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
                </div>
          <img src='./src/assets/logo.png' alt='logo'></img>
          <div className='cuenta'>
            <Link to='cuenta' >CUENTA</Link><FaUserCircle className="icon" />
          </div>
        </div>
      </div>
      <div className={`header-nav ${!menuVisible ? 'visible' : ''}`} >
        <nav>
        
           <div className='primera'>
            <Link to='/' >HOME</Link>
            <Link to='sobreNosotros' >SOBRE NOSOTROS</Link>
            <Link to='Talleres' className="talleres">TALLERES</Link>
          </div>
          <div className='segunda'>
            <Link to='search' >BUSCAR</Link>
            <RiFileSearchFill className="icon" />
          </div> 
        </nav>
        <nav>
          <div className="tercera">
            <Link to='cocina'>COCINA</Link>
            <Link to='crochet'>CROCHET</Link>
            <Link to='macrame'>MACRAMÉ</Link>
            <Link to='pinturaTela'>PINTURA SOBRE TELA</Link>
            <Link to='pinturaMadera'>PINTURA SOBRE MADERA</Link>
            <Link to='reciclado'>RECICLADO</Link>
            <Link to='porcelana'>PORCELANA</Link>
            <Link to='peluqueria'>PELUQUERÍA</Link>
          </div>
        </nav>
      
      </div>
    </div>
    </>

  );
}

export default Header;


