import React from 'react';
//importar eel componente Link
import {Link, Route, Switch} from 'react-router-dom';

//importar los componentes externos que deseamos utilizar en las rutas
import Content from './Content';
import Nosotros from './Nosotros';
import UltimoProducto from './UltimoProducto';

function SideBar(){
 return(
   <React.Fragment>
       {/*<!-- Sidebar -->*/}
		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/*<!-- Sidebar - Brand -->*/}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<i className="fas fa-chart-line"></i>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>

			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider my-0"></hr>

			{/*<!-- Nav Item - Dashboard -->*/}
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span></a>
			</li>

			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider"></hr>

			{/*<!-- Heading -->*/}
			<div className="sidebar-heading">Acciones</div>

			{/*<!-- Nav Item - Pages -->*/}
			<li className="nav-item">
				<Link className="nav-link collapsed" to="/">
					<i className="fas fa-fw fa-home"></i>
					<span>Inicio</span>
				</Link>
			</li>

			{/*<!-- Nav Item - Charts -->*/}
			<li className="nav-item">
				<Link className="nav-link" to="/nosotros">
					<i className="fas fa-fw fa-users"></i>
					<span>Nosotros</span></Link>
			</li>

			{/*<!-- Nav Item - Tables -->*/}
			<li className="nav-item">
				<Link className="nav-link" to="/ultimoProducto">
					<i className="fas fa-fw fa-seedling"></i>
					<span>Ultimo Producto</span></Link>
			</li>

			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider d-none d-md-block"></hr>
		</ul>
        {/*<!-- End of Sidebar -->*/}
   
   {/*Aqui debo armar mis rutas, blindadas a través de switch
   Exact se asegura de forzar que el link se llame exactamente como el path (un nivel extra de blindado) */}
   <Switch>
	   <Route exact path = '/' component={Content} />
	   <Route exact path = '/nosotros' component={Nosotros} />
	   <Route exact path = '/ultimoProducto' component={UltimoProducto} />
   </Switch>
   </React.Fragment> 
 )
}
export default SideBar;