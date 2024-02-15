import React, { createContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export const UsersContext = createContext({});

export  const UsersContextProvider= ({children})=> {
const [data, setData] = useState({user:[], activeUser:{user:{user:'login'}}, administrator: false});
const [auth, setAuth] = useState({});
const url_users = 'http://localhost:3030/users';

useEffect(() => {
  fetch(url_users)
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(users => {
      let activeUser = { user: users[0], administrator: false }
      setData(prev => ({ ...prev, user: users, activeUser: activeUser }));
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      Swal.fire('Error', 'Ha ocurrido un error al obtener los datos. Intente nuevamente', 'error');
    });
}, []);


  return (
   <UsersContext.Provider value={{data, setData, setAuth}}>
    {children}
   </UsersContext.Provider>
  )
}

