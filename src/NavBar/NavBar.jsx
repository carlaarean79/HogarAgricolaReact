import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { RiFileSearchFill } from "react-icons/ri";


function Navbar() {
  return (
    <>
      <div className='container-gral-navBar'>
        <div className='link'>
          <Link to='/' >HOME</Link>
          <Link to='Talleres' >SOBRE NOSOTROS</Link>
          <Link to='Talleres' >TALLERES</Link>
        </div>
        <div className='search'>
          <Link to='search' >BUSCAR</Link>
          <RiFileSearchFill />
        </div>
      </div>
    </>
  )
}

export default Navbar;