import React, { useContext } from 'react'
import { TutorialesContext } from '../ContextCards/TutorialesContext';
import Imagen from '../Imagen/Imagen';
import Banner from '../Banner/Banner';
import CardsTalleres from '../Cards/CardsTalleres';
import './Tutoriales.css'
const AllTalleres = () => {
    const { Tutorial } = useContext(TutorialesContext);



    return (
        <div className='container-sección-macrame'>

            <div className="encabezado-macrame">

                <Imagen className={'img-fondo-talleres'} src={'https://3.bp.blogspot.com/-hsTL4gb92-0/WqfXsQVqhPI/AAAAAAAAA8s/ukouYLBg5wE0KA1II1nLVVGeCXd3ztLngCEwYBhgL/s1600/atelier%2BDIY.jpg'}
                    alt={'Banner Talleres'} />
                <Banner titulo={'Nuestros Talleres'} />
            </div>
            <div className="container-cards-macrame">
                <div className="tutoriales">
                    {Tutorial.map((tutorial) => {
                        <CardsTalleres tutorial={tutorial} key={tutorial.id} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default AllTalleres