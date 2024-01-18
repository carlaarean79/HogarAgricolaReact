import React from 'react';
import './Home.css'
import Carrusel from '../Carousel/Carousel';
import CardsRecientes from '../Cards/Cards';
import Banner from '../Banner/Banner';
import TituloCards from '../Titulo/Titulo';
function Home() {
  return (
    <div className='container-home'>
      <div className='carrusel-container'>
      <Carrusel/>
      <Banner titulo={'Hogar Agrícola'} subtitulo={'El hogar del bricolage'}/>
      <TituloCards texto={'AGREGADOS RECIENTEMENTE'}/>
      </div>
      <div className="cards-container">
           <CardsRecientes/>
      </div>
         </div>
  );
}

export default Home;
