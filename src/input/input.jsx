import React from 'react'

const Input = ({label,className,placeholder,type,name,value,onChange, onKeyDown})=> {
  return (
    <div>
        <div className={className}>
            <label>{label}</label>
            <input className={className} placeholder= {placeholder} type={type} name={name} value={value} onChange={onChange} onKeyDown={onKeyDown}/>
        </div>
    </div>
  )
}

export default Input