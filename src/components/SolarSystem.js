import React, { useState, useEffect } from 'react';

export const SolarSystem = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    const solarSection = document.getElementById('solar-system');
    if (solarSection) {
      observer.observe(solarSection);
    }

    return () => {
      if (solarSection) {
        observer.unobserve(solarSection);
      }
    };
  }, []);

  // Planet information ordered from closest to farthest from the Sun
  const planets = [
    {
      name: 'Mercury',
      emoji: '🌑', // Gray-brown planet
      size: 8, // Size ratio
      distance: 120, // Distance from sun
      orbitSpeed: 15, // Orbit speed around sun (s)
  
      description: 'Mercury - The closest planet to the Sun'
    },
    {
      name: 'Venus',
      emoji: '🟡', // Bright yellow/orange planet
      size: 12,
      distance: 160,
      orbitSpeed: 20,

      description: 'Venus - The hottest planet'
    },
    {
      name: 'Earth',
      emoji: '🌍', // Earth with continents
      size: 14,
      distance: 200,
      orbitSpeed: 25,
   
      description: 'Earth - The only planet with known life'
    },
    {
      name: 'Mars',
      emoji: '🌕', // Red planet
      size: 30,
      distance: 240,
      orbitSpeed: 35,
  
      description: 'Mars - The red planet'
    },
    {
      name: 'Jupiter',
      emoji: '🟤', // Large brown/orange gas giant
      size: 35,
      distance: 320,

      description: 'Jupiter - The largest planet'
    },
    {
      name: 'Saturn',
      emoji: '🪐', // Saturn with rings
      size: 30,
      distance: 380,
      orbitSpeed: 65,
      description: 'Saturn - The ringed planet'
    },
    {
      name: 'Uranus',
      emoji: '🟣', // Light blue ice giant
      size: 18,
      distance: 440,
      orbitSpeed: 80,
 
      description: 'Uranus - The tilted ice giant'
    },
    {
      name: 'Neptune',
      emoji: '🔵', // Deep blue planet
      size: 17,
      distance: 500,
      orbitSpeed: 95,

      description: 'Neptune - The windiest planet'
    },
    {
      name: 'Pluto',
      emoji: '⚫', // Small dark planet
      size: 6,
      distance: 560,
      orbitSpeed: 110,

      description: 'Pluto - The dwarf planet'
    }
  ];

  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <section className={`solar-system-section ${isVisible ? 'active' : ''}`} id="solar-system">
      {/* Cosmic Background */}
      <div className="space-background">
        {/* Stars */}
        <div className="star-field">
          {[...Array(200)].map((_, i) => (
            <div 
              key={i} 
              className={`space-star star-${i % 3 + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Nebula */}
        <div className="space-nebula nebula-purple"></div>
        <div className="space-nebula nebula-blue"></div>
        <div className="space-nebula nebula-pink"></div>
      </div>

      <div className="solar-container">
        <h2 className={`solar-title ${isVisible ? 'animate-in' : ''}`}>
          🌟 Solar System
        </h2>

        {/* Solar System */}
        <div className={`solar-system ${isVisible ? 'animate-in' : ''}`}>
          {/* Sun */}
          <div className="sun">
            <div className="sun-core">☀️</div>
            <div className="sun-glow"></div>
            <div className="sun-corona"></div>
          </div>

          {/* Orbital Paths */}
          {planets.map((planet, index) => (
            <div 
              key={planet.name}
              className="orbit"
              style={{
                width: `${planet.distance * 2}px`,
                height: `${planet.distance * 2}px`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Planet */}
              <div 
                className={`planet planet-${planet.name.toLowerCase()}`}
                style={{
                  width: `${planet.size}px`,
                  height: `${planet.size}px`,
                  backgroundColor: planet.color,
                  animationDuration: `${planet.orbitSpeed}s`,
                  animationDelay: `${index * 0.5}s`
                }}
                onClick={() => setSelectedPlanet(planet)}
              >
                <span className="planet-emoji">{planet.emoji}</span>
                <div className="planet-glow" style={{ backgroundColor: planet.color }}></div>
              </div>
            </div>
          ))}

          {/* Asteroid Belt */}
          <div className="asteroid-belt">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="asteroid"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${30 + Math.random() * 20}s`
                }}
              >
                ⭐
              </div>
            ))}
          </div>
        </div>

        {/* Planet Info Panel */}
        {selectedPlanet && (
          <div className="planet-info-panel">
            <div className="planet-info-content">
              <button 
                className="close-info"
                onClick={() => setSelectedPlanet(null)}
              >
                ✕
              </button>
              <div className="planet-info-header">
                <span className="planet-info-emoji">{selectedPlanet.emoji}</span>
                <h3>{selectedPlanet.name}</h3>
              </div>
              <p>{selectedPlanet.description}</p>
              <div className="planet-stats">
                <div className="stat">
                  <span className="stat-label">Size:</span>
                  <span className="stat-value">{selectedPlanet.size}px</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Distance:</span>
                  <span className="stat-value">{selectedPlanet.distance}px</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Orbit Speed:</span>
                  <span className="stat-value">{selectedPlanet.orbitSpeed}s</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .solar-system-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #000000 0%, #0a0a1a 20%, #1a0d33 40%, #0c0c0c 100%);
          position: relative;
          overflow: hidden;
          padding: 80px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Space Background */
        .space-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .star-field {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .space-star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle-space 3s infinite ease-in-out alternate;
          will-change: transform, opacity;
        }

        .star-1 { width: 1px; height: 1px; }
        .star-2 { width: 2px; height: 2px; }
        .star-3 { width: 3px; height: 3px; }

        @keyframes twinkle-space {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.5); }
        }

        .space-nebula {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          animation: float-nebula-space 20s infinite ease-in-out;
        }

        .nebula-purple {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, transparent 70%);
          top: 10%;
          left: 5%;
        }

        .nebula-blue {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(30, 144, 255, 0.3) 0%, transparent 70%);
          bottom: 15%;
          right: 10%;
          animation-delay: 5s;
        }

        .nebula-pink {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255, 20, 147, 0.3) 0%, transparent 70%);
          top: 60%;
          left: 70%;
          animation-delay: 10s;
        }

        @keyframes float-nebula-space {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(180deg); }
        }

        /* Main Container */
        .solar-container {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 1200px;
          width: 100%;
        }

        .solar-title {
          font-size: 48px;
          font-weight: 700;
          color: white;
          margin-bottom: 20px;
          text-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
          animation: glow-pulse-solar 3s infinite ease-in-out alternate;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }

        .solar-subtitle {
          font-size: 18px;
          color: #B8B8B8;
          margin-bottom: 50px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out 0.2s;
        }

        .solar-title.animate-in,
        .solar-subtitle.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes glow-pulse-solar {
          0% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.5); }
          100% { text-shadow: 0 0 40px rgba(255, 215, 0, 1), 0 0 60px rgba(255, 215, 0, 0.5); }
        }

        /* Solar System */
        .solar-system {
          position: relative;
          width: 1200px;
          height: 1200px;
          margin: 0 auto;
          opacity: 0;
          transform: scale(0.8);
          transition: all 1s ease-out 0.4s;
        }

        .solar-system.animate-in {
          opacity: 1;
          transform: scale(1);
        }

        /* Sun */
        .sun {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height:200px;
          z-index: 10;
        }

        .sun-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 100px;
          animation: sun-rotate 10s linear infinite;
          z-index: 3;
        }

        .sun-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.6) 0%, rgba(255, 165, 0, 0.3) 50%, transparent 100%);
          border-radius: 50%;
          animation: sun-pulse 3s ease-in-out infinite alternate;
          z-index: 1;
        }

        .sun-corona {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, rgba(255, 165, 0, 0.1) 50%, transparent 100%);
          border-radius: 50%;
          animation: sun-corona-rotate 15s linear infinite reverse;
          z-index: 0;
        }

        @keyframes sun-rotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes sun-pulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
        }

        @keyframes sun-corona-rotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Orbits */
        .orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          animation: orbit-appear 2s ease-out forwards;
        }

        @keyframes orbit-appear {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        /* Planets */
        .planet {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .planet:hover {
          transform: scale(1.3);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
        }

        .planet-emoji {
          font-size: 24px;
          z-index: 2;
          position: relative;
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
        }

        .planet-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          border-radius: 50%;
          opacity: 0.3;
          animation: planet-glow 4s ease-in-out infinite alternate;
        }

        /* Special styling for Saturn to show rings */
        .planet-saturn {
          position: relative;
        }
        
        .planet-saturn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 150%;
          height: 20%;
          border: 2px solid rgba(250, 213, 165, 0.6);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        
        .planet-saturn::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 180%;
          height: 30%;
          border: 1px solid rgba(250, 213, 165, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
        }

        @keyframes planet-glow {
          0% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1.2); }
        }

        /* Specific Planet Orbits */
        .planet-mercury {
          animation: mercury-orbit 15s linear infinite;
        }
        
        .planet-venus {
          animation: venus-orbit 20s linear infinite;
        }
        
        .planet-earth {
          animation: earth-orbit 25s linear infinite;
        }
        
        .planet-mars {
          animation: mars-orbit 35s linear infinite;
        }
        
        .planet-jupiter {
          animation: jupiter-orbit 50s linear infinite;
        }
        
        .planet-saturn {
          animation: saturn-orbit 65s linear infinite;
        }
        
        .planet-uranus {
          animation: uranus-orbit 80s linear infinite;
        }
        
        .planet-neptune {
          animation: neptune-orbit 95s linear infinite;
        }
        
        .planet-pluto {
          animation: pluto-orbit 110s linear infinite;
        }

        /* Individual Planet Orbit Animations */
        @keyframes mercury-orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg); }
        }

        @keyframes venus-orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(160px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(160px) rotate(-360deg); }
        }

        @keyframes earth-orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(200px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(200px) rotate(-360deg); }
        }

        @keyframes mars-orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(240px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(240px) rotate(-360deg); }
        }

        @keyframes jupiter-orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(320px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(320px) rotate(-360deg); }
        }

        @keyframes saturn-orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(380px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(380px) rotate(-360deg); }
        }

        @keyframes uranus-orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(440px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(440px) rotate(-360deg); }
        }

        @keyframes neptune-orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(500px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(500px) rotate(-360deg); }
        }

        @keyframes pluto-orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(560px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(560px) rotate(-360deg); }
        }

        /* Asteroid Belt */
        .asteroid-belt {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 560px;
          height: 560px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .asteroid {
          position: absolute;
          top: 0;
          left: 50%;
          font-size: 4px;
          animation: asteroid-orbit linear infinite;
          opacity: 0.6;
        }

        @keyframes asteroid-orbit {
          0% { transform: translate(-50%, 0) rotate(0deg) translateX(280px) rotate(0deg); }
          100% { transform: translate(-50%, 0) rotate(360deg) translateX(280px) rotate(-360deg); }
        }

        /* Planet Info Panel */
        .planet-info-panel {
          position: fixed;
          top: 50%;
          right: 30px;
          transform: translateY(-50%);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 25px;
          width: 300px;
          z-index: 1000;
          animation: panel-slide-in 0.5s ease-out;
        }

        @keyframes panel-slide-in {
          0% { transform: translateY(-50%) translateX(100%); opacity: 0; }
          100% { transform: translateY(-50%) translateX(0); opacity: 1; }
        }

        .planet-info-content {
          color: white;
        }

        .close-info {
          position: absolute;
          top: 10px;
          right: 15px;
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .close-info:hover {
          opacity: 1;
        }

        .planet-info-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .planet-info-emoji {
          font-size: 32px;
        }

        .planet-info-header h3 {
          margin: 0;
          font-size: 24px;
          color: #FFD700;
        }

        .planet-info-content p {
          color: #B8B8B8;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .planet-stats {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .stat {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-label {
          color: #B8B8B8;
          font-weight: 500;
        }

        .stat-value {
          color: #FFD700;
          font-weight: 600;
        }

        /* Controls */
        .solar-controls {
          margin-top: 50px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out 0.6s;
        }

        .solar-controls.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .solar-controls h4 {
          color: white;
          margin-bottom: 20px;
          font-size: 20px;
        }

        .control-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .control-btn {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          padding: 10px 20px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .control-btn:hover {
          background: rgba(138, 43, 226, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(138, 43, 226, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .solar-system {
            width: 800px;
            height: 800px;
          }
          
          .asteroid-belt {
            width: 400px;
            height: 400px;
          }
          
          .planet-info-panel {
            position: fixed;
            top: auto;
            bottom: 20px;
            right: 20px;
            left: 20px;
            width: auto;
            transform: none;
          }
        }

        @media (max-width: 768px) {
          .solar-system {
            width: 600px;
            height: 600px;
          }
          
          .solar-title {
            font-size: 36px;
          }
          
          .control-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .control-btn {
            width: 200px;
          }
        }

        @media (max-width: 480px) {
          .solar-system {
            width: 400px;
            height: 400px;
          }
          
          .solar-title {
            font-size: 28px;
          }
          
          .sun-core {
            font-size: 30px;
          }
          
          .space-nebula {
            display: none;
          }
        }

        .solar-system-section:not(.active) * {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};
