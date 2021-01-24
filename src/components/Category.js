import React from 'react';

function Category(props){
    return(
        <React.Fragment>
        <div className="col-lg-6 mb-4">
            
                        <div className="card text-white shadow" style={props.color}>
                            <div className="card-body">
                            {props.categoria}
                            </div>
                        </div>
                    </div>
        </React.Fragment>
    )
}
export default Category;