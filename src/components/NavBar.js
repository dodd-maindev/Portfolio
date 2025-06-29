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
      // Tính toán chính xác chiều cao navbar
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      
      // Offset thêm một chút để tránh bị che
      const offset = 20;
      const targetPosition = targetElement.offsetTop - navbarHeight - offset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      
      // Nếu khoảng cách quá nhỏ thì không cần animation
      if (Math.abs(distance) < 5) {
        return;
      }
      
      const duration = Math.min(2000, Math.max(800, Math.abs(distance) * 0.8)); // Duration tùy theo khoảng cách
      let start = null;
      let animationId = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Sử dụng easing function mượt mà hơn
        const easeInOutCubic = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        const currentPosition = startPosition + (distance * easeInOutCubic);
        window.scrollTo(0, currentPosition);
        
        if (progress < 1) {
          animationId = requestAnimationFrame(animation);
        } else {
          // Đảm bảo cuối cùng scroll đúng vị trí
          window.scrollTo(0, targetPosition);
        }
      };

      // Hủy animation cũ nếu có
      if (window.currentScrollAnimation) {
        cancelAnimationFrame(window.currentScrollAnimation);
      }
      
      animationId = requestAnimationFrame(animation);
      window.currentScrollAnimation = animationId;
    }
  }

  const onUpdateActiveLink = (value, event) => {
    event.preventDefault();
    setActiveLink(value);
    setExpanded(false);
    
    // Delay nhỏ để navbar collapse hoàn thành
    if (expanded) {
      setTimeout(() => {
        smoothScrollTo(value);
      }, 150);
    } else {
      // Nếu navbar không mở thì scroll ngay
      smoothScrollTo(value);
    }
  }

  const handleToggle = () => {
    setExpanded(!expanded);
  }

  // Cleanup khi component unmount
  useEffect(() => {
    return () => {
      if (window.currentScrollAnimation) {
        cancelAnimationFrame(window.currentScrollAnimation);
      }
    };
  }, []);

  // Thêm intersection observer để update active link khi scroll
  useEffect(() => {
    const sections = ['home', 'skills', 'projects'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -35% 0px', // Tùy chỉnh vùng trigger
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sections.includes(sectionId)) {
            setActiveLink(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

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