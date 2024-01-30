// CardsMacrame.jsx
import React, { useContext } from 'react';
import { ContextTallerMacrame } from '../ContextCards/ContextTallerMacrame';
import './CardsMacrame.css';

const CardsMacrame = () => {
    const { TallerMacrame, addTutorialMacrame, setAddTutorialMacrame } = useContext(ContextTallerMacrame);

    const saveTutorial = (tutorial) => {
        setAddTutorialMacrame([...addTutorialMacrame, tutorial]);
    };

    return (
        <div className='tutoriales'>
            {TallerMacrame.map((tutorial) => (
                <div className="cards-macrame" key={tutorial.id}>
                    <h3>{tutorial.nombre}</h3>
                    <img src={tutorial.imagen} alt={tutorial.nombre} />
                    <div className="container-btn">
                        <button className='btn-watch'>Ver</button>
                        <button className='btn-add' onClick={() => saveTutorial(tutorial)}>Guardar</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardsMacrame;
