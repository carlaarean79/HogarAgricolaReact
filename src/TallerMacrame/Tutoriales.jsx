import React, { useContext } from 'react'
import Banner from '../Banner/Banner'
import './Tutoriales.css'
import { TutorialesContext } from '../ContextCards/TutorialesContext'
import CardsTalleres from '../Cards/CardsTalleres'
import ImagenTaller from '../ImgCategorias/ImgCategoriasTaller'
const Tutoriales = ({ categoria }) => {
  const { Tutorial } = useContext(TutorialesContext);

  return (
    <div className='container-sección-macrame'>
      
      <div className="encabezado-macrame">

        <ImagenTaller categoria={categoria} />
        <Banner titulo={categoria === 'tutorial' ? 'tutorial' : categoria} />
      </div>
      <div className="container-cards-macrame">
        <div className="tutoriales">
          {Tutorial.map((tutorial) => {
            return tutorial.categoria === categoria ? (
              <CardsTalleres tutorial={tutorial} key={tutorial.id} />

            ) : (null)
          })}
        </div>
      </div>
    </div>
  )
}

export default Tutoriales;