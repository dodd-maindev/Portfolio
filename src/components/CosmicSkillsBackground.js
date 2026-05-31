import React from "react";

/**
 * CosmicSkillsBackground component that renders the floating stars and orbits for the Skills section.
 * @returns {JSX.Element} The rendered cosmic background.
 */
export const CosmicSkillsBackground = () => {
  const starsCount = 50;
  const dustParticlesCount = 30;

  return (
    <div className="cosmic-background">
      <div className="stars">
        {[...Array(starsCount)].map((_, i) => (
          <div 
            key={i} 
            className={`star star-${(i % 5) + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="cosmic-orbit orbit-1">
        <div className="cosmic-planet planet-1">🪐</div>
      </div>
      <div className="cosmic-orbit orbit-2">
        <div className="cosmic-planet planet-2">🌘</div>
      </div>
      <div className="cosmic-orbit orbit-3">
        <div className="cosmic-planet planet-3">🌜</div>
      </div>
      
      <div className="shooting-star shooting-star-1"></div>
      <div className="shooting-star shooting-star-2"></div>
      <div className="shooting-star shooting-star-3"></div>
      
      <div className="cosmic-dust">
        {[...Array(dustParticlesCount)].map((_, i) => (
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
  );
};
