// MacrameProvider.js
import React, { createContext, useState, useEffect } from 'react';

export const TutorialesContext = createContext({});

export const TutorialProvider = ({ children }) => {
    const url = 'http://localhost:3001/talleres';
    const [Tutorial, SetTutorial] = useState([]);
    const [addTutorialMacrame, setAddTutorialMacrame] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                SetTutorial(data);
                console.log(url);
                console.log(data);
            });
    }, []);
    

    return (
        <TutorialesContext.Provider value={{ Tutorial, addTutorialMacrame, setAddTutorialMacrame, url }}>
            {children}
        </TutorialesContext.Provider>
    );
};
export default TutorialProvider;