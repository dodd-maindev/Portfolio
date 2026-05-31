import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { ProjectsRepository } from "../data/projectsData";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { CosmicBackground } from "./CosmicBackground";
import "./Projects.css";

/**
 * Projects component displaying structured portfolio projects.
 * @returns {JSX.Element} The rendered projects section.
 */
export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setIsVisible(true), { threshold: 0.1 });
    const section = document.getElementById('projects');
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  const handleShowModal = (project) => {
    if (project.hasInteractiveMedia()) {
      setSelectedProject(project);
      setShowModal(true);
    }
  };

  const renderProjectPane = (filterFn) => (
    <Row>
      {ProjectsRepository.getAll().filter(filterFn).map((project, index) => (
        <ProjectCard key={index} project={project} index={index} handleShowModal={handleShowModal} />
      ))}
    </Row>
  );

  return (
    <section className="project" id="projects">
      <CosmicBackground />
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible: trackVisible }) => (
                <div className={`projects-container ${isVisible || trackVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <h2 className="projects-title" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="0" data-aos-mirror="true">🚀 Projects</h2>
                  <p className="projects-subtitle" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-mirror="true">
                    Explore my cosmic journey through code and creativity
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center cosmic-nav" id="pills-tab" data-aos="zoom-in" data-aos-duration="800" data-aos-mirror="true">
                      <Nav.Item>
                        <Nav.Link eventKey="first" className="cosmic-tab"><span className="tab-icon">🎮</span> Games</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="cosmic-tab"><span className="tab-icon">🌐</span> Web / Mobile Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" className="cosmic-tab"><span className="tab-icon">⚡</span> All Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={`cosmic-tab-content ${isVisible || trackVisible ? "animate__animated animate__slideInUp" : ""}`}>
                      <Tab.Pane eventKey="first">{renderProjectPane(p => p.category === "Game Design & Development")}</Tab.Pane>
                      <Tab.Pane eventKey="second">{renderProjectPane(p => p.category === "Web Design & Development")}</Tab.Pane>
                      <Tab.Pane eventKey="third">{renderProjectPane(() => true)}</Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <ProjectModal showModal={showModal} handleCloseModal={() => setShowModal(false)} selectedProject={selectedProject} />
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
