import { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { skillDetails } from "../data/skillsData";
import { CosmicSkillsBackground } from "./CosmicSkillsBackground";
import 'react-multi-carousel/lib/styles.css';
import "./Skills.css";

/**
 * Skills component displaying the tech stack carousel with dynamic overlay detail toggles.
 * @returns {JSX.Element} The rendered Skills section.
 */
export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setIsVisible(e.isIntersecting), { threshold: 0.1 });
    const skillSection = document.getElementById('skills');
    if (skillSection) observer.observe(skillSection);
    return () => skillSection && observer.unobserve(skillSection);
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const handleSkillClick = (skillName) => {
    setSelectedSkill(selectedSkill === skillName ? null : skillName);
  };

  return (
    <section className={`skill ${isVisible ? 'active' : ''}`} id="skills">
      <CosmicSkillsBackground />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`skill-bx wow zoomIn ${isVisible ? 'animate-in' : ''}`}>
              <h2 data-aos="fade-down" data-aos-duration="800" data-aos-mirror="true">Skills</h2>
              <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-mirror="true">
                🔧 Technical Skills
              </p>
              <Carousel 
                responsive={responsive} 
                infinite 
                className="owl-carousel owl-theme skill-slider"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                data-aos-mirror="true"
              >
                <div className="item skill-item-1" onClick={() => handleSkillClick("Frontend")}>
                  <div className="skill-icon-wrapper">
                    <img src={meter1} alt="Frontend" />
                    <div className="skill-glow"></div>
                  </div>
                  <h5>Frontend</h5>
                </div>
                <div className="item skill-item-2" onClick={() => handleSkillClick("Backend")}>
                  <div className="skill-icon-wrapper">
                    <img src={meter2} alt="Backend" />
                    <div className="skill-glow"></div>
                  </div>
                  <h5>Backend</h5>
                </div>
                <div className="item skill-item-3" onClick={() => handleSkillClick("Database")}>
                  <div className="skill-icon-wrapper">
                    <img src={meter3} alt="Database" />
                    <div className="skill-glow"></div>
                  </div>
                  <h5>Database</h5>
                </div>
                <div className="item skill-item-4" onClick={() => handleSkillClick("Game Development")}>
                  <div className="skill-icon-wrapper">
                    <img src={meter1} alt="Game Dev" />
                    <div className="skill-glow"></div>
                  </div>
                  <h5>Game Development</h5>
                </div>
                <div className="item skill-item-5" onClick={() => handleSkillClick("Soft Skills")}>
                  <div className="skill-icon-wrapper">
                    <img src={meter2} alt="Soft Skills" />
                    <div className="skill-glow"></div>
                  </div>
                  <h5>Soft Skills</h5>
                </div>
              </Carousel>

              <div className={`skill-detail-container ${selectedSkill ? 'expanded' : 'collapsed'}`}>
                <div className="skill-detail-box">
                  {selectedSkill && (
                    <>
                      <h3>{selectedSkill} Details</h3>
                      <pre>{skillDetails[selectedSkill]}</pre>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Decor" />
    </section>
  );
};
