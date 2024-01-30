// MacrameAdd.jsx
import React, { useContext } from 'react';
import { ContextTallerMacrame } from '../ContextCards/ContextTallerMacrame';
import './MacrameAdd.css'

const MacrameAdd = () => {
    const { addTutorialMacrame } = useContext(ContextTallerMacrame);

    return (
     
           <>
                {addTutorialMacrame.map((tutorial) => (
                    <div className="container-cards-add" key={tutorial.id}>
                        <img src={tutorial.imagen} alt={tutorial.nombre} />
                        <div className="texto">
                        <h2>{tutorial.nombre}</h2>
                        <p>{tutorial.descripcion}</p>
                        <div className="buttons">
                        <button className="btn-see">VER</button>
                        <button className="btn-delete">ELIMINAR</button>
                        </div>
                        </div>
                    </div>
                ))}
                </>
            
            
            );
};

            export default MacrameAdd;
