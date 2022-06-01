import React from "react"
import author from '../components/img/yo.jpeg';

const AboutMe = () => {
  return (
    <nav className="aboutmex">
        <div className="container py-5" id="aboutme" >
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="Cristian Contreras..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">Acerca de mí</h1>
                    <p> 
                    Hola mi nombre es Cristián E. Contreras Cabrera soy Ingeniero Civil Industrial e Ingeniero Informático. 
                    He dedicado mi vida profesional a liderar equipos para resolver problemas de negocios mediante la tecnología, 
                    es así como he participado en diversos proyectos tecnológicos en los que he adaptado la tecnología con las necesidades del cliente. 
                    <br/> 
                    <br/> 
                    Conozco gran parte del stack técnico Web tanto a nivel de FrontEnd y Backend.
                    <br/> 
                    <br/> 
                    He trabajado con metodología PMI (soy certificado PMP®) y tengo sólidos conocimientos con metodologías ágiles (XP, KANBAN, SCRUM entre otros).
                    </p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default AboutMe