import React from "react";
import { Modal, Button, Carousel } from "react-bootstrap";

/**
 * ProjectModal component for displaying interactive media detail (videos / image sliders).
 * @param {Object} props - Component props.
 * @param {boolean} props.showModal - State showing whether modal is visible.
 * @param {Function} props.handleCloseModal - Callback function to close the modal.
 * @param {import("../models/Project").Project|null} props.selectedProject - Selected project model.
 * @returns {JSX.Element|null} The modal component or null if not selected.
 */
export const ProjectModal = ({ showModal, handleCloseModal, selectedProject }) => {
  if (!selectedProject) {
    return null;
  }

  const renderVideoPlayer = () => {
    if (selectedProject.videoUrl.includes("youtube.com")) {
      return (
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
      );
    }
    
    return (
      <div className="video-wrapper">
        <video width="100%" height="300" controls>
          <source src={selectedProject.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

  const renderImageCarousel = () => {
    return (
      <div className="carousel-wrapper mb-3">
        <Carousel interval={3000} fade>
          {selectedProject.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`${selectedProject.title} slide ${index + 1}`}
                style={{ height: "300px", objectFit: "contain", borderRadius: "10px" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} centered size="md" className="cosmic-modal">
      <Modal.Header closeButton className="cosmic-modal-header">
        <Modal.Title className="cosmic-modal-title">
          <span className="modal-icon">🎬</span>
          {selectedProject.title}
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="cosmic-modal-body">
        {selectedProject.videoUrl && renderVideoPlayer()}
        {!selectedProject.videoUrl && selectedProject.images && renderImageCarousel()}
        
        <div className="project-description">
          <p>{selectedProject.description}</p>
        </div>
      </Modal.Body>
      
      <Modal.Footer className="cosmic-modal-footer">
        {selectedProject.githubUrl && (
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
  );
};
