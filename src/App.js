import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import particlesOptions from "./particles.json";


import Navbar from "./components/Navbar";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';

function App() {
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])
  return (
    <>
      <Particles 
      className="particles-canvas" 
      options={particlesOptions} 
      init={particlesInit}/>
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Services/>
      <Experience/>

    </>
  );
}

export default App;
