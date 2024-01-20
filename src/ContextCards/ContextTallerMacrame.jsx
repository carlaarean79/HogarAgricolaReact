import React from 'react'
import { createContext, useState, useEffect } from 'react'


export const ContextTallerMacrame = createContext({});

export const MacrameProvider = ({children}) =>  {
    const url = 'http://localhost:3030/macrame';
    const [TallerMacrame, SetTallerMacrame]= useState([]);

useEffect(()=>{
fetch(url)
.then(resp => resp.json())
.then(data => {
    SetTallerMacrame(data)
    console.log(url);
    console.log(data);
});

},[]);

  return (

 <ContextTallerMacrame.Provider value={TallerMacrame}>
    {children}
 </ContextTallerMacrame.Provider>
  )
}

export default MacrameProvider;