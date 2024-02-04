import React, {useState} from 'react'
import './Registro.css'
const Registro = ()=> {
    const [formData, setFormData] =useState({
        nombre: '',
        apellido: '',
        direccion:'',
        localidad:"",
        edad:'',
        email:'',
        contraseña:''
    })
const handleChange = (e)=>{
  setFormData({...FormData, [e.target.name]: [e.target.value]});
  if(!formData.name){
    throw new Error ('Debe completar todos los campos');
  }
}
const handleSubmit = (e)=>{
  e.preventDefault();
  console.log('eviado');
}

  return (
    <div className='containerAllRegistro'>
      <div className="containerAllInput">
<form onSubmit={handleSubmit}>

    <div className="input">
  <label>Nombre:</label>
  <input type='text'  value={formData.nombre}  onChange={handleChange} />
  </div>
  <div className="input"> 
  <label>Apellido:</label> 
   <input type='text'  value={formData.apellido}  onChange={handleChange}  />
  </div>
  <div className="input">
   <label>Dirección:</label>
  <input type='text'  value={formData.direccion}  onChange={handleChange}  />
  </div>
  <div className="input">
   <label>Edad:</label>
  <input type='number'  value={formData.edad}  onChange={handleChange}  />
  </div>
  <div className="input">
   <label>Email:</label>
  <input type='email'  value={formData.email}  onChange={handleChange}  />
  </div>
  <div className="input">
   <label>Contraseña:</label>
  <input type='text'  value={formData.contraseña}  onChange={handleChange}  />
  </div>
 
      <button className='btns' type='submit' onClick={handleSubmit}>Enviar</button>
</form>
      </div>
  
  </div>
  )
}

export default Registro