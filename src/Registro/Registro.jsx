import React, { useState } from 'react';
import './Registro.css';
import Input from '../input/input';
import Button from '../Button/Button';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import Login from './Login';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    localidad: "",
    edad: '',
    email: '',
    contraseña: ''
  })
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (!formData.name) {
      throw new Error('Debe completar todos los campos');
    }
  }
  const urlUsers = 'http://localhost:3030/users'
 const navegate =useNavigate();
  const addData = (e) => {
    e.preventDefault();
    try {
      // Realiza la solicitud POST al servidor para guardar los datos
      fetch(urlUsers, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Envia el valor del input al servidor
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al guardar los datos');
        } 
          Swal.fire(
            '¡Bienvenido!',
            `Usuario ${formData.nombre}  ${formData.apellido} ha sido registrado con éxito` ,
            "success"
            ) .then(()=>{
            setFormData({
              nombre: '',
              apellido: '',
              direccion: '',
              localidad: "",
              edad: '',
              email: '',
              contraseña: ''
            })
           navegate(<Login />)
          });
        })
        .catch(error => {
          console.error('Error al guardar los datos:', error);
          Swal.fire(
            'Error',
            'Ha ocurrido un error al guardar los datos',
            'error'
            );
          });
        } catch (error) {
          console.error('Error al guardar los datos:', error);
        }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Evita que el formulario se envíe al presionar Enter
    }
  };

  return (
    <div className='containerAllRegistro'>
      <div className="containerAllInput">
        <form onSubmit={addData}>
          <Input className={'input'} label='Nombre' type='text' name='nombre' value={formData.nombre} onChange={handleChange} onKeyDown={handleKeyDown} />
          <Input className={'input'} label='Apellido' type='text' name='apellido' value={formData.apellido} onChange={handleChange} onKeyDown={handleKeyDown} />
          <Input className={'input'} label='Dirección' type='text' name='direccion' value={formData.direccion} onChange={handleChange} onKeyDown={handleKeyDown} />
          <Input className={'input'} label='Edad' type='number' name='edad' value={formData.edad} onChange={handleChange} onKeyDown={handleKeyDown} />
          <Input className={'input'} label='Email' type='email' name='email' value={formData.email} onChange={handleChange} onKeyDown={handleKeyDown} />
          <Input className={'input'} label='Contraseña' type='text' name='contraseña' value={formData.contraseña} onChange={handleChange} onKeyDown={handleKeyDown} />
          <Button className='btns' type='submit' title='Enviar' />
        </form>
      </div>

    </div>
  )
}

export default Registro