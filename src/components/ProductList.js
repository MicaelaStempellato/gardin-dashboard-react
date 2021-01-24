import React from 'react';

function ProductList(props){
    return(
        <React.Fragment>
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.description}</td>
                <td>
                    <ul>
                        <li>{props.edad.category_name}</li>
                        <li>{props.experiencia.category_name}</li>
                        <li>{props.ambiente.category_name}</li>
                    </ul>
            </td>
            <td>{props.language}</td>
            <td>${props.price}</td>
            <td>{props.professor}</td>
        </tr>
        </React.Fragment>
    )
}
export default ProductList;