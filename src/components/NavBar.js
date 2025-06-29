import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.webp';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false); // Close mobile menu when link is clicked
  }

  const handleToggle = () => {
    setExpanded(!expanded);
  }

  return (
    <Router>
      <Navbar 
        expand="lg" 
        expanded={expanded}
        className={scrolled ? "scrolled" : ""}
        fixed="top"
      >
        <Container fluid className="px-3 px-md-4">
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="logo"/>
          </Navbar.Brand>
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
            className="border-0"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto mb-2 mb-lg-0">
              <Nav.Link 
                href="#home" 
                className={activeLink === 'home' ? 'active navbar-link mx-2' : 'navbar-link mx-2'} 
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                className={activeLink === 'skills' ? 'active navbar-link mx-2' : 'navbar-link mx-2'} 
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                className={activeLink === 'projects' ? 'active navbar-link mx-2' : 'navbar-link mx-2'} 
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            
            <div className="navbar-text d-flex flex-column flex-lg-row align-items-center">
              <div className="social-icon d-flex justify-content-center mb-3 mb-lg-0 me-lg-3">
                <a href="https://github.com/dodao123" className="me-2">
                  <img src={navIcon1} alt="GitHub" className="white-icon"/>
                </a>
                <a href="https://www.facebook.com/oao.305534" className="me-2">
                  <img src={navIcon2} alt="Facebook" className="white-icon"/>
                </a>
                <a href="https://www.instagram.com/dok.dao/">
                  <img src={navIcon3} alt="Instagram" className="white-icon"/>
                </a>
              </div>
              <a href="https://www.facebook.com/oao.305534" className="text-decoration-none">
                <button className="vvd">
                  <span>Let's Connect</span>
                </button>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}