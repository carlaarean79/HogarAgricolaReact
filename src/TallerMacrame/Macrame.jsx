import React from 'react'
import CardsMacrame from '../Cards/CardsMacrame'
import Banner from '../Banner/Banner'
import './Macrame.css'

const Macrame = ()=> {
  return (
    <div className='container-sección-macrame'>
      <div className="encabezado-macrame">
        <img src="https://i0.wp.com/www.trenzaduriafraile.cl/wp-content/uploads/2023/02/pexels-photo-5371357-e1678822214918.jpeg?fit=1024%2C576&ssl=1" alt="" />
        <Banner titulo={'Macramé'} />
      </div>
      <div className="container-cards-macrame">
        <CardsMacrame />
      </div>
    </div>
  )
}

export default Macrame