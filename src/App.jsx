import Home from './Home/Home';
import Footer from './Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Headear/Header';
import Cuenta from './Cuenta/Cuenta';
import Registro from './Registro/Registro';
import Login from './Registro/Login';
import Tutoriales from './TallerMacrame/Tutoriales';
import AllTalleres from './TallerMacrame/AllTalleres';

const App = ()=> {
  
  return (
    <div>
      <BrowserRouter>
      <Header />
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='registro' element={<Registro />}/>
        <Route path='login' element={<Login/>}/>
         <Route path='cuenta' element={<Cuenta />}/>  
        <Route path='macrame' element={<Tutoriales categoria={'Macramé'} />}/>
        <Route path='crochet' element={<Tutoriales categoria={'Crochet'}/>}/>
        <Route path='PinturaTela' element={<Tutoriales categoria={'Pintura sobre Tela'}/>}/>
        <Route path='PinturaMadera' element={<Tutoriales categoria={'Pintura sobre Madera'}/>}/>
        <Route path='Porcelana' element={<Tutoriales categoria={'Porcelana'}/>}/>
        <Route path='Cocina' element={<Tutoriales categoria={'Cocina'}/>}/>
        <Route path='Reciclado' element={<Tutoriales categoria={'Reciclado'}/>}/>
        <Route path='peluqueria' element={<Tutoriales categoria={'Peluquería'}/>}/>
        <Route path='talleres' element={<AllTalleres/>}/>

      
      </Routes> 
      <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;

