import React from "react";

/**
 * Renders the animated cosmic background elements for the Contact section.
 * @param {Object} props Component properties.
 * @param {Object} props.randomPositions Pre-calculated coordinates for star, nebula, and floating particles.
 * @returns {JSX.Element} The background canvas element.
 */
export const CosmicContactBackground = ({ randomPositions }) => {
  return (
    <div className="cosmic-background-contact">
      <div className="stars-contact">
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
          />
        ))}
      </div>
      
      {randomPositions.nebulas.length > 0 && (
        <>
          <div 
            className="nebula-contact nebula-contact-1"
            style={{
              left: randomPositions.nebulas[0]?.left,
              top: randomPositions.nebulas[0]?.top,
              transform: `scale(${randomPositions.nebulas[0]?.scale})`,
              opacity: randomPositions.nebulas[0]?.opacity
            }}
          />
          {randomPositions.nebulas[1] && (
            <div 
              className="nebula-contact nebula-contact-2"
              style={{
                right: randomPositions.nebulas[1]?.left,
                bottom: randomPositions.nebulas[1]?.top,
                transform: `scale(${randomPositions.nebulas[1]?.scale})`,
                opacity: randomPositions.nebulas[1]?.opacity
              }}
            />
          )}
        </>
      )}
      
      <div className="cosmic-objects-contact">
        {randomPositions.objects.length > 0 && (
          <>
            <div 
              className="cosmic-object-contact obj-contact-1"
              style={{
                left: randomPositions.objects[0]?.left,
                top: randomPositions.objects[0]?.top,
                transform: `scale(${randomPositions.objects[0]?.scale}) rotate(${randomPositions.objects[0]?.rotation}deg)`
              }}
            >📧</div>
            <div 
              className="cosmic-object-contact obj-contact-2"
              style={{
                left: randomPositions.objects[1]?.left,
                top: randomPositions.objects[1]?.top,
                transform: `scale(${randomPositions.objects[1]?.scale}) rotate(${randomPositions.objects[1]?.rotation}deg)`
              }}
            >🌟</div>
            <div 
              className="cosmic-object-contact obj-contact-3"
              style={{
                left: randomPositions.objects[2]?.left,
                top: randomPositions.objects[2]?.top,
                transform: `scale(${randomPositions.objects[2]?.scale}) rotate(${randomPositions.objects[2]?.rotation}deg)`
              }}
            >💫</div>
            <div 
              className="cosmic-object-contact obj-contact-4"
              style={{
                left: randomPositions.objects[3]?.left,
                top: randomPositions.objects[3]?.top,
                transform: `scale(${randomPositions.objects[3]?.scale}) rotate(${randomPositions.objects[3]?.rotation}deg)`
              }}
            >🚀</div>
          </>
        )}
      </div>
      
      <div className="comm-waves">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
    </div>
  );
};
