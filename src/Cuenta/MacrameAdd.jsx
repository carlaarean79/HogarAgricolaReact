// MacrameAdd.jsx
import React, { useContext } from 'react';
import { ContextTallerMacrame } from '../ContextCards/ContextTallerMacrame';
import './MacrameAdd.css'

const MacrameAdd = (id) => {
    const { addTutorialMacrame } = useContext(ContextTallerMacrame);
    const deleteTutorialCuenta = ()=>{
    const url = `http://localhost:3030/tallerGuardadoCuenta/${id}`;
    fetch(url,{
        method: 'Delete'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ha ocurrido un error al eliminar el tutorial');
        }
        alert('Tutorial eliminado correctamente');
        // Puedes hacer algo adicional después de eliminar el tutorial si lo necesitas
    })
    .catch(error => {
        console.error('Error al eliminar el tutorial:', error);
        alert('Ha ocurrido un error al eliminar el tutorial');
    });
};

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
                        <button className="btn-delete" type='delete' onClick={() => deleteTutorialCuenta(tutorial.id)}>ELIMINAR</button>
                        </div>
                        </div>
                    </div>
                ))}
                </>
            
            
            );
};

            export default MacrameAdd;
