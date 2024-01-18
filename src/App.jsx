import React from 'react';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Headear/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
       <Routes>
        <Route path='/' element={<Home />}/>
       {/*  <Route path='Talleres' element={<Talleres/>}/>
        <Route path='sobreNosotros' element={<SobreNosotros/>}/>
        <Route path='Cuenta' element={<Cuenta/>}/> */}
      </Routes> 
      <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;

