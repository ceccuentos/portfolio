import React from "react";
//import logo from "../components/img/Logo.png";
// React Fontawasome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
            {/* <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" height="50" width="50"/></a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item"> 
                        <a className="nav-link" href="#">Acerca de</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Experiencia</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portafolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>  
    </nav>
  )
}

export default Navbar