import React from "react"
import Typed from "react-typed";

// import React, { useCallback } from 'react';
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

//import particlesOptions from "../particles.json";

const Header = () => {
  // const particlesInit = useCallback(main => {
  //   loadFull(main);
  // }, [])
  return (
    <> 
        {/* <Particles 
          className="particles-canvas" 

          options={particlesOptions} init={particlesInit}/> */}

        <div className="header-wraper">
        <div className="main-info">
        
            <h1>Project Manager & Web Development</h1>
            <Typed
                className="typed-text"
                strings={["Web Developer","PMP® Project Management Professional","ERP Manager","CiberSecurity"]}
                typeSpeed={50}
                backSpeed={60}
                loop
            />
            <a href="#" className="btn-main-offer"> Contáctame</a>
        </div>

    </div>
    </> 
  )
}

export default Header


