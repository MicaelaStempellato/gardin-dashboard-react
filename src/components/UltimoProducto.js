import React, {Component} from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
let style = {
    color: '#4B9C45'
}


class UltimoProducto extends Component{

    constructor(){
        super();
        this.state = {
        producto: [],
        unidades: [],
        requisitos: []
        }
    }

    componentDidMount(){
        fetch('/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(productos => {
            //console.log(productos);
            let numero2 = productos.resultados[productos.resultados.length - 1].id

            return numero2

        })
        .then( numero => {
        fetch('/api/products/' + numero)
        .then(respuesta => {
            console.log(respuesta);
            return respuesta.json()
        })
        .then(productos => {
            this.setState({
                producto: productos.resultados,
                unidades: productos.resultados.unidades,
                requisitos: productos.resultados.requisitos
            })

            
            //console.log(unidades);
        })
        .catch(error => console.log(error))
    })

        .catch(error => console.log(error))

    }

    render(){
    return(
        <React.Fragment>
             <div >
             <NavBar />
                <div className="card shadow mb-4 m-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-center" style={style}>{this.state.producto.name}</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25+'rem'}} src= { "http://localhost:4000" + this.state.producto.link_img} alt="avatar"/>
                        </div>
                        <p className='pl-5 pr-5'>{this.state.producto.description}</p>
                        <div className="row pl-5 pt-3 ">
                        <div className="col-md-4 mb-4">
                        <h3 style={style}>Unidades</h3>
                        {this.state.unidades.map((unidad, i) =>{
                           return <p>{i+1 + ". " + unidad.unit_name}</p>
                        })}
                        </div>
                        <div className="col-md-4 mb-4">
                        <h3 style={style}>Requisitos</h3>
                        {this.state.requisitos.map((unidad, i) =>{
                           return <p>{i+1 + ". " + unidad.req_name}</p>
                        })}
                        </div>
                        <div className="col-md-4 mb-4">
                        <h3 style={style}>Información</h3>
                        <p>Idioma: {this.state.producto.language}</p>
                        <p>Profesor: {this.state.producto.professor}</p>
                        <p>Duración: {this.state.producto.duration}</p>
                        <p>Precio: ${this.state.producto.price}</p>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )}
}

export default UltimoProducto