import React, { useContext } from 'react'
import { ContextTallerMacrame } from '../ContextCards/ContextTallerMacrame'
import MacrameAdd from './MacrameAdd';
import './Cuenta.css'

const Cuenta= () => {
    const {addTutorialMacrame} = useContext(ContextTallerMacrame);

  return  (
    <>

    <div className='cuenta-containerAll'>
      <div className='bienvenido'>
      <h1>Bienvenido </h1>
      </div>
      <div className="containerAll-perfil-tutorial">
      <div className="container-perfil">
        <h1>PERFIL</h1>
        <div className='item-perfil-usuario'>
        <p>NOMBRE</p>
        <p>APELLIDO</p>
        <p>EMAIL</p>
        <p>CONTRASEÑA</p>
        </div>
      </div>
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