import React from "react";

/**
 * CosmicBackground component that renders space effects like stars, nebulae, and meteors.
 * @returns {JSX.Element} The rendered cosmic background wrapper.
 */
export const CosmicBackground = () => {
  const totalStarsCount = 40;
  
  return (
    <div className="cosmic-background-projects">
      <div className="stars-projects">
        {[...Array(totalStarsCount)].map((_, index) => (
          <div 
            key={index} 
            className={`star-projects star-projects-${(index % 4) + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <div className="nebula nebula-3"></div>
      
      <div className="cosmic-objects">
        <div className="cosmic-object obj-1">🌌</div>
        <div className="cosmic-object obj-2">⭐</div>
        <div className="cosmic-object obj-3">🚀</div>
        <div className="cosmic-object obj-4">🛸</div>
        <div className="cosmic-object obj-5">🌠</div>
      </div>
      
      <div className="meteor-shower">
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-3"></div>
      </div>
    </div>
  );
};
