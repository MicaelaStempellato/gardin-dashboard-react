import React, {Component} from 'react';
import SmallCard from './SmallCard';

let productsInDataBase = {
    color: 'info',
    titulo: 'Productos en la Data Base',
    
    icono: 'fa-clipboard-list',
    moneda: false
};

let amount = {
    color: 'success',
    titulo: 'Precio en productos',
   
    icono: 'fa-dollar-sign',
    moneda: true
};

let user = {
    color: 'warning',
    titulo: 'Cantidad de Usuarios',
    icono: 'fa-user-check',
    moneda: false
};

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//let cardProps = [productsInDataBase, amount, user]

class ContentRowTop extends Component{

    constructor(){
        super();
        this.state = {
        productos: []
        }
    }

    componentDidMount(){
        fetch('/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(productos => {
            let cantidad = productos.resultados.length;
            let total = 0;
            productos.resultados.map(prods =>{
                return total = total + Number(prods.price)
            })
            productsInDataBase.valor = cantidad;
            amount.valor = toThousand(total)
            //console.log(productos);
            
        })
        .then(()=>{

        fetch('/api/users')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(users => {
            let cantidadU = users.resultados.length;
            user.valor = cantidadU
            let cardProps = [productsInDataBase, amount, user]
            this.setState({
                productos: cardProps
            })
        })
    })
    .catch(error => console.log(error))
    }
    

    render(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">

            {
                this.state.productos.map((producto, index) =>{
                    return <SmallCard {...producto} key = {index} />
                })
            }

        </div>
        </React.Fragment>
    )
        }
}
export default ContentRowTop;