import React from 'react';
import imagen from '../assets/images/dglogo2.png';

let style = {
    color: '#4B9C45'
}

function NavBar(){
    return(
        <React.Fragment>
        {/*<!-- Topbar -->*/}
        <nav className="navbar navbar-expand navbar-light color_fondo topbar mb-4 static-top shadow">

            {/*<!-- Sidebar Toggle (Topbar) -->*/}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            {/*<!-- Topbar Navbar -->*/}
            <ul className="navbar-nav ml-auto">

                {/* 
                *<!-- Nav Item - Alerts -->*
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                        <i className="fas fa-bell fa-fw"></i>
                        *<!-- Counter - Alerts -->*
                        <span className="badge badge-danger badge-counter">3+</span>
                    </a>
                </li>

                *<!-- Nav Item - Messages -->*
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                        <i className="fas fa-envelope fa-fw"></i>
                        *<!-- Counter - Messages -->*
                        <span className="badge badge-danger badge-counter">7</span>
                    </a>
                </li>

            */}

            <li className="nav-item dropdown no-arrow mx-1">
                <a href='http://localhost:4000/' className="nav-link dropdown-toggle" style={style}>
                <span className="mr-2 d-none d-lg-inline text-success-600 small"><i className="fas fa-caret-left"></i>    REGRESAR A GARDIN</span>
                </a>
            </li>


                <div className="topbar-divider d-none d-sm-block"></div>

                {/*<!-- Nav Item - User Information -->*/}
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Digital Gradin</span>
                        <img className="img-profile rounded-circle" src={imagen} width="60" alt="Imagen de perfil" />
                    </a>
                </li>

            </ul>

        </nav>
       {/* <!-- End of Topbar -->*/}
       </React.Fragment>
    )
}
export default NavBar;