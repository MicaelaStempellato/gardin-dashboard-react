import React from 'react';
import Category from './Category'

const cardStyle = {
    backgroundColor: '#80A37D',
  };
  const cardStyle2 = {
    backgroundColor: '#9AD08F',
  };
  const cardStyle3 = {
    backgroundColor: '#4B9C45',
  };

let categorias = [
    {
        tipo: 'edad',
        categoria: 'Niños',
        color: cardStyle
    },
    {
        tipo: 'edad',
        categoria: 'Jóvenes Adultos',
        color: cardStyle
    },
    {
        tipo: 'edad',
        categoria: 'Adultos',
        color: cardStyle
    },
    {
        tipo: 'experiencia',
        categoria: 'Empezando',
        color: cardStyle2
    },
    {
        tipo: 'experiencia',
        categoria: 'Con Experiencia',
        color: cardStyle2
    },
    {
        tipo: 'experiencia',
        categoria: 'Avanzado',
        color: cardStyle2
    },
    {
        tipo: 'ambiente',
        categoria: 'Interior',
        color: cardStyle3
    },
    {
        tipo: 'ambiente',
        categoria: 'Patios y Balcones',
        color: cardStyle3
    },
    {
        tipo: 'ambiente',
        categoria: 'Jardín',
        color: cardStyle3
    }
];


function CategoryInDB(){
    return(
        <React.Fragment>
        {/*<!-- Categories in DB -->*/}
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categorias de los Cursos</h6>
            </div>
            <div className="card-body">
                <div className="row">
                {categorias.map((categoria, index) =>{
                    return <Category {...categoria} key = {index}/>
                })}
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
    )
}

export default CategoryInDB;