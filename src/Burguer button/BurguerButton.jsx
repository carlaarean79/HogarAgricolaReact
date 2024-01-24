import React from 'react'
import './BurguerButton.css'

function BurguerButton({clicked,handleClick,onClick}) {
  return (
    <div className='btn_burguer'>
<div 
className={clicked ? 'burger-btn open' : 'burger-btn'} onClick={onClick}>

    <span></span>
    <span></span>
    <span></span>
    
</div>

    </div>
  )
}

export default BurguerButton