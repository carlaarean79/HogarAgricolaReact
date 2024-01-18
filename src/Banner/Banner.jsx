import React from 'react'
import './Banner.css';

function Banner({titulo,subtitulo}) {
  return (
    <>
   
    <div className='banner'>
       <p>{titulo}</p> 
       <div className="subtitulo">
        <p>{subtitulo}</p>
       </div>
       </div>
    
    </>
  )
}

export default Banner