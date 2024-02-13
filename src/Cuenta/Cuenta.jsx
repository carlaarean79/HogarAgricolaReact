import React, { useContext } from 'react'
import { ContextTallerMacrame } from '../ContextCards/ContextTallerMacrame'
import MacrameAdd from './MacrameAdd';
import './Cuenta.css'
import Perfil from '../Perfil/Perfil';

const Cuenta= () => {

  return  (
    <>

    <div className='cuenta-containerAll'>
      <div className='bienvenido'>
      <h1>Bienvenido </h1>
      </div>
      <div className="containerAll-perfil-tutorial">
       <Perfil/>
      <div className='container-tutorial'>
      <h1>MIS TUTORIALES</h1>
        <MacrameAdd/>
      </div>
      </div>
       
    </div>
    </>
  ) 
      
}

export default Cuenta;