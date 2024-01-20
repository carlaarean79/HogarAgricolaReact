import React, { useContext } from 'react'
import {ContextTallerMacrame} from '../ContextCards/ContextTallerMacrame'
import './CardsMacrame.css'


function CardsMacrame() {
    const macrame = useContext(ContextTallerMacrame);
  return (
    <div className='tutoriales'>
        {macrame.map((macrame) => (
            <div className="cards-macrame" key={macrame.id}>
                <h3>{macrame.nombre}</h3>
                <img src={macrame.imagen} alt={macrame.nombre} />
                <div className="container-btn">
                <button className='btn-watch'>Ver</button>
                <button className='btn-add'>Guardar</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CardsMacrame;