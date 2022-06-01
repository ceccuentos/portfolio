import React from "react"
import Typed from "react-typed";
import {Link} from 'react-scroll';

const Header = () => {
  return (
    <> 
        <div className="header-wraper" id="header">
        <div className="main-info">
        
            <h1>Project Manager & Web Development</h1>
            <Typed
                className="typed-text"
                strings={["Web Developer","PMP® Project Management Professional","ERP Manager","CiberSecurity"]}
                typeSpeed={50}
                backSpeed={60}
                loop
            />
            <Link offset={-100} smooth={true} to="contacts" href="#" className="btn-main-offer"> Contáctame</Link>
        </div>

    </div>
    </> 
  )
}

export default Header


