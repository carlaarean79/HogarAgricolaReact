import React, { createContext, useState, useEffect } from "react";

export const ContextCards = createContext({});


export const UseProvider = ({children}) => {
    const url = '  http://localhost:3030/tutoriales'
    const [tutoriales, setTutoriales] = useState([]);//useSate debe ser usado dentro de una funcion- no puede ser usado dentro de useEffect
    useEffect(() => {
      fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setTutoriales(data)
        console.log(url);
        console.log(data);
      });
    }, []);

    return (
      <ContextCards.Provider value={tutoriales} >
          {children}
          </ContextCards.Provider>
    )
  }


export default UseProvider;