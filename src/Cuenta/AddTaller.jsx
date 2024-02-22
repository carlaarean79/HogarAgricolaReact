// MacrameAdd.jsx
import React, { useContext } from 'react';
import { TutorialesContext } from '../ContextCards/TutorialesContext';
import './MacrameAdd.css';
import Button from '../Button/Button';
import Imagen from '../Imagen/Imagen';

const AddTaller = () => {
    const { addTutorialMacrame } = useContext(TutorialesContext);

    return (
        <>
            {addTutorialMacrame && addTutorialMacrame.map((tutorial) => (
                <div className="container-cards-add" key={tutorial.id}>
                    <Imagen src={tutorial.imagen} alt={tutorial.nombre} />
                    <div className="texto">
                        <h2>{tutorial.nombre}</h2>
                        <p>{tutorial.descripcion}</p>
                        <div className="buttons">
                            <Button className='btn-see' title='VER' />
                            <Button className='btn-delete' title='ELIMINAR' />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default AddTaller;
