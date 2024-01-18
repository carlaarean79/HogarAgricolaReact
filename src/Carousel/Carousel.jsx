import React from 'react'
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Carrusel() {
  return (
    <div className='carrusel'>
        <Carousel className='img-carousel'>
    
        <img src="https://i0.wp.com/www.trenzaduriafraile.cl/wp-content/uploads/2023/02/pexels-photo-5371357-e1678822214918.jpeg?fit=1024%2C576&ssl=1" />
          

        <img  src="https://www.dhresource.com/0x0/f2/albu/g11/M00/4E/03/rBNaFV8WYhCAcBDUAAECSj9ToQs135.jpg" />

           
   
        <img src="https://elcuboarte.com/wp-content/uploads/2019/01/45621524_1786058168169155_4013447759003648000_n.jpg"  />
         
           
        <img src="https://cdn.shopify.com/s/files/1/0400/0904/0038/files/image2_b37a5c4c-20e3-44e9-93d5-0dcf05cb4b0e_600x600.jpg?v=1693599911" />
          
    </Carousel>
    </div>
  );
};

export default Carrusel
