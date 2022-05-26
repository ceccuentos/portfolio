import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import particlesOptions from "./particles.json";


import Navbar from "./components/Navbar";
import Header from './components/Header';

function App() {
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])
  return (
    <>
      <Particles className="particles-canvas" options={particlesOptions} init={particlesInit}/>
      <Navbar/>
      <Header/>
    </>
  );
}

export default App;
