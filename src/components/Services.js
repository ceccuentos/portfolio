import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faGoodreads, faGoogle, faMicrosoft} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode, faHandshake, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services">
        <h1 className="py-5">Servicios</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>
                            </div>
                            <h3>Web Developer</h3>    
                            <p>Siempre con el foco en los resultados</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faHandshake} size="2x"/>
                            </div>
                            <h3>Project Managnment</h3>
                            <p> Liderazgo positivo de proyectos generando valor de forma continua </p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faUserCircle} size="2x"/>
                            </div>
                            <h3>ERP Manager</h3>  
                            <p>Dirección y gestión de proyectos ERP destacando resultados inmediatos</p>  
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/>
                            </div>
                            <h3>CiberSeguridad</h3>  
                            <p>Mejores prácticas para prevenir incidentes de seguridad</p>  
                        </div>
                    </div>

                </div>
            </div>

    </div>
  )
}

export default Services