import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.webp";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector('.footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <footer className="footer">
      {/* Space Background */}
      <div className="footer-space-background">
        {/* Stars */}
        <div className="footer-star-field">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i} 
              className={`footer-space-star footer-star-${i % 3 + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Cosmic Decorations */}
        <div className="footer-cosmic-decorations">
          <div className="footer-planet footer-planet-1">🌍</div>
          <div className="footer-planet footer-planet-2">🪐</div>
          <div className="footer-rocket">🚀</div>
          <div className="footer-satellite">🛰️</div>
          <div className="footer-comet">☄️</div>
        </div>

        {/* Nebula */}
        <div className="footer-nebula footer-nebula-purple"></div>
        <div className="footer-nebula footer-nebula-blue"></div>
      </div>

      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className={`footer-logo-section ${isVisible ? 'animate-in' : ''}`}>
              <img src={logo} alt="Logo" className="footer-logo" />
              <div className="footer-logo-glow"></div>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className={`footer-content ${isVisible ? 'animate-in' : ''}`}>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/%C4%91%E1%BB%99-%C4%91%C3%A0o-377926298/" className="social-link">
                  <img src={navIcon1} alt="LinkedIn" />
                  <div className="social-glow"></div>
                </a>
                <a href="https://www.facebook.com/oao.305534" className="social-link">
                  <img src={navIcon2} alt="Facebook" />
                  <div className="social-glow"></div>
                </a>
                <a href="https://www.instagram.com/dok.dao/" className="social-link">
                  <img src={navIcon3} alt="Instagram" />
                  <div className="social-glow"></div>
                </a>
              </div>
              <p className="footer-copyright">
                ✨ Made by Meens • Copyright 2025 • All Rights Reserved ✨
              </p>
              <div className="footer-subtitle">
                🌟 "Exploring the infinite possibilities of code and creativity" 🌟
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #000000 0%, #0a0a1a 25%, #1a0d33 50%, #2d1b4e 75%, #0c0c0c 100%);
          padding: 80px 0 40px;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(177, 156, 217, 0.2);
        }

        /* Space Background */
        .footer-space-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .footer-star-field {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .footer-space-star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: footer-twinkle 4s infinite ease-in-out alternate;
        }

        .footer-star-1 { width: 1px; height: 1px; }
        .footer-star-2 { width: 2px; height: 2px; }
        .footer-star-3 { width: 3px; height: 3px; }

        @keyframes footer-twinkle {
          0% { opacity: 0.2; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.8); }
        }

        /* Cosmic Decorations */
        .footer-cosmic-decorations {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .footer-planet {
          position: absolute;
          font-size: 24px;
          animation: footer-float 8s ease-in-out infinite;
          opacity: 0.7;
        }

        .footer-planet-1 {
          top: 20%;
          left: 5%;
          animation-delay: 0s;
        }

        .footer-planet-2 {
          top: 60%;
          right: 8%;
          animation-delay: 3s;
        }

        .footer-rocket {
          position: absolute;
          top: 30%;
          right: 15%;
          font-size: 20px;
          animation: footer-rocket-fly 12s linear infinite;
          opacity: 0.6;
        }

        .footer-satellite {
          position: absolute;
          top: 70%;
          left: 15%;
          font-size: 18px;
          animation: footer-orbit 10s linear infinite;
          opacity: 0.5;
        }

        .footer-comet {
          position: absolute;
          top: 15%;
          left: 70%;
          font-size: 16px;
          animation: footer-comet-streak 15s ease-in-out infinite;
          opacity: 0.6;
        }

        @keyframes footer-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }

        @keyframes footer-rocket-fly {
          0% { transform: translateX(0px) rotate(45deg); }
          100% { transform: translateX(200px) rotate(45deg); opacity: 0; }
        }

        @keyframes footer-orbit {
          0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
        }

        @keyframes footer-comet-streak {
          0% { transform: translateX(0px) rotate(-30deg); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateX(-150px) rotate(-30deg); opacity: 0; }
        }

        /* Nebula */
        .footer-nebula {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.15;
          animation: footer-nebula-drift 25s infinite ease-in-out;
        }

        .footer-nebula-purple {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, transparent 70%);
          top: 10%;
          left: 20%;
        }

        .footer-nebula-blue {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(30, 144, 255, 0.3) 0%, transparent 70%);
          bottom: 20%;
          right: 25%;
          animation-delay: 8s;
        }

        @keyframes footer-nebula-drift {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }

        /* Container */
        .container {
          position: relative;
          z-index: 2;
        }

        /* Logo Section */
        .footer-logo-section {
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .footer-logo-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .footer-logo {
          max-width: 200px;
          height: auto;
          filter: drop-shadow(0 0 20px rgba(177, 156, 217, 0.6));
          transition: all 0.3s ease;
        }

        .footer-logo:hover {
          filter: drop-shadow(0 0 30px rgba(177, 156, 217, 1));
          transform: scale(1.05);
        }

        .footer-logo-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 220px;
          height: 80px;
          background: radial-gradient(ellipse, rgba(177, 156, 217, 0.2) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          animation: footer-logo-pulse 3s ease-in-out infinite alternate;
          z-index: -1;
        }

        @keyframes footer-logo-pulse {
          0% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
        }

        /* Footer Content */
        .footer-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out 0.2s;
        }

        .footer-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Social Icons */
        .social-icon {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 30px;
        }

        .social-link {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(177, 156, 217, 0.2) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(177, 156, 217, 0.3);
        }

        .social-link:hover {
          background: linear-gradient(135deg, rgba(177, 156, 217, 0.3) 0%, rgba(138, 43, 226, 0.4) 100%);
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 15px 35px rgba(177, 156, 217, 0.4);
        }

        .social-link img {
          width: 24px;
          height: 24px;
          filter: brightness(1.2);
          z-index: 2;
          position: relative;
        }

        .social-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, rgba(177, 156, 217, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .social-link:hover .social-glow {
          opacity: 1;
        }

        /* Copyright Text */
        .footer-copyright {
          color: #b8b8b8;
          font-size: 16px;
          margin-bottom: 15px;
          font-weight: 500;
          text-shadow: 0 0 10px rgba(177, 156, 217, 0.3);
        }

        .footer-subtitle {
          color: #8a6fb7;
          font-size: 14px;
          font-style: italic;
          opacity: 0.8;
          text-shadow: 0 0 8px rgba(138, 111, 183, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .footer {
            padding: 60px 0 30px;
          }

          .footer-logo {
            max-width: 150px;
            margin-bottom: 30px;
          }

          .social-icon {
            justify-content: center;
            margin-bottom: 20px;
          }

          .footer-copyright {
            font-size: 14px;
            text-align: center;
          }

          .footer-subtitle {
            font-size: 12px;
            text-align: center;
          }

          .footer-planet {
            font-size: 18px;
          }

          .footer-rocket,
          .footer-satellite,
          .footer-comet {
            font-size: 14px;
          }

          .text-sm-end {
            text-align: center !important;
          }
        }

        @media (max-width: 576px) {
          .social-link {
            width: 45px;
            height: 45px;
          }

          .social-link img {
            width: 20px;
            height: 20px;
          }

          .footer-cosmic-decorations {
            opacity: 0.5;
          }
        }
      `}</style>
    </footer>
  )
}
