import React from 'react';
//importar eel componente Link
import {Link, Route, Switch} from 'react-router-dom';
//Aquí hago la importanción de la imagen: product_dummy.svg
//import product_dummy from '../assets/images/product_dummy.svg';

import UltimoProducto from './UltimoProducto';

function LastProductInDB(props){
    return(
        <React.Fragment>
            {/*<!-- Last Product in DB -->*/}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray">Último producto en la Data Base</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25+'rem'}} src= { "http://localhost:4000" + props.objeto.link_img} alt="avatar"/>
                        </div>
                        <p>{props.objeto.description}</p>
                        <Link className="text-info" to="/ultimoProducto">Ver detalle del producto</Link>
                    </div>
                </div>
            </div>
            <Switch>
	            <Route exact path = '/ultimoProducto' component={UltimoProducto} />
            </Switch>

        </React.Fragment>
    )
}
export default LastProductInDB;