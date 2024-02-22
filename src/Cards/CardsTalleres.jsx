// CardsMacrame.jsx
import React, { useContext, useState } from 'react';
import { TutorialesContext } from '../ContextCards/TutorialesContext';
import './CardsMacrame.css';
import Button from '../Button/Button';

const CardsTalleres = ({tutorial}) => {
    const {  addTutorialMacrame, setAddTutorialMacrame } = useContext(TutorialesContext);

  const inicioSesion = ()=> {
    console.log('debe iniciar sesion para guardar el tutorial');
  }
  
 const url = 'http://localhost:3030/cuenta'
    const addData = (tutorial) => {
        inicioSesion();
        
        try {
            // Realiza la solicitud POST al servidor para guardar los datos
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( tutorial ), // Envia el valor del input al servidor
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
                        
                                <div className="cards-macrame">
                                    <h3>{tutorial.nombre}</h3>
                                    <img src={tutorial.imagen} alt={tutorial.nombre} />
                                    <div className="container-btn">
                                        <Button className='btn-watch' title={'VER'}/>
                                        <Button className='btn-add' onClick={() => addData(tutorial)} title={'GUARDAR'}/>
                                    </div>
                                </div>
                            
                    );
                };

            export default CardsTalleres;
