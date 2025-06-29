// Skills.js
import { useState, useEffect } from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Create intersection observer for entry animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillSection = document.getElementById('skills');
    if (skillSection) {
      observer.observe(skillSection);
    }

    return () => {
      if (skillSection) {
        observer.unobserve(skillSection);
      }
    };
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const skillDetails = {
    Frontend: `HTML5, CSS3 (strong grasp of styling, animations, layouts)
JavaScript basics (can expand to frameworks later)
EJS templating engine
Responsive design & UI effects (like hover glow, scroll-based interaction)`,

    Backend: `Node.js with Express
RESTful API creation
JWT authentication
File handling with fs, image uploads
Argon2 password hashing for security`,

    Database: `- MySQL / SQL queries
CRUD operations
Joined tables, foreign keys, relational data management
- Mongoose (MongoDB):MongoDB document structure & schema design ,CRUD operations for MongoDB. Data relationships (embedding vs. referencing)
Handling complex queries and population in Mongoose ,Integrating MongoDB with Express (via Mongoose ORM)`,

    "Game Development": `Unity (C#):
- Car controller scripts (custom physics, boost feature, AI navigation using NavMesh)
- Gesture-based control with Python integration
- Creating mini-games and mechanics
- Asset management and UI design in Unity

Python (for AI/LLM integration):
- Backend logic for game or web support
- Image or gesture recognition (possibly with OpenCV or TensorFlow)
- Communication with Unity via sockets or APIs`,

    "Soft Skills": `Problem-solving and debugging
Willingness to iterate and improve UI/UX
Self-driven learner
Combines logic with creative design`
  };

  return (
    <section className="skill" id="skills">
      {/* Cosmic Background Elements */}
      <div className="cosmic-background">
        {/* Floating Stars */}
        <div className="stars">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className={`star star-${i % 5 + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Orbiting Planets */}
        <div className="cosmic-orbit orbit-1">
          <div className="cosmic-planet planet-1">🪐</div>
        </div>
        <div className="cosmic-orbit orbit-2">
          <div className="cosmic-planet planet-2">🌟</div>
        </div>
        <div className="cosmic-orbit orbit-3">
          <div className="cosmic-planet planet-3">🌙</div>
        </div>
        
        {/* Shooting Stars */}
        <div className="shooting-star shooting-star-1"></div>
        <div className="shooting-star shooting-star-2"></div>
        <div className="shooting-star shooting-star-3"></div>
        
        {/* Cosmic Dust */}
        <div className="cosmic-dust">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="dust-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`skill-bx wow zoomIn ${isVisible ? 'animate-in' : ''}`}>
              <h2>Skills</h2>
              <p>🔧 Technical Skills<br /></p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item skill-item-1" onClick={() => setSelectedSkill("Frontend")}>
                  <div className="skill-icon-wrapper">
                    <img src={meter1} alt="Frontend" />
                    <div className="skill-glow"></div>
                  </div>
                  <h5>Frontend</h5>
                </div>
                <div className="item skill-item-2" onClick={() => setSelectedSkill("Backend")}>
                  <div className="skill-icon-wrapper">
                    <img src={meter2} alt="Backend" />
                    <div className="skill-glow"></div>
                  </div>
                  <h5>Backend</h5>
                </div>
                <div className="item skill-item-3" onClick={() => setSelectedSkill("Database")}>
                  <div className="skill-icon-wrapper">
                    <img src={meter3} alt="Database" />
                    <div className="skill-glow"></div>
                  </div>
                  <h5>Database</h5>
                </div>
                <div className="item skill-item-4" onClick={() => setSelectedSkill("Game Development")}>
                  <div className="skill-icon-wrapper">
                    <img src={meter1} alt="Game Dev" />
                    <div className="skill-glow"></div>
                  </div>
                  <h5>Game Development</h5>
                </div>
                <div className="item skill-item-5" onClick={() => setSelectedSkill("Soft Skills")}>
                  <div className="skill-icon-wrapper">
                    <img src={meter2} alt="Soft Skills" />
                    <div className="skill-glow"></div>
                  </div>
                  <h5>Soft Skills</h5>
                </div>
              </Carousel>

              {selectedSkill && (
                <div className={`skill-detail-box ${selectedSkill ? 'show-detail' : ''}`}>
                  <h3>{selectedSkill} Details</h3>
                  <pre>{skillDetails[selectedSkill]}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Decor" />
      
      <style jsx>{`
        .skill {
          padding: 100px 0 50px 0;
          background: linear-gradient(135deg, #0a0a1a 0%, #1a0d33 30%, #2d1b4e 60%, #0c0c0c 100%);
          position: relative;
          z-index: 1;
          overflow: hidden;
          opacity:0.9
        }

        /* Cosmic Background Elements */
        .cosmic-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        /* Floating Stars */
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 2.5s infinite ease-in-out alternate;
        }

        .star-1 { width: 2px; height: 2px; }
        .star-2 { width: 3px; height: 3px; }
        .star-3 { width: 1px; height: 1px; }
        .star-4 { width: 4px; height: 4px; }
        .star-5 { width: 2.5px; height: 2.5px; }

        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.2); }
        }

        /* Orbiting Planets */
        .cosmic-orbit {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: rotate 20s linear infinite;
        }

        .orbit-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          right: 10%;
          animation-duration: 15s;
        }

        .orbit-2 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          left: 5%;
          animation-duration: 25s;
          animation-direction: reverse;
        }

        .orbit-3 {
          width: 120px;
          height: 120px;
          top: 60%;
          right: 5%;
          animation-duration: 18s;
        }

        .cosmic-planet {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 30px;
          animation: counter-rotate 20s linear infinite reverse;
        }

        .orbit-1 .cosmic-planet { animation-duration: 15s; }
        .orbit-2 .cosmic-planet { animation-duration: 25s; }
        .orbit-3 .cosmic-planet { animation-duration: 18s; }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes counter-rotate {
          0% { transform: translateX(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(-360deg); }
        }

        /* Shooting Stars */
        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: linear-gradient(45deg, white, transparent);
          border-radius: 50%;
        }

        .shooting-star-1 {
          top: 20%;
          left: -10%;
          animation: shoot 3s linear infinite;
          animation-delay: 0s;
        }

        .shooting-star-2 {
          top: 60%;
          left: -10%;
          animation: shoot 4s linear infinite;
          animation-delay: 2s;
        }

        .shooting-star-3 {
          top: 40%;
          left: -10%;
          animation: shoot 3.5s linear infinite;
          animation-delay: 4s;
        }

        @keyframes shoot {
          0% { 
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          70% { opacity: 1; }
          100% { 
            transform: translateX(300px) translateY(-100px);
            opacity: 0;
          }
        }

        /* Cosmic Dust */
        .cosmic-dust {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .dust-particle {
          position: absolute;
          width: 1px;
          height: 1px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          animation: float 6s infinite ease-in-out;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }

        /* Main Skills Box */
        .skill-bx {
          background: linear-gradient(135deg, rgba(12, 12, 12, 0.2) 0%, rgba(26, 26, 46, 0.2) 0%);
          border-radius: 64px;
          text-align: center;
          padding: 60px 50px;
          margin-top: -60px;
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.3),
            0 0 50px rgba(138, 43, 226, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }

        .skill-bx.animate-in {
          opacity: 0.75;
          transform: translateY(0);
        }

        .skill-bx::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 66px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .skill-bx:hover::before {
          opacity: 0.7;
        }

        .skill h2 {
          font-size: 45px;
          font-weight: 700;
          color: white;
          margin-bottom: 30px;
          text-shadow: 0 0 20px rgba(138, 43, 226, 0.5);
          animation: glow-pulse 2s infinite ease-in-out alternate;
        }

        @keyframes glow-pulse {
          0% { text-shadow: 0 0 20px rgba(138, 43, 226, 0.5); }
          100% { text-shadow: 0 0 30px rgba(138, 43, 226, 0.8), 0 0 40px rgba(138, 43, 226, 0.3); }
        }

        .skill p {
          color: #B8B8B8;
          font-size: 18px;
          letter-spacing: 0.8px;
          line-height: 1.5em;
          margin: 14px auto 30px auto;
          text-align: center;
          width: 56%;
        }

        .skill-slider {
          width: 80%;
          margin: 0 auto;
          position: relative;
        }

        .item {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          border-radius: 15px;
          padding: 25px 20px;
          margin: 0 10px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
        }

        .item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .item:hover::before {
          left: 100%;
        }

        .skill-item-1 { animation: slideInUp 0.6s 0.1s forwards; }
        .skill-item-2 { animation: slideInUp 0.6s 0.2s forwards; }
        .skill-item-3 { animation: slideInUp 0.6s 0.3s forwards; }
        .skill-item-4 { animation: slideInUp 0.6s 0.4s forwards; }
        .skill-item-5 { animation: slideInUp 0.6s 0.5s forwards; }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .item:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(138, 43, 226, 0.2) 100%);
          transform: translateY(-10px) scale(1.05);
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.3),
            0 0 30px rgba(138, 43, 226, 0.4);
        }

        .skill-icon-wrapper {
          position: relative;
          margin-bottom: 15px;
        }

        .item img {
          width: 50%;
          margin: 0 auto;
          transition: all 0.3s ease;
          filter: drop-shadow(0 0 10px rgba(138, 43, 226, 0.3));
        }

        .item:hover img {
          transform: rotate(10deg) scale(1.1);
          filter: drop-shadow(0 0 20px rgba(138, 43, 226, 0.6));
        }

        .skill-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .item:hover .skill-glow {
          opacity: 1;
          animation: pulse-glow 1.5s infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }

        .item h5 {
          color: white;
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          transition: all 0.3s ease;
        }

        .item:hover h5 {
          color: #b19cd9;
          text-shadow: 0 0 10px rgba(177, 156, 217, 0.5);
        }

        .skill-detail-box {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
          border-radius: 20px;
          padding: 30px;
          margin-top: 40px;
          text-align: left;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s forwards;
          position: relative;
          overflow: hidden;
        }

        .skill-detail-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-detail-box h3 {
          color: #b19cd9;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 15px;
          text-shadow: 0 0 15px rgba(177, 156, 217, 0.4);
        }

        .skill-detail-box pre {
          color: #B8B8B8;
          font-size: 16px;
          line-height: 1.6;
          white-space: pre-wrap;
          font-family: inherit;
          margin: 0;
        }

        .background-image-left {
          top: 28%;
          position: absolute;
          bottom: 0;
          width: 40%;
          z-index: -1;
          opacity: 0.6;
        }

        @media (max-width: 768px) {
          .skill {
            padding: 80px 0 30px 0;
            margin-top: 0px;
          }
          
          .cosmic-orbit {
            display: none;
          }
          
          .skill-bx {
            padding: 40px 30px;
            margin-top: -30px;
          }
          
          .skill h2 {
            font-size: 35px;
          }
          
          .skill p {
            width: 90%;
            font-size: 16px;
          }
          
          .skill-slider {
            width: 95%;
          }
          
          .item {
            margin: 0 5px;
            padding: 15px;
          }
          
          .skill-detail-box {
            padding: 20px;
            margin-top: 30px;
          }
          
          .skill-detail-box h3 {
            font-size: 20px;
          }
          
          .skill-detail-box pre {
            font-size: 14px;
          }
          
          .shooting-star {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .stars .star {
            display: none;
          }
          
          .cosmic-dust {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
