import React from 'react'

const Imagen =({src,name,className})=> {
  return (
    <div>
    <img src={src} alt={name} className={className}/>

    </div>
  )
}

export default Imagen