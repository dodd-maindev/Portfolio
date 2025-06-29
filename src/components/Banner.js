import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [trails, setTrails] = useState([]);
  const toRotate = [ "Web Developer", "Game Developer", "Software Engineer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  },[text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  // Trail effect for plane
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails(prevTrails => {
        const now = Date.now();
        const filteredTrails = prevTrails.filter(trail => now - trail.timestamp < 4000);
        
        const planeElement = document.querySelector('.flying-plane');
        if (planeElement) {
          const rect = planeElement.getBoundingClientRect();
          const bannerElement = document.querySelector('.banner');
          const bannerRect = bannerElement ? bannerElement.getBoundingClientRect() : { left: 0, top: 0 };
          
          const newTrail = {
            id: Math.random(),
            x: rect.left - bannerRect.left + rect.width / 2,
            y: rect.top - bannerRect.top + rect.height / 2,
            timestamp: now
          };
          return [...filteredTrails, newTrail];
        }
        return filteredTrails;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner" id="home">
      {/* Space Decorations */}
      <div className="space-decorations">
        {/* Stars */}
        <div className="star star-1">⭐</div>
        <div className="star star-2">✨</div>
        <div className="star star-3">⭐</div>
        <div className="star star-4">✨</div>
        <div className="star star-5">⭐</div>
        <div className="star star-6">✨</div>
        
        {/* Planets */}
        <div className="planet planet-1">🪐</div>
        <div className="planet planet-2">🌍</div>
        <div className="planet planet-3">🌙</div>
        
        {/* Rockets */}
        <div className="rocket rocket-1">
          <div className="rocket-spin">🚀</div>
        </div>
        <div className="rocket rocket-2">🛸</div>
        
        {/* Satellites */}
        <div className="satellite satellite-1">🛰️</div>
        
        {/* Comets */}

      </div>

      {/* Flying Plane */}

      {/* Trail Effect */}
      {trails.map(trail => {
        const age = Date.now() - trail.timestamp;
        const opacity = Math.max(0, 1 - age / 4000);
        return (
          <div
            key={trail.id}
            className="plane-trail"
            style={{
              position: 'absolute',
              left: trail.x,
              top: trail.y,
              opacity: opacity,
              pointerEvents: 'none',
              zIndex: 1
            }}
          >
            ✨
          </div>
        );
      })}

      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>Hi! I'm Meens <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Game Developer", "Software Engineer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Hi, My name is <span className="text-purple-400 font-semibold">Đào Đức Độ (MEENS) </span>, I’m a passionate <span className="text-purple-400 font-semibold">Web Developer, Game Developer, and Software Engineer</span> with a strong foundation in full-stack development, game mechanics, and backend systems. I enjoy turning ideas into real-world applications that are both functional and engaging.

As a Web Developer, I specialize in crafting dynamic and user-friendly web applications using technologies like React, Node.js, SQL, Mongoose, and tools like Docker and Postman. I’m experienced in building responsive frontends, robust APIs, and scalable databases.

In the world of Game Development, I bring stories to life with Unity, leveraging C# and integrating with Python when needed for AI or external logic. I enjoy building both gameplay mechanics and technical systems that enhance the player's experience.

As a Software Engineer, I thrive on solving complex problems, optimizing performance, and designing systems that are maintainable and efficient. I'm always eager to learn, explore new technologies, and build meaningful products.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={0} md={6} xl={5} className="d-none d-md-block">
  <TrackVisibility>
    {({ isVisible }) =>
      <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
        <img src={headerImg} alt="Header Img" />
      </div>}
  </TrackVisibility>
</Col>

        </Row>
      </Container>

      <style jsx>{`
        /* Basic Layout Styles */
        .banner {
          padding: 60px 0;
          color: white;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
          position: relative;
          z-index: 3;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }

        .col-12, .col-md-6, .col-xl-7, .col-xl-5 {
          padding: 0 15px;
        }

        .col-12 { width: 100%; }

        @media (min-width: 768px) {
          .col-md-6 { width: 50%; }
        }

        @media (min-width: 1200px) {
          .col-xl-7 { width: 58.333333%; }
          .col-xl-5 { width: 41.666667%; }
        }

        .align-items-center {
          align-items: center;
        }

        .tagline {
          color: #b19cd9;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.8px;
          padding: 8px 10px;
          background: linear-gradient(90.21deg, rgba(177, 156, 217, 0.5) -5.91%, rgba(177, 156, 217, 0) 111.58%);
          border: 1px solid rgba(177, 156, 217, 0.5);
          display: inline-block;
          margin-bottom: 16px;
        }

        h1 {
          font-size: 65px;
          font-weight: 700;
          letter-spacing: 0.8px;
          line-height: 1;
          margin-bottom: 20px;
          display: block;
        }

        .txt-rotate .wrap {
          border-right: 0.08em solid #666;
        }

        p {
          color: #b8b8b8;
          font-size: 18px;
          letter-spacing: 0.8px;
          line-height: 1.5em;
          width: 96%;
          margin-bottom: 40px;
        }

        .text-purple-400 {
          color: #c084fc;
        }

        .font-semibold {
          font-weight: 600;
        }

        .btn-connect {
          color: #fff;
          font-weight: 700;
          font-size: 20px;
          margin-top: 60px;
          letter-spacing: 0.8px;
          display: flex;
          align-items: center;
          background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
          border: 1px solid rgba(255, 255, 255, 0.5);
          padding: 18px 34px;
          cursor: pointer;
          position: relative;
          background-color: transparent;
          transition: 0.3s ease-in-out;
        }

        .btn-connect:hover {
          background: linear-gradient(90.21deg, rgba(170, 54, 124, 1) -5.91%, rgba(74, 47, 189, 1) 111.58%);
        }

        .header-img-placeholder {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, rgba(177, 156, 217, 0.1) 0%, rgba(170, 54, 124, 0.1) 100%);
          border: 2px dashed rgba(177, 156, 217, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;\

        }
          

        .placeholder-content {
          color: rgba(177, 156, 217, 0.6);
          font-size: 18px;
          font-weight: 600;
        }

        /* Flying Plane Animation - Elliptical path with proper rotation */
        .flying-plane {
          position: fixed;
          top: 50%;
          left: 50%;
          width: 50px;
          height: 300px;
          transform: translate(-50%, -50%) rotate(0deg) translateX(330px) scaleY(0.5);
          animation: flyEllipse 10s linear infinite;
        }

        @keyframes flyEllipse {
          0% {
            left: calc(50% + 300px);
            top: calc(50% + 0px);
            transform: rotate(-90deg);
          }
          12.5% {
            left: calc(50% + 212px);
            top: calc(50% - 106px);
            transform: rotate(-135deg);
          }
          25% {
            left: calc(50% + 0px);
            top: calc(50% - 150px);
            transform: rotate(-180deg);
          }
          37.5% {
            left: calc(50% - 212px);
            top: calc(50% - 106px);
            transform: rotate(-225deg);
          }
          50% {
            left: calc(50% - 300px);
            top: calc(50% + 0px);
            transform: rotate(-270deg);
          }
          62.5% {
            left: calc(50% - 212px);
            top: calc(50% + 106px);
            transform: rotate(-315deg);
          }
          75% {
            left: calc(50% + 0px);
            top: calc(50% + 150px);
            transform: rotate(-360deg);
          }
          87.5% {
            left: calc(50% + 212px);
            top: calc(50% + 106px);
            transform: rotate(-405deg);
          }
          100% {
            left: calc(50% + 300px);
            top: calc(50% + 0px);
            transform: rotate(-450deg);
          }
        }

        /* Trail Effect */
        .plane-trail {
          font-size: 12px;
          animation: fadeTrail 4s linear forwards;
          color: #b19cd9;
        }

        @keyframes fadeTrail {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.3);
          }
        }

        /* Space Decorations */
        .space-decorations {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        /* Stars Animation */
        .star {
          position: absolute;
          font-size: 16px;
          animation: twinkle 3s ease-in-out infinite alternate;
          color: #fff;
        }

        .star-1 { top: 10%; left: 10%; animation-delay: 0s; }
        .star-2 { top: 15%; right: 15%; animation-delay: 0.5s; }
        .star-3 { top: 60%; left: 5%; animation-delay: 1s; }
        .star-4 { top: 70%; right: 10%; animation-delay: 1.5s; }
        .star-5 { top: 40%; left: 80%; animation-delay: 2s; }
        .star-6 { top: 80%; right: 30%; animation-delay: 2.5s; }

        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }

        /* Planets Animation */
        .planet {
          position: absolute;
          font-size: 50px;
          animation: float 6s ease-in-out infinite;
        }

        .planet-1 { top: 25%; right: 8%; animation-delay: 0s; }
        .planet-2 { bottom: 25%; left: 2%; animation-delay: 2s; }
        .planet-3 { top: 8%; left: 75%; animation-delay: 4s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        /* Rockets Animation */
        .rocket {
          position: absolute;
          font-size: 40px;
        }

        .rocket-1 { 
          bottom: 26%; 
          left: 3%;
          animation: rocket-orbit-earth 15s linear infinite;
          transform-origin: 25px 25px;
        }

        .rocket-spin {
          animation: rocket-self-spin 8s linear infinite;
        }

        .rocket-2 { 
          bottom: 50%; 
          right: 90%;
          animation: rocket-fly-2 1s linear infinite;
        }

        @keyframes rocket-orbit-earth {
          0% { 
            transform: rotate(0deg) translateX(60px) rotate(90deg);
          }
          25% { 
            transform: rotate(-90deg) translateX(60px) rotate(270deg);
          }
          50% { 
            transform: rotate(-180deg) translateX(60px) rotate(450deg);
          }
          75% { 
            transform: rotate(-270deg) translateX(60px) rotate(630deg);
          }
          100% { 
            transform: rotate(-360deg) translateX(60px) rotate(810deg);
          }
        }

        @keyframes rocket-fly-2 {
          0% { 
            transform: translateX(20px) translateY(-10px) rotate(-45deg);
            opacity: 0;
          }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { 
            transform: translateX(-100px) translateY(30px) rotate(-45deg);
            opacity: 0;
          }
        }

        @keyframes rocket-self-spin {
          0% { 
            transform: rotate(0deg);
          }
          100% { 
            transform: rotate(360deg);
          }
        }

        /* Satellite Animation */
        .satellite {
          position: absolute;
          font-size: 120px;
          animation: orbit 5s linear infinite;
          top: 5%; 
          right: 30%;
          transform-origin: 200px 0px;
        }

        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }

        /* Comet Animation */
        .comet {
          position: absolute;
          font-size: 40px;
          top: 20%; 
          animation: comet-streak 30s ease-in-out infinite;
        }

        @keyframes comet-streak {
          0% { 
            right: -50px; 
            opacity: 0;
            transform: rotate(-45deg) scale(0.5);
          }
          20% { 
            opacity: 1;
            transform: rotate(-45deg) scale(1);
          }
          80% { 
            opacity: 1;
            transform: rotate(-45deg) scale(1);
          }
          100% { 
            right: 100%; 
            opacity: 0;
            transform: rotate(-45deg) scale(0.5);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .flying-plane { font-size: 20px; }
          .star { font-size: 35px; }
          .planet { font-size: 18px; }
          .rocket { font-size: 16px; }
          .satellite { font-size: 60px; }
          .comet { font-size: 12px; }
          
          h1 {
            font-size: 45px;
          }
          
          p {
            font-size: 16px;
          }
          
          .row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}