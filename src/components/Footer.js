import React from 'react';
import {
    FacebookShareButton, 
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";

import {Link} from 'react-scroll';

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="d-flex">
                        <p>Santiago, Chile</p> 
                    </div>
                    <div className="d-flex">
                        <a href="tel: 991417504">+569 91417504</a>
                    </div>
                    <div className="d-flex">
                        <p>cristian.contreras@codevsys.cl</p> 
                    </div>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-6">
                    <div className="row">
                        <div className="col">
                            <Link offset={-100} smooth={true} to="header" className='footer-nav'>Home</Link>
                            <br />
                            <Link offset={-100} smooth={true} to="aboutme" className='footer-nav'>Acerca de</Link>
                            <br />
                            <Link offset={-100} smooth={true} to="services" className='footer-nav'>Servicios</Link>
                        </div>
                        <div className="col">
                            <Link offset={-100} smooth={true} to="experience" className='footer-nav'>Experiencia</Link>
                            <br />
                            <Link offset={-100} smooth={true} to="contacts" className='footer-nav'>Contacto</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                    <div className="d-flex justify-content-center">
                        <FacebookShareButton
                            quote="Hola!"
                            url={"https://www.facebook.com/ceccuentos/"}
                            hashtag="#Contacto-Cec"
                        >
                            <FacebookIcon className='mx-3' size={36} round={true}/>
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={"https://www.facebook.com/ceccuentos/"}
                            hashtag="#Contacto-Cec"
                        >
                            <TwitterIcon className='mx-3' size={36} round={true}/>
                        </TwitterShareButton>
                        <RedditShareButton
                            url={"#ceccuentos"}
                            hashtag="#Contacto-Cec"
                        >
                            <RedditIcon className='mx-3' size={36} round={true}/>
                        </RedditShareButton>
                        <LinkedinShareButton
                            title="Contacto Cec"
                            url="https://www.linkedin.com/in/cec/"
                        >
                            <LinkedinIcon className='mx-3' size={36} round={true}/>
                        </LinkedinShareButton>
                    </div>
                    <p className='pt-3 text-center'>
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp;Codevsys SpA Todos los derechos reservados
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer