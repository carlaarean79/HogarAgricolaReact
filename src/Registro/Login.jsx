import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import Input from '../input/input';
import './Login.css'
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const url_User = 'http://localhost:3030/users'

  //solicitud al servidor para verificar credenciales del usuario
  const handleLogin = async (e) =>{
e.preventDefault();
const email = e.target.email.value;
const contraseña = e.target.contraseña.value;
const navigate = useNavigate();
try{

if(Response.ok) {
  Swal.fire('¡Inicio de sesión exitoso!','Bienvenido de nuevo', 'success');
  navigate('/cuenta');
} else {
  Swal.fire('Error','Ha ocurrido un error al intentar iniciar sesión. Intente nuevamente','error')
}


} catch (error){

}//fin catch


  }

  return (
    <>
    <h1 className='login-h1'>LOGIN</h1>
    <form className='container-login-all'>
      
      <Input className={'input-login'} label={'Email'} placeholder={'Email'} type={'email'} name={'email'} /* value={user_logged} *//>
      <Input className={'input-login'} label={'Contraseña'} placeholder={'Contraseña'} type={'password'} name={'contraseña'} /* value={user_logged} *//>
     
   <div className='container-btns'>
    <Button className={'btns-submit'} type={'submit'} title={'ENVIAR'}/>
    <Button className={'btns-cancel'} type={'reset'} title={'CANCELAR'}/>
   </div>
    </form>
    
    </>
  );
};

export default Login;
