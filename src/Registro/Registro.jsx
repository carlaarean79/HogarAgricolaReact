import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import Input from '../input/input';
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom";
import { UsersContext } from '../ContextCards/UsersContext';
import './Registro.css'

const Registro = () => {
  const { setData } = useContext(UsersContext);
  const [registro, setRegistro] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    localidad: '',
    edad: '',
    email: '',
    contraseña: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegistro({ ...registro, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3030/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registro),
      });

      if (response.ok) {
        const data = await response.json();
        setData((prev) => ({ ...prev, activeUser: { user: data, administrator: false } }));
        navigate('/login');
             } else {
        Swal.fire(
          'Error',
          `Error en la solicitud HTTP: ${response.status} ${response.statusText}`,
          'error'
        );
      }
    } catch (error) {
      console.error('Ha ocurrido un error al registrar el usuario:', error);
      Swal.fire(
        'Error',
        'Ha ocurrido un error al registrar el usuario',
        'error'
      );
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
        <form onSubmit={handleSubmit}>
          <Input className={'input'} label='Nombre' type='text' name='nombre' value={registro.nombre} onChange={handleChange} onKeyDown={handleKeyDown} />
          <Input className={'input'} label='Apellido' type='text' name='apellido' value={registro.apellido} onChange={handleChange} onKeyDown={handleKeyDown} />
          <Input className={'input'} label='Dirección' type='text' name='direccion' value={registro.direccion} onChange={handleChange} onKeyDown={handleKeyDown} />
          <Input className={'input'} label='Edad' type='number' name='edad' value={registro.edad} onChange={handleChange} onKeyDown={handleKeyDown} />
          <Input className={'input'} label='Email' type='email' name='email' value={registro.email} onChange={handleChange} onKeyDown={handleKeyDown} />
          <Input className={'input'} label='Contraseña' type='password' name='contraseña' value={registro.contraseña} onChange={handleChange} onKeyDown={handleKeyDown} />
          <Button className='btns' type='submit' title='Registrarse' />
        </form>
      </div>
    </div>
  );
}

export default Registro;
