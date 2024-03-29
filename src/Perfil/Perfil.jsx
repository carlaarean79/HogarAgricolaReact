import React, { useState, useEffect, useContext } from 'react';
import './Perfil.css';
import {  HiPlusCircle } from "react-icons/hi2";
import Button from '../Button/Button';
import Input from '../input/input';
import Swal from 'sweetalert2'



const Perfil = () => {
    const urlUsers = 'http://localhost:3030/users';
    const [inputVisible, setInputVisible] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        edad: "",
        email: "",
        contraseña: "",
        hobby: "",
        ocupacion: "",
        preferencias: ""
    });
    const [lastLogged, setLastLogged] = useState(null);
  
    useEffect(() => {
        fetch(urlUsers)
            .then(response => response.json())
            .then(data => {
                const usuarioLogueado = data[data.length -1];
                setLastLogged(usuarioLogueado)
                setFormData({
                    ...usuarioLogueado
                
                })
                
            })
           
    },[]);//fin useEffect
    console.log(lastLogged);
    
    const upDateData = (e) => {
        e.preventDefault();
        fetch(urlUsers + '/' + formData.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ha ocurrido un error con el servidor. Los datos no han sido modificados');
            }
            return response.json(); // Importante: devolver los datos de respuesta en caso de éxito
        })
        .then(data => {
            // Manejar la respuesta exitosa si es necesario
            console.log('Datos actualizados correctamente:', data);
            Swal.fire(
                'Éxito',
                'Los datos han sido modificados exitosamente',
                'success'
            );
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire(
                'Error',
                'Ha ocurrido un error al modificar los datos',
                'error'
            );
        });
    };
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleInput = () => {
        setInputVisible(!inputVisible);//!inputVisible no funciona para el boton cancelar
        console.log('togle funcion llamada');

    }
    console.log(!inputVisible);



    



    return (
        <div className="container-infoUser">
            <h1>PERFIL</h1>
            {inputVisible ? (

                <>
                    <div className="btns">
                        <Button className='btn-update' type={'submit'} title={'Editar'} onClick={()=> upDateData()} />
                        <Button className={'btn-delete'} title={'Cancelar'}  onClick={()=> toggleInput()}  />
                    </div>
                    <Input className='infoUser-input' placeholder='Nombre' type="text" name='nombre' value={formData.nombre} onChange={handleChange} />
                    <Input className='infoUser-input' placeholder='Apellido' type="text" name='apellido' value={formData.apellido} onChange={handleChange} />
                    <Input className='infoUser-input' placeholder='Dirección' type="text" name='direccion' value={formData.direccion} onChange={handleChange} />
                    <Input className='infoUser-input' placeholder='Edad' type="text" name='edad' value={formData.edad} onChange={handleChange} />
                    <Input className='infoUser-input' placeholder='Email' type="text" name='email' value={formData.email} onChange={handleChange} />
                    <Input className='infoUser-input' placeholder='Contraseña' type="text" name='contraseña' value={formData.contraseña} onChange={handleChange} />
                    <Input className='infoUser-input' placeholder='Hobby' type="text" name='hobby' value={formData.hobby} onChange={handleChange} />
                    <Input className='infoUser-input' placeholder='Ocupación' type="text" name='ocupacion' value={formData.ocupacion} onChange={handleChange} />
                    <Input className='infoUser-input' placeholder='Preferencias' type="text" name='preferencias' value={formData.preferencias} onChange={handleChange} />

                </>



            ) : (

                <div className="infoUser">
                    <div className="label">
                        <h3>Nombre:</h3><p>{formData.nombre}</p><HiPlusCircle className="icon-perfil" onClick={toggleInput} />
                    </div>
                    <div className="label">
                        <h3>Apellido:</h3><p>{formData.apellido}</p><HiPlusCircle className="icon-perfil" onClick={toggleInput} />
                    </div>
                    <div className="label">
                        <h3>Dirección:</h3><p>{formData.direccion}</p><HiPlusCircle className="icon-perfil" onClick={toggleInput} />
                    </div>
                    <div className="label">
                        <h3>Edad:</h3><p>{formData.edad}</p><HiPlusCircle className="icon-perfil" onClick={toggleInput} />
                    </div>
                    <div className="label">
                        <h3>Email:</h3><p>{formData.email}</p><HiPlusCircle className="icon-perfil" onClick={toggleInput} />
                    </div>
                    <div className="label">
                        <h3>Contraseña:</h3><p>{formData.contraseña}</p><HiPlusCircle className="icon-perfil" onClick={toggleInput} />
                    </div>
                    <div className="label">
                        <h3>Hobby:</h3><p>{formData.hobby}</p><HiPlusCircle className="icon-perfil" onClick={toggleInput} />
                    </div>
                    <div className="label">
                        <h3>Ocupacion:</h3><p>{formData.ocupacion}</p><HiPlusCircle className="icon-perfil" onClick={toggleInput} />
                    </div>
                    <div className="label">
                        <h3>Preferencias:</h3><p>{formData.preferencias}</p><HiPlusCircle className="icon-perfil" onClick={toggleInput} />
                    </div>

                </div>
            )}

        </div>
    )
}
export default Perfil;
