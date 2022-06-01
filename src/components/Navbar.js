import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-scroll';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
            {/* <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" height="50" width="50"/></a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <Link offset={-100} smooth={true} to="header" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item"> 
                        <Link offset={-100} smooth={true} to="aboutme" className="nav-link" href="#">Acerca de</Link>
                    </li>
                    <li className="nav-item">
                        <Link offset={-100} smooth={true} to="services" className="nav-link" href="#">Servicios</Link>
                    </li>
                    <li className="nav-item">
                        <Link offset={-100} smooth={true} to="experience" className="nav-link" href="#">Experiencia</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link offset={-100} smooth={true} to="" className="nav-link" href="#">Portafolio</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link offset={-100} smooth={true} to="contacts" className="nav-link" href="#">Contacto</Link>
                    </li>
                </ul>
            </div>
        </div>  
    </nav>
  )
}

export default Navbar