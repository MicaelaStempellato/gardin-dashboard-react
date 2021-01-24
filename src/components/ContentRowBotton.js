import React, {Component} from 'react';
import LastProductInDB from './LastProductInDB';
import CategoryInDB from './CategoryInDB';


class ContentRowBotton extends Component {

    constructor(){
        super();
        this.state = {
        producto: []
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
                producto: productos.resultados
            })
            console.log(productos);
        })
        .catch(error => console.log(error))
    })

        .catch(error => console.log(error))

    }


    render(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">

        <LastProductInDB objeto= {this.state.producto} />   

        <CategoryInDB />
            
        </div>
        </React.Fragment>
    )}
}
export default ContentRowBotton;