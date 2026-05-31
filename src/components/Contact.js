import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import { CosmicContactBackground } from "./CosmicContactBackground";
import "./Contact.css";

/**
 * Contact form section with styled cosmic effects and EmailJS integration.
 * @returns {JSX.Element} The rendered Contact component.
 */
export const Contact = () => {
  const formInitialDetails = { firstName: '', lastName: '', email: '', phone: '', message: '' };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [randomPositions, setRandomPositions] = useState({ stars: [], objects: [], nebulas: [] });

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setIsActive(e.isIntersecting), { threshold: 0.05 });
    const contactSec = document.getElementById('connect');
    if (contactSec) observer.observe(contactSec);
    return () => contactSec && observer.unobserve(contactSec);
  }, []);

  useEffect(() => {
    const stars = Array.from({ length: 35 }, () => ({
      left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, delay: Math.random() * 5, size: 0.8 + Math.random() * 1.5
    }));
    const objects = Array.from({ length: 4 }, () => ({
      left: `${Math.random() * 80 + 10}%`, top: `${Math.random() * 80 + 10}%`, scale: 0.8 + Math.random() * 0.6, rotation: Math.random() * 360
    }));
    const nebulas = Array.from({ length: 2 }, () => ({
      left: `${Math.random() * 80}%`, top: `${Math.random() * 80}%`, scale: 0.8 + Math.random() * 0.5, opacity: 0.2 + Math.random() * 0.3
    }));
    setRandomPositions({ stars, objects, nebulas });
  }, []);

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      const response = await emailjs.send(
        'service_v1k23ut', 'template_t36ao3t', formDetails, '_y_J5ZneU9jYLve49'
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
    <section className={`contact ${isActive ? 'active' : ''}`} id="connect">
      <CosmicContactBackground randomPositions={randomPositions} />
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`contact-image-container ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
                  <img src={contactImg} alt="Contact Us" />
                  <div className="image-glow" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`contact-form-container ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <h2 className="contact-title"><span className="title-icon">📡</span>Get In Touch</h2>
                  <p className="contact-subtitle">Ready to launch your next project? Let's connect across the cosmos!</p>
                  <form onSubmit={handleSubmit} className="cosmic-form">
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <div className="input-wrapper">
                          <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} className="cosmic-input" />
                          <div className="input-glow" />
                        </div>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <div className="input-wrapper">
                          <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} className="cosmic-input" />
                          <div className="input-glow" />
                        </div>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <div className="input-wrapper">
                          <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} className="cosmic-input" />
                          <div className="input-glow" />
                        </div>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <div className="input-wrapper">
                          <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} className="cosmic-input" />
                          <div className="input-glow" />
                        </div>
                      </Col>
                      <Col size={12} className="px-1">
                        <div className="input-wrapper">
                          <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} className="cosmic-textarea" />
                          <div className="input-glow" />
                        </div>
                        <button type="submit" className="cosmic-submit-btn">
                          <span className="btn-icon">🚀</span><span className="btn-text">{buttonText}</span><div className="btn-particles" />
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <div className={`status-message ${status.success === false ? "error" : "success"}`}>
                            <span className="status-icon">{status.success ? "✅" : "❌"}</span>{status.message}
                          </div>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
