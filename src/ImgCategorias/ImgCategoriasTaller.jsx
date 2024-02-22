import React from 'react';

const ImagenTaller = ({ categoria }) => {
    // Lógica para determinar la imagen basada en la categoría
    const categoriasImg = {
        'Macramé': "https://i0.wp.com/www.trenzaduriafraile.cl/wp-content/uploads/2023/02/pexels-photo-5371357-e1678822214918.jpeg?fit=1024%2C576&ssl=1",
        'Crochet':'https://www.malagahoy.es/2022/09/12/malaga/Amigurumi-hecho-tecnica-ganchillo_1719738942_165936357_667x375.jpg',
        'Pintura sobre Tela': 'https://totenart.com/tutoriales/wp-content/uploads/2023/09/como-pintar-tela-art-creation.jpg',
        'Pintura sobre Madera' : 'https://elcaminodelanillo.com/wp-content/uploads/2022/11/-ruthcarpintero-cuadros-452-1024x523.jpg',
        'Reciclado': 'https://i.ytimg.com/vi/NaboOguztCw/maxresdefault.jpg',
        'Cocina':'https://cocina-familiar.com/wp-content/uploads/2023/01/recetas-de-comida-faciles-de-preparar-en-casa.jpg',
        'Porcelana':'https://i.pinimg.com/736x/d8/d7/94/d8d7940617a17c2369e1d79d334010b4.jpg',
        'Peluquería':'https://www.avanzaentucarrera.com/orientacion/comp/uploads/2017/03/peluqueria.jpg',
    }
   
    const imagenURL = categoriasImg[categoria];
    return (
        <img src={imagenURL} alt="Imagen" />
    );
};

export default ImagenTaller;
