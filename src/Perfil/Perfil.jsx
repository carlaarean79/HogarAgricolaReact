import React, { useState, useEffect } from 'react';
import './Perfil.css';
import { HiOutlinePencil, HiPlusCircle } from "react-icons/hi2";

const Perfil = () => {
   const [inputVisible, setInputVisible] = useState(false);
   const [formData, setFormData] = useState({
    nombre:"",
    apellido:"",
    direccion:"",
    edad:"",
    email:"",
    contraseña:"",
    hobby:"",
    ocupacion:"",
    preferencias:""
   });

   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const toggleInputAdd = () => {
    setInputVisible(!inputVisible);
   }

   useEffect(() => {
      // Código para realizar efectos secundarios (como solicitudes HTTP) aquí
   }, []); // Asegúrate de pasar un arreglo vacío como segundo argumento para que el efecto solo se ejecute una vez al montar el componente

   const addData = () => {
      const urlUsers = 'http://localhost:3030/users';
      try {
         // Realiza la solicitud POST al servidor para guardar los datos
         fetch(urlUsers, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formData }), // Envia el valor del input al servidor
         })
         .then(response => {
            if (response.ok) {
               throw new Error('Error al guardar los datos');
            }
            // Si la solicitud es exitosa, actualiza el estado con el texto ingresado y restablece el valor del input
           
            setInputVisible(false);
         })
         
      } catch (error) {
         console.error('Error al guardar los datos:', error);
      }
   }

    return (
        <div className="container-infoUser">
            <h1>PERFIL</h1>
            {inputVisible ? (
                <div className="infoUser-input">
                    <input type="text" name='nombre' value={formData.nombre} placeholder="Nombre" onChange={handleChange} />
                    <div className="btns">
                    <button onClick={addData}>Guardar</button>
                    <button onClick={addData}>Editar</button>
                    </div>
                </div>
            ) : (
               
            <div className="infoUser">
                <div className="label">
                    <h3>Nombre:</h3><p>{formData.nombre}</p><HiPlusCircle  className="icon-perfil"  onClick={toggleInputAdd}/>
                </div>
            </div>
            )}
              {inputVisible ? (
                <div className="infoUser-input">
                    <input type="text" name='apellido' value={formData.apellido} placeholder='Apellido' onChange={handleChange} />
                    <div className="btns">
                    <button onClick={addData}>Guardar</button>
                    <button onClick={addData}>Editar</button>
                    </div>
                </div>
            ) : (
               
            <div className="infoUser">
                <div className="label">
                    <h3>Apellido:</h3><p>{formData.apellido}</p><HiPlusCircle  className="icon-perfil"  onClick={toggleInputAdd}/>
                </div>
            </div>
            )}
              {inputVisible ? (
                <div className="infoUser-input">
                    <input type="text" name='direccion' value={formData.direccion} placeholder='Dirección' onChange={handleChange} />
                    <div className="btns">
                    <button onClick={addData}>Guardar</button>
                    <button onClick={addData}>Editar</button>
                    </div>
                </div>
            ) : (
               
            <div className="infoUser">
                <div className="label">
                    <h3>Dirección:</h3><p>{formData.direccion}</p><HiPlusCircle  className="icon-perfil"  onClick={toggleInputAdd}/>
                </div>
            </div>
            )}
              {inputVisible ? (
                <div className="infoUser-input">
                    <input type="text" name='edad' value={formData.edad} placeholder='Edad' onChange={handleChange} />
                    <div className="btns">
                    <button onClick={addData}>Guardar</button>
                    <button onClick={addData}>Editar</button>
                    </div>
                </div>
            ) : (
               
            <div className="infoUser">
                <div className="label">
                    <h3>Edad:</h3><p>{formData.edad}</p><HiPlusCircle  className="icon-perfil"  onClick={toggleInputAdd}/>
                </div>
            </div>
            )}
              {inputVisible ? (
                <div className="infoUser-input">
                    <input type="text" name='email' value={formData.email} placeholder='Email' onChange={handleChange} />
                    <div className="btns">
                    <button onClick={addData}>Guardar</button>
                    <button onClick={addData}>Editar</button>
                    </div>
                </div>
            ) : (
               
            <div className="infoUser">
                <div className="label">
                    <h3>Email:</h3><p>{formData.email}</p><HiPlusCircle  className="icon-perfil"  onClick={toggleInputAdd}/>
                </div>
            </div>
            )}
              {inputVisible ? (
                <div className="infoUser-input">
                    <input type="text" name='contraseña' value={formData.contraseña} placeholder='Contraseña' onChange={handleChange} />
                    <div className="btns">
                    <button onClick={addData}>Guardar</button>
                    <button onClick={addData}>Editar</button>
                    </div>
                </div>
            ) : (
               
            <div className="infoUser">
                <div className="label">
                    <h3>Contraseña:</h3><p>{formData.contraseña}</p><HiPlusCircle  className="icon-perfil"  onClick={toggleInputAdd}/>
                </div>
            </div>
            )}
              {inputVisible ? (
                <div className="infoUser-input">
                    <input type="text" name='hobby' value={formData.hobby} placeholder='Hobby' onChange={handleChange} />
                    <div className="btns">
                    <button onClick={addData}>Guardar</button>
                    <button onClick={addData}>Editar</button>
                    </div>
                </div>
            ) : (
               
            <div className="infoUser">
                <div className="label">
                    <h3>Hobby:</h3><p>{formData.hobby}</p><HiPlusCircle  className="icon-perfil"  onClick={toggleInputAdd}/>
                </div>
            </div>
            )}
              {inputVisible ? (
                <div className="infoUser-input">
                    <input type="text" name='ocupacion' value={formData.ocupacion} placeholder='Ocupación' onChange={handleChange} />
                    <div className="btns">
                    <button onClick={addData}>Guardar</button>
                    <button onClick={addData}>Editar</button>
                    </div>
                </div>
            ) : (
               
            <div className="infoUser">
                <div className="label">
                    <h3>Ocupacion:</h3><p>{formData.ocupacion}</p><HiPlusCircle  className="icon-perfil"  onClick={toggleInputAdd}/>
                </div>
            </div>
            )}
              {inputVisible ? (
                <div className="infoUser-input">
                    <input type="text" name='preferencias' value={formData.preferencias} placeholder='Preferencias' onChange={handleChange} />
                    <div className="btns">
                    <button onClick={addData}>Guardar</button>
                    <button onClick={addData}>Editar</button>
                    </div>
                </div>
            ) : (
               
            <div className="infoUser">
                <div className="label">
                    <h3>Preferencias:</h3><p>{formData.preferencias}</p><HiPlusCircle  className="icon-perfil"  onClick={toggleInputAdd}/>
                </div>
            </div>
            )}
        </div>
    );
}

export default Perfil;
