import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
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
        'service_btrkn1o', // Your EmailJS service ID
        'template_w1oybui', // Your EmailJS template ID
        formDetails,   // Form details to send in the email
        '0qMc2ihvMqSv_0S-Z'      // Your EmailJS user ID
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
        <div className="stars-contact">
          {[...Array(35)].map((_, i) => (
            <div 
              key={i} 
              className={`star-contact star-contact-${i % 4 + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Cosmic Nebula */}
        <div className="nebula-contact nebula-contact-1"></div>
        <div className="nebula-contact nebula-contact-2"></div>
        
        {/* Floating Cosmic Objects */}
        <div className="cosmic-objects-contact">
          <div className="cosmic-object-contact obj-contact-1">📧</div>
          <div className="cosmic-object-contact obj-contact-2">🌟</div>
          <div className="cosmic-object-contact obj-contact-3">💫</div>
          <div className="cosmic-object-contact obj-contact-4">🚀</div>
        </div>
        
        {/* Communication Waves */}
        <div className="comm-waves">
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
                <div className={`contact-image-container ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
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
                  <h2 className="contact-title">
                    <span className="title-icon">📡</span>
                    Get In Touch
                  </h2>
                  <p className="contact-subtitle">Ready to launch your next project? Let's connect across the cosmos!</p>
                  
                  <form onSubmit={handleSubmit} className="cosmic-form">
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <div className="input-wrapper">
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
                        <div className="input-wrapper">
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
                        <div className="input-wrapper">
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
                        <div className="input-wrapper">
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
                        <div className="input-wrapper">
                          <textarea 
                            rows="6" 
                            value={formDetails.message} 
                            placeholder="Message" 
                            onChange={(e) => onFormUpdate('message', e.target.value)}
                            className="cosmic-textarea"
                          ></textarea>
                          <div className="input-glow"></div>
                        </div>
                        <button type="submit" className="cosmic-submit-btn">
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
          animation: twinkle-contact 3s infinite ease-in-out alternate;
        }

        .star-contact-1 { width: 2px; height: 2px; }
        .star-contact-2 { width: 3px; height: 3px; }
        .star-contact-3 { width: 1.5px; height: 1.5px; }
        .star-contact-4 { width: 4px; height: 4px; }

        @keyframes twinkle-contact {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.3); }
        }

        /* Nebula Effects */
        .nebula-contact {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          animation: float-nebula-contact 20s infinite ease-in-out;
        }

        .nebula-contact-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, transparent 70%);
          top: 20%;
          left: -10%;
          animation-delay: 0s;
        }

        .nebula-contact-2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(30, 144, 255, 0.3) 0%, transparent 70%);
          bottom: 10%;
          right: -5%;
          animation-delay: 10s;
        }

        @keyframes float-nebula-contact {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-50px) rotate(180deg); }
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
          animation: float-cosmic-contact 10s infinite ease-in-out;
          opacity: 0.6;
        }

        .obj-contact-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .obj-contact-2 { top: 70%; right: 20%; animation-delay: 3s; }
        .obj-contact-3 { bottom: 30%; left: 80%; animation-delay: 6s; }
        .obj-contact-4 { top: 40%; right: 10%; animation-delay: 9s; }

        @keyframes float-cosmic-contact {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(360deg); }
        }

        /* Communication Waves */
        .comm-waves {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .wave {
          position: absolute;
          border: 2px solid rgba(138, 43, 226, 0.3);
          border-radius: 50%;
          animation: wave-expand 4s infinite ease-out;
        }

        .wave-1 {
          width: 100px;
          height: 100px;
          animation-delay: 0s;
        }

        .wave-2 {
          width: 200px;
          height: 200px;
          animation-delay: 1.3s;
        }

        .wave-3 {
          width: 300px;
          height: 300px;
          animation-delay: 2.6s;
        }

        @keyframes wave-expand {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
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
