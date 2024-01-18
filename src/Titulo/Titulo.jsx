import React from 'react'
import './Titulo.css'

function TituloCards({texto}) {
  return (
    <div className='titulo'>
      <p>{texto}</p>
    </div>
  )
}

export default TituloCards;