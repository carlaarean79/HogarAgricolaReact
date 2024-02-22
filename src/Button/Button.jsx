import React from 'react'

const Button= ({className,type,title, onClick, id})=> {
  return (
    <div>
        <button className={className} type= {type} onClick={onClick} id={id} >{title}</button>
    </div>
  )
}

export default Button