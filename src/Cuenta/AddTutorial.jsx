import React from 'react'
import { useContext } from 'react'
import { ContextTallerMacrame } from '../ContextCards/ContextTallerMacrame'


const AddTutorial = () => {
    const {addMacrameCuenta} = useContext(ContextTallerMacrame);
 

  return (
        <div className='container-tutorial'>
            {addMacrameCuenta.map((tutorial) => {
                return (
                    <div className='card-tutorial' key={tutorial.id}>
                        <img className='img-macrame' src={tutorial.imagen} />
                        <h3 className='title'>{tutorial.nombre}</h3>
                        <button className='btn-see'>Ver</button>
                        <button className='btn-Delete' >Eliminar</button>
                    </div>
                );
            })}
        </div>
    );
}

export default AddTutorial