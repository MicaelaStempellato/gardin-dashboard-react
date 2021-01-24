//Trabajando con componentes de estado - Clases
//Apis - Eventos

import React, {Component} from 'react';
import Swal from 'sweetalert2';
import ProductList from './ProductList';


class Product extends Component{
    constructor(){
        super();
        this.state = {
        productos: []
        }
    }


    //creando un metodo
    mensaje(){
        Swal.fire(
            'Bienvenidos a nuestro sitio web!',
            'Tenemos los mejores cursos de jardinería!',
            'success'
          )
    }

    //Componentes Ciclo de vida - Monto - Actualizo - Desmonto
    //Montaje

    componentDidMount(){
        fetch('/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(productos => {
            //console.log(productos);
            this.setState({
                productos: productos.resultados
            })
        })
        .catch(error => console.log(error))
    }

    render(){
    return (
        <React.Fragment>
        {/*<!-- PRODUCTS LIST -->*/}
        <h1 onClick= {this.mensaje} className="h3 mb-2 text-gray-800">Todos los productos en la Base de Datos</h1>
        
        {/*<!-- DataTales Example -->*/}
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Language</th>
                                <th>Price</th>
                                <th>Professor</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Language</th>
                                <th>Price</th>
                                <th>Professor</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                this.state.productos.map((producto, index) =>{
                                    return <ProductList {...producto} key = {index} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
    
    </React.Fragment>
    )
    }
}
export default Product;
