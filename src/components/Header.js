import { useEffect, useState } from 'react'
import Typed from "react-typed";
import AnimatedLetters from './AnimatedLetters'
import {Link} from 'react-scroll';

const Header = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Project Manager & Web Development'.split('')
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <> 
        <div className="header-wraper" id="header">
        <div className="main-info">
        
            <h1 id="media">Project Manager & Web Development</h1>
            <h1 id="web">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
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



