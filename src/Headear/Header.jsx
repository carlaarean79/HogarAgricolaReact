import { FaUserCircle } from "react-icons/fa";
import React, { useState } from 'react';
import './Header.css';
import { RiFileSearchFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BiCaretDown } from "react-icons/bi";
function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [talleresVisible, setTalleresVisible] = useState(false);

  const toggleMenu = () => {//aternar Menú
    setMenuVisible(!menuVisible);
    // Ocultar el menú desplegable de talleres al cerrar el menú principal
    setTalleresVisible(false);
  };
  //si menuVisible es true se convierte en false y viceversa 

  const toggleTalleresMenu = () => {
    setTalleresVisible(!talleresVisible);
  };
  //si telleres visible es true se convierte false y viceversa

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
            <Link to='/'><img src='./src/assets/logo.png' alt='logo' /></Link>
            <div className='cuenta'>
              <Link to='cuenta'>CUENTA</Link><FaUserCircle className="icon" />
            </div>
          </div>
        </div>
        <div className={`header-nav ${!menuVisible ? 'visible' : ''}`}>
          <nav>
            <div className='primera'>
              <Link to='/'>HOME</Link>
              <Link to='sobreNosotros'>SOBRE NOSOTROS</Link> {/*Agregar un onClick para manejar el menú desplegable de talleres */}
              
              <div onClick={toggleTalleresMenu} className="talleres">
                TALLERES<BiCaretDown/>
                {talleresVisible && (
                  <div className="submenu-talleres"/* {`submenu-talleres ${!submenuVisible ? 'open' : ''}`} */>
                    <Link to='cocina'>COCINA</Link>
                    <Link to='crochet'>CROCHET</Link>
                    <Link to='macrame'>MACRAMÉ</Link>
                    <Link to='porcelana'>PORCELANA</Link>
                    <Link to='pinturaTela'>PINTURA SOBRE TELA</Link>
                    <Link to='pinturaMadera'>PINTURA SOBRE MADERA</Link>
                    <Link to='reciclado'>RECICLADO</Link>
                    <Link to='peluqueria'>PELUQUERÍA</Link>
                  </div>
                )}
              </div>
            </div>
            <div className='segunda'>
              <Link to='search'>BUSCAR</Link>
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
