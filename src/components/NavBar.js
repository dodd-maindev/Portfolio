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
    // Đóng menu mobile sau khi click
    setExpanded(false);
  }

  const handleToggle = () => {
    setExpanded(!expanded);
  }

  const socialLinks = [
    { href: "https://github.com/dodao123", icon: navIcon1, alt: "GitHub" },
    { href: "https://www.facebook.com/oao.305534", icon: navIcon2, alt: "Facebook" },
    { href: "https://www.instagram.com/dok.dao/", icon: navIcon3, alt: "Instagram" }
  ];

  const navItems = [
    { href: "#home", text: "Home", key: "home" },
    { href: "#skills", text: "Skills", key: "skills" },
    { href: "#projects", text: "Projects", key: "projects" }
  ];

  return (
    <Router>
      <Navbar 
        expand="md" 
        className={scrolled ? "scrolled" : ""} 
        expanded={expanded}
        onToggle={handleToggle}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <img 
              src={logo} 
              alt="Logo" 
              className="logo"
              loading="lazy"
            />
          </Navbar.Brand>
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.key}
                  href={item.href}
                  className={activeLink === item.key ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink(item.key)}
                >
                  {item.text}
                </Nav.Link>
              ))}
            </Nav>
            
            <span className="navbar-text">
              <div className="social-icon m-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.alt}
                  >
                    <img 
                      src={social.icon} 
                      alt={social.alt}
                      className="white-icon"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
              <a 
                href="https://www.facebook.com/oao.305534"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="vvd" type="button">
                  <span>Let's Connect</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}