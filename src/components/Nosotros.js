import React from 'react';

//importar la imagen que quiero
import foto from '../assets/images/campologo.jpg';
import Footer from './Footer';
import NavBar from './NavBar';

let style = {
    backgroundColor: '#80A37D'
}


function Nosotros(){
    return(
        <React.Fragment>
            
            <div>
            <NavBar />
            <div className='mb-4 m-4'>
                <h1 className='text-white text-center p-4 mt-3 mb-3 shadow' style={style}>Sobre Nosotros</h1>
                <img className='img-fluid shadow' src={foto} alt = 'Leones chiquitos' />
                <div className='card p-5 mt-4 shadow'>
                    <h4 className='mb-4 mt-3'>Integrantes del grupo Gardin:</h4>
                    <div className="row pl-5 pt-3 ">
                    <p className="col-md-4 mb-4">Micaela Stempellato:</p>
                    <p className="col-md-4 mb-4">Maximiliano Colla</p>
                    <p className="col-md-4 mb-4">Patricio Quipildor</p>
                    </div>
                    <h4 className='mb-4 mt-3'>Sobre Gardin:</h4>
                    <p>Nuestro sitio brinda cursos de jardinería online. Nuestra audiencia objetiva es tanto amateur como gente con conocimientos más avanzados. Nuestro público principal se expande entre las edades de 18 a 35, para gente con interés en la jardinería o que aspira a aprender. Como público secundario, tenemos gente apasionada por la jardinería sin importar el rango de edad, referidos por el principal.
                </p>
                </div>
                <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Nosotros