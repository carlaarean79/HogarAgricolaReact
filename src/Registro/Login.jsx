import React, { useContext, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import Input from '../input/input';
import './Login.css'
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom";
import { UsersContext } from '../ContextCards/UsersContext';


const Login = () => {
 const {data, setAuth, setData} = useContext(UsersContext);
const {user} = data;
const [login,setLogin] = useState({});
const {email , contraseña} = login;
const navigate = useNavigate();

const onChange = (e)=>{
  setLogin({
    ...login,[e.target.name] : e.target.value
  })
};

const registro = (e) => {
  e.preventDefault();
  navigate('/cuenta');
  console.log(data.activeUser);
};

const handleSubmit = async (e)=>{
  e.preventDefault();
  if([email, contraseña].includes("")){
    Swal.fire({
      text: "Debe completar todos los campos",
      icon: "warning"
    })
    return;
  }

  
  const validarUser = user.some(el => el.email == email && el.contraseña == contraseña);
  if(!validarUser){
    console.log(validarUser);
    Swal.fire({
      text: "Email o contraseña incorrectos",
      icon: "error"
    })
    return; 
  }

  const activeUser = user.filter(user => user.email == email && user.contraseña == contraseña)
  setAuth(activeUser[0]);
  setData((prev)=> ({
    ...prev, activeUser:{user:activeUser[0], administrator:false}
  }));
  Swal.fire({
    text: "inicio de sesión con éxito",
    icon: "success"
  });
  navigate('/cuenta');
  
}//fin handlesubmit

  return (
    <>
    <h1 className='login-h1'>LOGIN</h1>
    <form className='container-login-all' onSubmit={handleSubmit}>
      
      <Input className={'input-login'} label={'Email'} placeholder={'Email'} type={'email'} name={'email'} onChange={onChange}/* value={user_logged} *//>
      <Input className={'input-login'} label={'Contraseña'} placeholder={'Contraseña'} type={'password'} name={'contraseña'} onChange={onChange} /* value={user_logged} *//>
     
   <div className='container-btns'>
    <Button className={'btns-submit'} type={'submit'} title={'ENVIAR'} onClick={handleSubmit}/>
    <Button className={'btns-cancel'} type={'reset'} title={'CANCELAR'} onChange={registro}/>
   </div>
    </form>
    
    </>
  );
};

export default Login;
