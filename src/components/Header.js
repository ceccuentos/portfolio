import React from "react"
import Typed from "react-typed";

const Header = () => {

  return (
    <> 

        <div className="header-wraper">
        <div className="main-info">
        
            <h1>Project Manager & Web Development</h1>
            <Typed
                className="typed-text"
                strings={["Web Development","PMP®","ERP Manager"]}
                typeSpeed={40}
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


