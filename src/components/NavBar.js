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

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 second duration
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      // Easing function for smooth animation
      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    }
  }

  const onUpdateActiveLink = (value, event) => {
    event.preventDefault(); // Prevent default anchor link behavior
    setActiveLink(value);
    // Close mobile menu after click
    setExpanded(false);
    // Smooth scroll to the target section
    smoothScrollTo(value);
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
                  onClick={(e) => onUpdateActiveLink(item.key, e)}
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