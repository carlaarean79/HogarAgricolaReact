import React, { useContext } from 'react';
import { ContextCards } from '../ContextCards/CardsContext';
 import './Cards.css' 
function CardsRecientes() {
  const tutoriales = useContext(ContextCards);

  return (
    <div className='tutoriales'>
      {tutoriales.map((tutorial) => (
        <div className='cards' key={tutorial.id}>
          <h3>{tutorial.nombre}</h3>
          <img src={tutorial.imagen} alt={tutorial.nombre} />
          <h4>Ver Tutorial</h4>
        </div>
      ))}
    </div>
  );
}

export default CardsRecientes;
