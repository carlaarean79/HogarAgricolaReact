// CardsMacrame.jsx
import React, { useContext, useState } from 'react';
import { ContextTallerMacrame } from '../ContextCards/ContextTallerMacrame';
import './CardsMacrame.css';

const CardsMacrame = () => {
    const { TallerMacrame, addTutorialMacrame, setAddTutorialMacrame } = useContext(ContextTallerMacrame);

    /*  const saveTutorial = (tutorial) => {
         setAddTutorialMacrame([...addTutorialMacrame, tutorial]);
     };
  */
 const url = 'http://localhost:3030/tallerGuardadoCuenta'
    const addData = (tutorial) => {
        
        try {
            // Realiza la solicitud POST al servidor para guardar los datos
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tutorial }), // Envia el valor del input al servidor
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al guardar los datos');
                    }
                })
            } catch (error) {
                console.error('Error al guardar los datos:', error);
            }
            setAddTutorialMacrame([...addTutorialMacrame,tutorial])
            console.log(addTutorialMacrame);
          }
          return (
                        <div className='tutoriales'>
                            {TallerMacrame.map((tutorial) => (
                                <div className="cards-macrame" key={tutorial.id}>
                                    <h3>{tutorial.nombre}</h3>
                                    <img src={tutorial.imagen} alt={tutorial.nombre} />
                                    <div className="container-btn">
                                        <button className='btn-watch'>Ver</button>
                                        <button className='btn-add' onClick={() => addData(tutorial)}>Guardar</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                };

            export default CardsMacrame;
