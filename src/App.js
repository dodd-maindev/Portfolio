import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Model3d } from "./components/Model3d";
import { SolarSystem } from './components/SolarSystem';
import { BackgroundMusic } from "./components/BackgroundMusic";
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Main application orchestrator for the portfolio website.
 * @returns {JSX.Element} The rendered React application.
 */
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100,
      delay: 0
    });
  }, []);

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08, 
        duration: 1.2, 
        smoothTouch: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      }}
    >
      <div className="App">
        <BackgroundMusic />
        <Model3d />
        <NavBar />
        <SolarSystem />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;