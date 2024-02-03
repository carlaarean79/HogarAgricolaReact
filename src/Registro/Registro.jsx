import React from 'react'
import { HiPlusCircle } from "react-icons/hi2";
const Registro = ()=> {
    const [formData, setFormData] =useState({
        nombre: '',
        apellido: '',
        direccion:'',
        edad:'',
        email:'',
        contraseña:''
    })
  return (
    <div className='item-perfil-usuario'>
    <div className="input">
  <label>Nombre:</label>
  <input type='text'
  value={inputValue.nombre}
  onChange={handleChange}
  /><HiOutlinePencil className="icon"/>
  </div>
  <div className="input">
   <label>Apellido:</label>
  <input type='text'
  value={inputValue.apellido}
  onChange={handleChange}
  /><HiOutlinePencil className="icon"/>
  </div>
  <div className="input">
   <label>Dirección:</label>
  <input type='text'
  value={inputValue}
  onChange={handleChange}
  /><HiOutlinePencil className="icon"/>
  </div>
  <div className="input">
   <label>Edad:</label>
  <input type='number'
  value={inputValue}
  onChange={handleChange}
  /><HiOutlinePencil className="icon"/>
  </div>
  <div className="input">
   <label>Email:</label>
  <input type='email'
  value={inputValue}
  onChange={handleChange}
  /><HiOutlinePencil className="icon"/>
  </div>
  <div className="input">
   <label>Contraseña:</label>
  <input type='text'
  value={inputValue}
  onChange={handleChange}
  />
  </div>
 
  
  </div>
  )
}

export default Registro