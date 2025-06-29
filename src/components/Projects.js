import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Button, Placeholder } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img1.jpg";
import projImg6 from "../assets/img/project-img2.jpg";
import projImg7 from "../assets/img/project-img5.png"; 
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import 'aos/dist/aos.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
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

    const projectSection = document.getElementById('projects');
    if (projectSection) {
      observer.observe(projectSection);
    }

    return () => {
      if (projectSection) {
        observer.unobserve(projectSection);
      }
    };
  }, []);

  const projects = [
    {
      title: "RPG Game Topdown Survival",
      description: "A survival role-playing game with top-down perspective, where players must fight enemies and manage resources.",
      category: "Game Design & Development",
      imgUrl: projImg1,
      videoUrl: "https://www.youtube.com/embed/nf9i2Hxb5Mk",
      githubUrl: "https://github.com/dodao123/RPG-Indie-2D-Game",
    },
    {
      title: "Gesture Racing Car Monitoring",
      description: "A racing game controlled using hand gestures, integrating Python with Unity for real-time gesture recognition.",
      category: "Game Design & Development",
      imgUrl: projImg2,
      videoUrl: "/ProjectVideo/video2.mp4",
      githubUrl: "https://github.com/yourname/project2",
    },
    {
      title: "Edu WarriorWarrior",
      description: "An educational adventure game where players solve questions and progress through a fun storyline.",
      category: "Game Design & Development",
      imgUrl: projImg5,
      videoUrl: "/ProjectVideo/video4.mp4",
      githubUrl: "https://github.com/dodao123/EduWarriorGamee",
    },
    {
      title: "Runner & Fighting with Monsters Game",
      description: "An endless runner game with combat features, requiring players to fight off monsters and avoid obstacles.",
      category: "Game Design & Development",
      imgUrl: projImg3,
      videoUrl: "/ProjectVideo/video3.mp4",
      githubUrl: "https://github.com/yourname/project4",
    },
    {
      title: "Introduction Math CLB Website",
      description: "A clean and informative website for the Math Club, including club activities, resources, and member profiles.",
      category: "Web Design & Development",
      imgUrl: projImg4,
      githubUrl: "https://loptoancoxuan.vercel.app/",
    },
    {
      title: "TSA Test Exam Website",
      description: "A clean and informative website for the TSA exam, with easy navigation and clear exam preparation resources.",
      category: "Web Design & Development",
      imgUrl: projImg6,
      githubUrl: "http://tsatest.id.vn/",
    },
    {
      title: "Manga Reading Mobile APP",
      description: "Mobile App provide services for reading manga online, with features like bookmarking, offline reading, and a user-friendly interface.",
      category: "Web Design & Development",
      imgUrl: projImg7,
      videoUrl: "/ProjectVideo/video5.mp4",
      githubUrl: "https://github.com/dodao123/MangaReaderApp",
    }
  ];

  const handleShowModal = (project) => {
    if (project.videoUrl) {
      setSelectedProject(project);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section className="project" id="projects">
      {/* Cosmic Background Elements */}
      <div className="cosmic-background-projects">
        {/* Floating Stars */}
        <div className="stars-projects">
          {[...Array(40)].map((_, i) => (
            <div 
              key={i} 
              className={`star-projects star-projects-${i % 4 + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Cosmic Nebula */}
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>
        
        {/* Floating Cosmic Objects */}
        <div className="cosmic-objects">
          <div className="cosmic-object obj-1">🌌</div>
          <div className="cosmic-object obj-2">⭐</div>
          <div className="cosmic-object obj-3">🚀</div>
          <div className="cosmic-object obj-4">🛸</div>
          <div className="cosmic-object obj-5">🌠</div>
        </div>
        
        {/* Meteor Shower */}
        <div className="meteor-shower">
          <div className="meteor meteor-1"></div>
          <div className="meteor meteor-2"></div>
          <div className="meteor meteor-3"></div>
        </div>
      </div>

      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`projects-container ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <h2 
                    className="projects-title"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="0"
                    data-aos-mirror="true"
                  >
                    🚀 Projects
                  </h2>
                  <p 
                    className="projects-subtitle"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    data-aos-mirror="true"
                  >
                    Explore my cosmic journey through code and creativity
                  </p>
                  
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav 
                      variant="pills" 
                      className="nav-pills mb-5 justify-content-center align-items-center cosmic-nav" 
                      id="pills-tab"
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="400"
                      data-aos-mirror="true"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first" className="cosmic-tab">
                          <span className="tab-icon">🎮</span>
                          Games
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="cosmic-tab">
                          <span className="tab-icon">🌐</span>
                          Web / Mobile Apps
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" className="cosmic-tab">
                          <span className="tab-icon">⚡</span>
                          All Projects
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={`cosmic-tab-content ${isVisible ? "animate__animated animate__slideInUp" : ""}`}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.filter(p => p.category === "Game Design & Development").map((project, index) => (
                            <Col key={index} sm={6} md={4} className="mb-4">
                              <div
                                className={`proj-imgbx cosmic-project-card project-card-${index + 1}`}
                                onClick={() => handleShowModal(project)}
                                style={{
                                  cursor: project.videoUrl ? "pointer" : "default",
                                }}
                              >
                                <div className="project-image-wrapper">
                                  <img src={project.imgUrl} alt={project.title} className="img-fluid" />
                                  <div className="project-overlay">
                                    {project.videoUrl && <div className="play-button">▶</div>}
                                  </div>
                                </div>
                                <div className="proj-txtx cosmic-project-text">
                                  <h4>{project.title}</h4>
                                  <span>{project.description}</span>
                                  <div className="project-links">
                                    {project.githubUrl && (
                                      <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-link cosmic-link"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <span>🔗</span> View Project
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.filter(p => p.category === "Web Design & Development").map((project, index) => (
                            <Col key={index} sm={6} md={4} className="mb-4">
                              <div
                                className={`proj-imgbx cosmic-project-card project-card-${index + 1}`}
                                onClick={() => handleShowModal(project)}
                                style={{
                                  cursor: project.videoUrl ? "pointer" : "default",
                                }}
                              >
                                <div className="project-image-wrapper">
                                  <img src={project.imgUrl} alt={project.title} className="img-fluid" />
                                  <div className="project-overlay">
                                    {project.videoUrl && <div className="play-button">▶</div>}
                                  </div>
                                </div>
                                <div className="proj-txtx cosmic-project-text">
                                  <h4>{project.title}</h4>
                                  <span>{project.description}</span>
                                  <div className="project-links">
                                    {project.githubUrl && (
                                      <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-link cosmic-link"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <span>🔗</span> View Project
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => (
                            <Col key={index} sm={6} md={4} className="mb-4">
                              <div
                                className={`proj-imgbx cosmic-project-card project-card-${index + 1}`}
                                onClick={() => handleShowModal(project)}
                                style={{
                                  cursor: project.videoUrl ? "pointer" : "default",
                                }}
                              >
                                <div className="project-image-wrapper">
                                  <img src={project.imgUrl} alt={project.title} className="img-fluid" />
                                  <div className="project-overlay">
                                    {project.videoUrl && <div className="play-button">▶</div>}
                                  </div>
                                </div>
                                <div className="proj-txtx cosmic-project-text">
                                  <h4>{project.title}</h4>
                                  <span>{project.description}</span>
                                  <div className="project-links">
                                    {project.githubUrl && (
                                      <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-link cosmic-link"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <span>🔗</span> View Project
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Enhanced Modal hiển thị video */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="md" className="cosmic-modal">
        <Modal.Header closeButton className="cosmic-modal-header">
          <Modal.Title className="cosmic-modal-title">
            <span className="modal-icon">🎬</span>
            {selectedProject?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="cosmic-modal-body">
          {selectedProject?.videoUrl?.includes("youtube.com") ? (
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="280"
                src={selectedProject.videoUrl}
                title="Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="video-wrapper">
              <video width="100%" height="300" controls>
                <source src={selectedProject?.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          <div className="project-description">
            <p>{selectedProject?.description}</p>
          </div>
        </Modal.Body>
        <Modal.Footer className="cosmic-modal-footer">
          {selectedProject?.githubUrl && (
            <Button 
              variant="outline-light" 
              onClick={() => window.open(selectedProject.githubUrl, '_blank')}
              className="cosmic-btn-secondary"
            >
              <span>🔗</span> View Project
            </Button>
          )}
          <Button variant="primary" onClick={handleCloseModal} className="cosmic-btn-primary">
            <span>✨</span> Close
          </Button>
        </Modal.Footer>
      </Modal>

      <img className="background-image-right" src={colorSharp2} alt="background" />
      
      <style jsx global>{`
        /* Global modal backdrop fix */
        .modal-backdrop {
          z-index: 9998 !important;
        }
        
        .modal {
          z-index: 10000 !important;
        }
        
        .project {
          padding: 80px 0;
          background: linear-gradient(135deg, #0a0a1a 0%, #1a0d33 20%, #2d1b4e 40%, #1a1a2e 70%, #0c0c0c 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        /* Cosmic Background Elements */
        .cosmic-background-projects {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .stars-projects {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .star-projects {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle-projects 3s infinite ease-in-out alternate;
        }

        .star-projects-1 { width: 2px; height: 2px; }
        .star-projects-2 { width: 3px; height: 3px; }
        .star-projects-3 { width: 1.5px; height: 1.5px; }
        .star-projects-4 { width: 4px; height: 4px; }

        @keyframes twinkle-projects {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.3); }
        }

        /* Nebula Effects */
        .nebula {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: float-nebula 15s infinite ease-in-out;
        }

        .nebula-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .nebula-2 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(30, 144, 255, 0.3) 0%, transparent 70%);
          bottom: 20%;
          right: 15%;
          animation-delay: 5s;
        }

        .nebula-3 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255, 20, 147, 0.3) 0%, transparent 70%);
          top: 50%;
          right: 10%;
          animation-delay: 10s;
        }

        @keyframes float-nebula {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }

        /* Cosmic Objects */
        .cosmic-objects {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .cosmic-object {
          position: absolute;
          font-size: 24px;
          animation: float-cosmic 8s infinite ease-in-out;
          opacity: 0.7;
        }

        .obj-1 { top: 15%; left: 20%; animation-delay: 0s; }
        .obj-2 { top: 25%; right: 25%; animation-delay: 2s; }
        .obj-3 { bottom: 30%; left: 15%; animation-delay: 4s; }
        .obj-4 { bottom: 40%; right: 20%; animation-delay: 6s; }
        .obj-5 { top: 60%; left: 50%; animation-delay: 1s; }

        @keyframes float-cosmic {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(360deg); }
        }

        /* Meteor Shower */
        .meteor {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #fff, transparent);
          border-radius: 50%;
        }

        .meteor-1 {
          top: 10%;
          left: -5%;
          animation: meteor-fall 4s linear infinite;
          animation-delay: 1s;
        }

        .meteor-2 {
          top: 30%;
          left: -5%;
          animation: meteor-fall 5s linear infinite;
          animation-delay: 3s;
        }

        .meteor-3 {
          top: 50%;
          left: -5%;
          animation: meteor-fall 4.5s linear infinite;
          animation-delay: 6s;
        }

        @keyframes meteor-fall {
          0% { 
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 1;
          }
          70% { opacity: 1; }
          100% { 
            transform: translateX(400px) translateY(200px) rotate(45deg);
            opacity: 0;
          }
        }

        /* Main Content */
        .projects-container {
          position: relative;
          z-index: 2;
        }

        .projects-title {
          font-size: 48px;
          font-weight: 700;
          color: white;
          text-align: center;
          margin-bottom: 20px;
          text-shadow: 0 0 30px rgba(138, 43, 226, 0.8);
          animation: glow-pulse-projects 3s infinite ease-in-out alternate;
        }

        .projects-subtitle {
          font-size: 18px;
          color: #B8B8B8;
          text-align: center;
          margin-bottom: 50px;
          opacity: 0.9;
        }

        @keyframes glow-pulse-projects {
          0% { text-shadow: 0 0 20px rgba(138, 43, 226, 0.5); }
          100% { text-shadow: 0 0 40px rgba(138, 43, 226, 1), 0 0 60px rgba(138, 43, 226, 0.5); }
        }

        /* Navigation Tabs */
        .cosmic-nav {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
          border-radius: 50px;
          padding: 10px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .cosmic-tab {
          background: transparent !important;
          border: none !important;
          color: #B8B8B8 !important;
          border-radius: 30px !important;
          padding: 12px 25px !important;
          margin: 0 5px !important;
          transition: all 0.3s ease !important;
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
        }

        .cosmic-tab:hover {
          color: white !important;
          background: rgba(138, 43, 226, 0.3) !important;
          transform: translateY(-2px) !important;
        }

        .cosmic-tab.active {
          background: linear-gradient(135deg, rgba(138, 43, 226, 0.8) 0%, rgba(30, 144, 255, 0.6) 100%) !important;
          color: white !important;
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.5) !important;
        }

        .tab-icon {
          font-size: 16px;
        }

        /* Project Cards */
        .cosmic-project-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
          border-radius: 20px;
          padding: 0;
          margin-bottom: 30px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          transform: translateY(50px);
          animation: slideInUp-projects 0.8s forwards;
          display: flex;
          flex-direction: column;
          height: fit-content;
        }

        .project-card-1 { animation-delay: 0.1s; }
        .project-card-2 { animation-delay: 0.2s; }
        .project-card-3 { animation-delay: 0.3s; }
        .project-card-4 { animation-delay: 0.4s; }
        .project-card-5 { animation-delay: 0.5s; }
        .project-card-6 { animation-delay: 0.6s; }

        @keyframes slideInUp-projects {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cosmic-project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s;
          z-index: 1;
        }

        .cosmic-project-card:hover::before {
          left: 100%;
        }

        .cosmic-project-card:hover {
          transform: translateY(-15px) scale(1.05);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.4),
            0 0 40px rgba(138, 43, 226, 0.5);
          border-color: rgba(138, 43, 226, 0.6);
        }

        .project-image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 20px 20px 0 0;
          flex-shrink: 0;
        }

        .project-image-wrapper img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.4s ease;
          filter: brightness(0.8);
          display: block;
        }

        .cosmic-project-card:hover .project-image-wrapper img {
          transform: scale(1.1);
          filter: brightness(1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cosmic-project-card:hover .project-overlay {
          opacity: 1;
        }

        .play-button {
          font-size: 48px;
          color: white;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
          animation: pulse-play 2s infinite;
        }

        @keyframes pulse-play {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .cosmic-project-text {
          padding: 0px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          min-height: 80px;
        }

        .cosmic-project-text h4 {
          color: white;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 5px;
          text-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
          line-height: 1.1;
        }

        .cosmic-project-text span {
          color: #B8B8B8;
          font-size: 11px;
          line-height: 1.3;
          display: block;
          margin-bottom: 8px;
          flex-grow: 1;
        }

        .project-links {
          margin-top: auto;
          padding-top: 0;
        }

        .cosmic-link {
          color: #b19cd9 !important;
          text-decoration: none !important;
          font-size: 10px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 4px 8px;
          border-radius: 10px;
          background: rgba(177, 156, 217, 0.1);
          border: 1px solid rgba(177, 156, 217, 0.3);
          transition: all 0.3s ease;
        }

        .cosmic-link:hover {
          background: rgba(177, 156, 217, 0.2);
          color: white !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(177, 156, 217, 0.3);
        }

        /* Modal Styles */
        .cosmic-modal {
          z-index: 10000 !important;
        }
        
        .cosmic-modal .modal-backdrop {
          z-index: 9999 !important;
        }
        
        .cosmic-modal .modal-dialog {
          max-width: 600px !important;
          margin: 2rem auto !important;
          z-index: 10001 !important;
          position: relative;
        }
        
        .cosmic-modal .modal-content {
          background: linear-gradient(135deg, rgba(12, 12, 12, 0.95) 0%, rgba(26, 26, 46, 0.95) 100%);
          border: 1px solid rgba(138, 43, 226, 0.5);
          border-radius: 20px;
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
        }

        .cosmic-modal-header {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(135deg, rgba(138, 43, 226, 0.2) 0%, rgba(30, 144, 255, 0.2) 100%);
          padding: 15px 20px;
        }

        .cosmic-modal-title {
          color: white;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 18px;
        }

        .modal-icon {
          font-size: 18px;
        }

        .cosmic-modal-body {
          padding: 20px;
        }

        .video-wrapper {
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .project-description {
          color: #B8B8B8;
          font-size: 14px;
          line-height: 1.5;
          text-align: center;
        }

        .cosmic-modal-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          justify-content: center;
          gap: 15px;
          padding: 15px 20px;
        }

        .cosmic-btn-primary {
          background: linear-gradient(135deg, rgba(138, 43, 226, 0.8) 0%, rgba(30, 144, 255, 0.8) 100%);
          border: none;
          border-radius: 25px;
          padding: 10px 25px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .cosmic-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(138, 43, 226, 0.4);
        }

        .cosmic-btn-secondary {
          border: 1px solid rgba(177, 156, 217, 0.5);
          border-radius: 25px;
          padding: 10px 25px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .cosmic-btn-secondary:hover {
          background: rgba(177, 156, 217, 0.2);
          transform: translateY(-2px);
        }

        .background-image-right {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 35%;
          opacity: 0.4;
          z-index: 1;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .project {
            padding: 60px 0;
          }
          
          .projects-title {
            font-size: 36px;
          }
          
          .cosmic-object,
          .nebula,
          .meteor {
            display: none;
          }
          
          .cosmic-project-card {
            margin-bottom: 20px;
          }
          
          .cosmic-tab {
            padding: 10px 15px !important;
            font-size: 14px !important;
          }
          
          .project-image-wrapper img {
            height: 160px;
          }
          
          .cosmic-project-text {
            padding: 8px;
            min-height: 70px;
          }
          
          .cosmic-project-text h4 {
            font-size: 13px;
            margin-bottom: 4px;
          }
          
          .cosmic-project-text span {
            font-size: 10px;
            margin-bottom: 6px;
          }
          
          .cosmic-link {
            font-size: 9px;
            padding: 3px 6px;
          }
        }

        @media (max-width: 480px) {
          .stars-projects .star-projects {
            display: none;
          }
          
          .projects-title {
            font-size: 28px;
          }
          
          .cosmic-project-text {
            padding: 6px;
            min-height: 60px;
          }
          
          .project-image-wrapper img {
            height: 140px;
          }
          
          .cosmic-project-text h4 {
            font-size: 12px;
            margin-bottom: 3px;
          }
          
          .cosmic-project-text span {
            font-size: 9px;
            margin-bottom: 5px;
          }
          
          .cosmic-link {
            font-size: 8px;
            padding: 2px 5px;
          }
        }
      `}</style>
    </section>
  );
};
