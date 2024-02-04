import React, { useState } from 'react';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Headear/Header';
import Macrame from './TallerMacrame/Macrame';
import Cuenta from './Cuenta/Cuenta';
import Registro from './Registro/Registro';
const App = ()=> {
  
  return (
    <div>
      <BrowserRouter>
      <Header />
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='registro' element={<Registro />}/>
         <Route path='cuenta' element={<Cuenta />}/>  
        <Route path='macrame' element={<Macrame/>}/>
      </Routes> 
      <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;

