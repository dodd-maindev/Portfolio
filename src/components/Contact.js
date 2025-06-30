import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import 'aos/dist/aos.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [randomPositions, setRandomPositions] = useState({
    stars: [],
    objects: [],
    nebulas: []
  });

  // Generate random positions for cosmic elements
  useEffect(() => {
    // Generate random positions for stars
    const stars = Array.from({ length: 35 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      size: 0.8 + Math.random() * 1.5
    }));
    
    // Generate random positions for cosmic objects
    const objects = Array.from({ length: 4 }, () => ({
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 80 + 10}%`,
      scale: 0.8 + Math.random() * 0.6,
      rotation: Math.random() * 360
    }));
    
    // Generate random positions for nebulas
    const nebulas = Array.from({ length: 2 }, () => ({
      left: `${Math.random() * 80}%`,
      top: `${Math.random() * 80}%`,
      scale: 0.8 + Math.random() * 0.5,
      opacity: 0.2 + Math.random() * 0.3
    }));
    
    setRandomPositions({ stars, objects, nebulas });
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const contactSection = document.getElementById('connect');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    // Replace the fetch call with EmailJS service
    try {
      const response = await emailjs.send(
        'service_v1k23ut', // Your EmailJS service ID
        'template_t36ao3t', // Your EmailJS template ID
        formDetails,   // Form details to send in the email
        '_y_J5ZneU9jYLve49'      // Your EmailJS user ID
      );

      if (response.status === 200) {
        setStatus({ success: true, message: 'Message sent successfully!' });
        setFormDetails(formInitialDetails);
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Failed to send the email. Please try again later.' });
    }
    
    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      {/* Cosmic Background Elements */}
      <div className="cosmic-background-contact">
        {/* Floating Stars */}
        <div 
          className="stars-contact"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="0"
          data-aos-mirror="true"
          data-aos-anchor-placement="top-bottom"
        >
          {randomPositions.stars.map((star, i) => (
            <div 
              key={i} 
              className={`star-contact star-contact-${i % 4 + 1}`}
              style={{
                left: star.left,
                top: star.top,
                animationDelay: `${star.delay}s`,
                transform: `scale(${star.size})`,
                opacity: 0.5 + Math.random() * 0.5
              }}
            ></div>
          ))}
        </div>
        
        {/* Cosmic Nebula */}
        {randomPositions.nebulas.length > 0 && (
          <>
            <div 
              className="nebula-contact nebula-contact-1"
              data-aos="fade-in"
              data-aos-duration="1500"
              data-aos-delay="300"
              data-aos-mirror="true"
              style={{
                left: randomPositions.nebulas[0]?.left,
                top: randomPositions.nebulas[0]?.top,
                transform: `scale(${randomPositions.nebulas[0]?.scale})`,
                opacity: randomPositions.nebulas[0]?.opacity
              }}
            ></div>
            {randomPositions.nebulas[1] && (
              <div 
                className="nebula-contact nebula-contact-2"
                data-aos="fade-in"
                data-aos-duration="1500"
                data-aos-delay="500"
                data-aos-mirror="true"
                style={{
                  right: randomPositions.nebulas[1]?.left,
                  bottom: randomPositions.nebulas[1]?.top,
                  transform: `scale(${randomPositions.nebulas[1]?.scale})`,
                  opacity: randomPositions.nebulas[1]?.opacity
                }}
              ></div>
            )}
          </>
        )}
        
        {/* Floating Cosmic Objects */}
        <div className="cosmic-objects-contact">
          {randomPositions.objects.length > 0 && (
            <>
              <div 
                className="cosmic-object-contact obj-contact-1"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-mirror="true"
                style={{
                  left: randomPositions.objects[0]?.left,
                  top: randomPositions.objects[0]?.top,
                  transform: `scale(${randomPositions.objects[0]?.scale}) rotate(${randomPositions.objects[0]?.rotation}deg)`
                }}
              >📧</div>
              <div 
                className="cosmic-object-contact obj-contact-2"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
                data-aos-mirror="true"
                style={{
                  left: randomPositions.objects[1]?.left,
                  top: randomPositions.objects[1]?.top,
                  transform: `scale(${randomPositions.objects[1]?.scale}) rotate(${randomPositions.objects[1]?.rotation}deg)`
                }}
              >🌟</div>
              <div 
                className="cosmic-object-contact obj-contact-3"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="600"
                data-aos-mirror="true"
                style={{
                  left: randomPositions.objects[2]?.left,
                  top: randomPositions.objects[2]?.top,
                  transform: `scale(${randomPositions.objects[2]?.scale}) rotate(${randomPositions.objects[2]?.rotation}deg)`
                }}
              >💫</div>
              <div 
                className="cosmic-object-contact obj-contact-4"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="800"
                data-aos-mirror="true"
                style={{
                  left: randomPositions.objects[3]?.left,
                  top: randomPositions.objects[3]?.top,
                  transform: `scale(${randomPositions.objects[3]?.scale}) rotate(${randomPositions.objects[3]?.rotation}deg)`
                }}
              >🚀</div>
            </>
          )}
        </div>
        
        {/* Communication Waves */}
        <div 
          className="comm-waves"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="700"
          data-aos-mirror="true"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
      </div>

      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div 
                  className={`contact-image-container ${isVisible ? "animate__animated animate__zoomIn" : ""}`}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                  data-aos-mirror="true"
                  data-aos-anchor-placement="center-bottom"
                >
                  <img src={contactImg} alt="Contact Us"/>
                  <div className="image-glow"></div>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`contact-form-container ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <h2 
                    className="contact-title"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="0"
                    data-aos-mirror="true"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <span className="title-icon">📡</span>
                    Get In Touch
                  </h2>
                  <p 
                    className="contact-subtitle"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-mirror="true"
                    data-aos-anchor-placement="center-bottom"
                  >
                    Ready to launch your next project? Let's connect across the cosmos!
                  </p>
                  
                  <form onSubmit={handleSubmit} className="cosmic-form">
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <div 
                          className="input-wrapper"
                          data-aos="fade-right"
                          data-aos-duration="600"
                          data-aos-delay="400"
                          data-aos-mirror="true"
                          data-aos-anchor-placement="center-bottom"
                        >
                          <input 
                            type="text" 
                            value={formDetails.firstName} 
                            placeholder="First Name" 
                            onChange={(e) => onFormUpdate('firstName', e.target.value)}
                            className="cosmic-input"
                          />
                          <div className="input-glow"></div>
                        </div>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <div 
                          className="input-wrapper"
                          data-aos="fade-left"
                          data-aos-duration="600"
                          data-aos-delay="500"
                          data-aos-mirror="true"
                          data-aos-anchor-placement="center-bottom"
                        >
                          <input 
                            type="text" 
                            value={formDetails.lastName} 
                            placeholder="Last Name" 
                            onChange={(e) => onFormUpdate('lastName', e.target.value)}
                            className="cosmic-input"
                          />
                          <div className="input-glow"></div>
                        </div>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <div 
                          className="input-wrapper"
                          data-aos="fade-right"
                          data-aos-duration="600"
                          data-aos-delay="600"
                          data-aos-mirror="true"
                          data-aos-anchor-placement="center-bottom"
                        >
                          <input 
                            type="email" 
                            value={formDetails.email} 
                            placeholder="Email Address" 
                            onChange={(e) => onFormUpdate('email', e.target.value)}
                            className="cosmic-input"
                          />
                          <div className="input-glow"></div>
                        </div>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <div 
                          className="input-wrapper"
                          data-aos="fade-left"
                          data-aos-duration="600"
                          data-aos-delay="700"
                          data-aos-mirror="true"
                          data-aos-anchor-placement="center-bottom"
                        >
                          <input 
                            type="tel" 
                            value={formDetails.phone} 
                            placeholder="Phone No." 
                            onChange={(e) => onFormUpdate('phone', e.target.value)}
                            className="cosmic-input"
                          />
                          <div className="input-glow"></div>
                        </div>
                      </Col>
                      <Col size={12} className="px-1">
                        <div 
                          className="input-wrapper"
                          data-aos="fade-up"
                          data-aos-duration="600"
                          data-aos-delay="800"
                          data-aos-mirror="true"
                          data-aos-anchor-placement="center-bottom"
                        >
                          <textarea 
                            rows="6" 
                            value={formDetails.message} 
                            placeholder="Message" 
                            onChange={(e) => onFormUpdate('message', e.target.value)}
                            className="cosmic-textarea"
                          ></textarea>
                          <div className="input-glow"></div>
                        </div>
                        <button 
                          type="submit" 
                          className="cosmic-submit-btn"
                          data-aos="zoom-in"
                          data-aos-duration="600"
                          data-aos-delay="900"
                          data-aos-mirror="true"
                          data-aos-anchor-placement="center-bottom"
                        >
                          <span className="btn-icon">🚀</span>
                          <span className="btn-text">{buttonText}</span>
                          <div className="btn-particles"></div>
                        </button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <div className={`status-message ${status.success === false ? "error" : "success"}`}>
                            <span className="status-icon">{status.success ? "✅" : "❌"}</span>
                            {status.message}
                          </div>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
      <style jsx>{`
        .contact {
          padding: 100px 0;
          background: linear-gradient(135deg, #0a0a1a 0%, #1a0d33 20%, #2d1b4e 40%, #1a1a2e 70%, #0c0c0c 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        /* Cosmic Background Elements */
        .cosmic-background-contact {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .stars-contact {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .star-contact {
          position: absolute;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
          transition: all 0.5s ease;
        }

        .star-contact-1 { 
          width: 2px; 
          height: 2px; 
          animation: move-star-1 50s infinite linear;
          opacity: 0.7;
        }
        
        .star-contact-2 { 
          width: 3px; 
          height: 3px; 
          animation: move-star-2 60s infinite linear;
          opacity: 0.8;
        }
        
        .star-contact-3 { 
          width: 1.5px; 
          height: 1.5px; 
          animation: move-star-3 55s infinite linear;
          opacity: 0.6;
        }
        
        .star-contact-4 { 
          width: 4px; 
          height: 4px; 
          animation: move-star-4 65s infinite linear;
          opacity: 0.9;
        }

        @keyframes move-star-1 {
          0% { 
            transform: translate(0%, 0%) scale(0.8); 
            opacity: 0.5;
          }
          25% { 
            transform: translate(80%, 30%) scale(1.2); 
            opacity: 1;
          }
          50% { 
            transform: translate(50%, 80%) scale(0.9); 
            opacity: 0.8;
          }
          75% { 
            transform: translate(-30%, 40%) scale(1.1); 
            opacity: 0.9;
          }
          100% { 
            transform: translate(0%, 0%) scale(0.8); 
            opacity: 0.5;
          }
        }
        
        @keyframes move-star-2 {
          0% { 
            transform: translate(0%, 0%) scale(1); 
            opacity: 0.6;
          }
          20% { 
            transform: translate(-60%, 50%) scale(1.4); 
            opacity: 1;
          }
          40% { 
            transform: translate(-40%, -60%) scale(0.8); 
            opacity: 0.7;
          }
          60% { 
            transform: translate(70%, -40%) scale(1.2); 
            opacity: 0.9;
          }
          80% { 
            transform: translate(50%, 70%) scale(1); 
            opacity: 0.8;
          }
          100% { 
            transform: translate(0%, 0%) scale(1); 
            opacity: 0.6;
          }
        }
        
        @keyframes move-star-3 {
          0% { 
            transform: translate(0%, 0%) scale(0.9); 
            opacity: 0.5;
          }
          25% { 
            transform: translate(70%, -50%) scale(1.3); 
            opacity: 1;
          }
          50% { 
            transform: translate(-60%, -60%) scale(0.7); 
            opacity: 0.6;
          }
          75% { 
            transform: translate(-50%, 70%) scale(1.2); 
            opacity: 0.9;
          }
          100% { 
            transform: translate(0%, 0%) scale(0.9); 
            opacity: 0.5;
          }
        }
        
        @keyframes move-star-4 {
          0% { 
            transform: translate(0%, 0%) scale(1.1); 
            opacity: 0.7;
          }
          20% { 
            transform: translate(-50%, -70%) scale(1.5); 
            opacity: 1;
          }
          40% { 
            transform: translate(60%, -50%) scale(0.9); 
            opacity: 0.8;
          }
          60% { 
            transform: translate(70%, 60%) scale(1.3); 
            opacity: 0.9;
          }
          80% { 
            transform: translate(-30%, 50%) scale(1); 
            opacity: 0.7;
          }
          100% { 
            transform: translate(0%, 0%) scale(1.1); 
            opacity: 0.7;
          }
        }

        /* Nebula Effects */
        .nebula-contact {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          transition: all 0.8s ease;
        }

        .nebula-contact-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, transparent 70%);
          position: absolute;
          animation: float-nebula-contact-1 80s infinite ease-in-out;
          z-index: 0;
        }

        .nebula-contact-2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(30, 144, 255, 0.3) 0%, transparent 70%);
          position: absolute;
          animation: float-nebula-contact-2 90s infinite ease-in-out;
          z-index: 0;
        }

        @keyframes float-nebula-contact-1 {
          0% { transform: translate(0%, 0%) rotate(0deg) scale(1); opacity: 0.3; }
          20% { transform: translate(30%, 30%) rotate(90deg) scale(1.2); opacity: 0.4; }
          40% { transform: translate(80%, 40%) rotate(180deg) scale(0.9); opacity: 0.5; }
          60% { transform: translate(60%, -30%) rotate(270deg) scale(1.1); opacity: 0.4; }
          80% { transform: translate(20%, -50%) rotate(360deg) scale(1); opacity: 0.3; }
          100% { transform: translate(0%, 0%) rotate(0deg) scale(1); opacity: 0.3; }
        }
        
        @keyframes float-nebula-contact-2 {
          0% { transform: translate(0%, 0%) rotate(0deg) scale(1); opacity: 0.3; }
          20% { transform: translate(-30%, -30%) rotate(-90deg) scale(1.3); opacity: 0.4; }
          40% { transform: translate(-70%, -20%) rotate(-180deg) scale(0.8); opacity: 0.5; }
          60% { transform: translate(-40%, 40%) rotate(-270deg) scale(1.2); opacity: 0.4; }
          80% { transform: translate(-10%, 70%) rotate(-360deg) scale(0.9); opacity: 0.3; }
          100% { transform: translate(0%, 0%) rotate(0deg) scale(1); opacity: 0.3; }
        }

        /* Cosmic Objects */
        .cosmic-objects-contact {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .cosmic-object-contact {
          position: absolute;
          font-size: 28px;
          animation: float-cosmic-contact 15s infinite ease-in-out;
          opacity: 0.8;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));
          transition: all 0.5s ease;
        }

        .obj-contact-1 { 
          position: absolute;
          animation: float-cosmic-contact-1 30s infinite ease-in-out;
          z-index: 1;
        }
        
        .obj-contact-2 { 
          position: absolute;
          animation: float-cosmic-contact-2 35s infinite ease-in-out;
          z-index: 1;
        }
        
        .obj-contact-3 { 
          position: absolute;
          animation: float-cosmic-contact-3 40s infinite ease-in-out alternate;
          z-index: 1;
        }
        
        .obj-contact-4 { 
          position: absolute;
          animation: float-cosmic-contact-4 45s infinite ease-in-out alternate;
          z-index: 1;
        }

        @keyframes float-cosmic-contact-1 {
          0% { transform: translateY(0%) translateX(0%) rotate(0deg); }
          20% { transform: translateY(-30%) translateX(40%) rotate(90deg); }
          40% { transform: translateY(40%) translateX(70%) rotate(180deg); }
          60% { transform: translateY(70%) translateX(20%) rotate(270deg); }
          80% { transform: translateY(10%) translateX(-30%) rotate(360deg); }
          100% { transform: translateY(0%) translateX(0%) rotate(0deg); }
        }
        
        @keyframes float-cosmic-contact-2 {
          0% { transform: translateY(0%) translateX(0%) rotate(0deg); }
          20% { transform: translateY(50%) translateX(-40%) rotate(-90deg); }
          40% { transform: translateY(-20%) translateX(-70%) rotate(-180deg); }
          60% { transform: translateY(-60%) translateX(-30%) rotate(-270deg); }
          80% { transform: translateY(-30%) translateX(20%) rotate(-360deg); }
          100% { transform: translateY(0%) translateX(0%) rotate(0deg); }
        }
        
        @keyframes float-cosmic-contact-3 {
          0% { transform: translateY(0%) translateX(0%) scale(1) rotate(0deg); }
          25% { transform: translateY(-60%) translateX(-50%) scale(1.1) rotate(120deg); }
          50% { transform: translateY(30%) translateX(-80%) scale(0.9) rotate(240deg); }
          75% { transform: translateY(70%) translateX(30%) scale(1.2) rotate(360deg); }
          100% { transform: translateY(0%) translateX(0%) scale(1) rotate(0deg); }
        }
        
        @keyframes float-cosmic-contact-4 {
          0% { transform: translateY(0%) translateX(0%) scale(1) rotate(0deg); }
          25% { transform: translateY(60%) translateX(60%) scale(1.2) rotate(-120deg); }
          50% { transform: translateY(-40%) translateX(70%) scale(0.95) rotate(-240deg); }
          75% { transform: translateY(-70%) translateX(-20%) scale(1.1) rotate(-360deg); }
          100% { transform: translateY(0%) translateX(0%) scale(1) rotate(0deg); }
        }

        /* Communication Waves */
        .comm-waves {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: comm-waves-float 8s infinite ease-in-out;
        }

        @keyframes comm-waves-float {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          25% { transform: translate(-48%, -52%) rotate(3deg); }
          50% { transform: translate(-50%, -48%) rotate(0deg); }
          75% { transform: translate(-52%, -50%) rotate(-3deg); }
          100% { transform: translate(-50%, -50%) rotate(0deg); }
        }

        .wave {
          position: absolute;
          border: 2px solid rgba(138, 43, 226, 0.4);
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(138, 43, 226, 0.2);
        }

        .wave-1 {
          width: 100px;
          height: 100px;
          animation: wave-expand-1 5s infinite ease-out;
        }

        .wave-2 {
          width: 200px;
          height: 200px;
          animation: wave-expand-2 5s infinite ease-out;
          animation-delay: 1.6s;
        }

        .wave-3 {
          width: 300px;
          height: 300px;
          animation: wave-expand-3 5s infinite ease-out;
          animation-delay: 3.2s;
        }

        @keyframes wave-expand-1 {
          0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
            border-color: rgba(138, 43, 226, 0.6);
          }
          100% {
            transform: translate(-50%, -50%) scale(1) rotate(20deg);
            opacity: 0;
            border-color: rgba(138, 43, 226, 0.1);
          }
        }
        
        @keyframes wave-expand-2 {
          0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
            border-color: rgba(30, 144, 255, 0.6);
          }
          100% {
            transform: translate(-50%, -50%) scale(1) rotate(-15deg);
            opacity: 0;
            border-color: rgba(30, 144, 255, 0.1);
          }
        }
        
        @keyframes wave-expand-3 {
          0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
            border-color: rgba(170, 54, 124, 0.6);
          }
          100% {
            transform: translate(-50%, -50%) scale(1) rotate(10deg);
            opacity: 0;
            border-color: rgba(170, 54, 124, 0.1);
          }
        }

        /* Contact Image */
        .contact-image-container {
          position: relative;
          text-align: center;
        }

        .contact-image-container img {
          max-width: 100%;
          height: auto;
          filter: drop-shadow(0 0 30px rgba(138, 43, 226, 0.5));
          transition: all 0.3s ease;
        }

        .contact-image-container:hover img {
          transform: scale(1.05);
          filter: drop-shadow(0 0 50px rgba(138, 43, 226, 0.8));
        }

        .image-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .contact-image-container:hover .image-glow {
          opacity: 1;
          animation: pulse-glow-contact 2s infinite;
        }

        @keyframes pulse-glow-contact {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }

        /* Contact Form */
        .contact-form-container {
          position: relative;
          z-index: 2;
        }

        .contact-title {
          font-size: 42px;
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
          text-shadow: 0 0 30px rgba(138, 43, 226, 0.8);
          animation: glow-pulse-contact 3s infinite ease-in-out alternate;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .title-icon {
          font-size: 36px;
          animation: rotate-contact 10s linear infinite;
        }

        @keyframes rotate-contact {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes glow-pulse-contact {
          0% { text-shadow: 0 0 20px rgba(138, 43, 226, 0.5); }
          100% { text-shadow: 0 0 40px rgba(138, 43, 226, 1), 0 0 60px rgba(138, 43, 226, 0.5); }
        }

        .contact-subtitle {
          color: #B8B8B8;
          font-size: 16px;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .cosmic-form {
          position: relative;
        }

        .input-wrapper {
          position: relative;
          margin-bottom: 20px;
        }

        .cosmic-input, .cosmic-textarea {
          width: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          color: white;
          font-size: 16px;
          padding: 15px 20px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .cosmic-input:focus, .cosmic-textarea:focus {
          outline: none;
          border-color: rgba(138, 43, 226, 0.8);
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.3);
          transform: translateY(-2px);
        }

        .cosmic-input::placeholder, .cosmic-textarea::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .input-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(138, 43, 226, 0.2) 0%, rgba(30, 144, 255, 0.2) 100%);
          border-radius: 15px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          filter: blur(10px);
        }

        .input-wrapper:hover .input-glow,
        .cosmic-input:focus + .input-glow,
        .cosmic-textarea:focus + .input-glow {
          opacity: 1;
        }

        .cosmic-submit-btn {
          background: linear-gradient(135deg, rgba(138, 43, 226, 0.8) 0%, rgba(30, 144, 255, 0.8) 100%);
          border: none;
          border-radius: 25px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          padding: 15px 40px;
          margin-top: 20px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 150px;
          justify-content: center;
        }

        .cosmic-submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(138, 43, 226, 0.4);
        }

        .cosmic-submit-btn:active {
          transform: translateY(-1px);
        }

        .btn-icon {
          font-size: 18px;
          animation: rocket-float 2s infinite ease-in-out;
        }

        @keyframes rocket-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }

        .btn-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .cosmic-submit-btn:hover .btn-particles {
          transform: translateX(100%);
        }

        .status-message {
          margin-top: 20px;
          padding: 15px 20px;
          border-radius: 15px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          backdrop-filter: blur(10px);
          animation: fadeInUp-contact 0.5s ease-out;
        }

        .status-message.success {
          background: linear-gradient(135deg, rgba(0, 255, 0, 0.2) 0%, rgba(0, 200, 0, 0.1) 100%);
          border: 1px solid rgba(0, 255, 0, 0.3);
          color: #90EE90;
        }

        .status-message.error {
          background: linear-gradient(135deg, rgba(255, 0, 0, 0.2) 0%, rgba(200, 0, 0, 0.1) 100%);
          border: 1px solid rgba(255, 0, 0, 0.3);
          color: #FFB6C1;
        }

        @keyframes fadeInUp-contact {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .status-icon {
          font-size: 16px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .contact {
            padding: 80px 0;
          }
          
          .contact-title {
            font-size: 32px;
          }
          
          .cosmic-object-contact,
          .nebula-contact,
          .comm-waves {
            display: none;
          }
          
          .cosmic-input, .cosmic-textarea {
            padding: 12px 15px;
            font-size: 14px;
          }
          
          .cosmic-submit-btn {
            padding: 12px 30px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .stars-contact .star-contact {
            display: none;
          }
          
          .contact-title {
            font-size: 28px;
            flex-direction: column;
            gap: 10px;
          }
          
          .contact-subtitle {
            font-size: 14px;
          }
          
          .cosmic-input, .cosmic-textarea {
            padding: 10px 12px;
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  )
}
