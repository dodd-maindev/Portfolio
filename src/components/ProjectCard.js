import React from "react";
import { Col } from "react-bootstrap";

/**
 * ProjectCard component for rendering a single project card.
 * @param {Object} props - Component props.
 * @param {import("../models/Project").Project} props.project - The project domain object.
 * @param {number} props.index - The list item index.
 * @param {Function} props.handleShowModal - The modal display handler callback.
 * @returns {JSX.Element} The rendered project card.
 */
export const ProjectCard = ({ project, index, handleShowModal }) => {
  const isClickable = project.hasInteractiveMedia();

  return (
    <Col sm={6} md={4} className="mb-4">
      <div
        className={`proj-imgbx cosmic-project-card project-card-${index + 1}`}
        onClick={() => handleShowModal(project)}
        style={{
          cursor: isClickable ? "pointer" : "default",
        }}
      >
        <div className="project-image-wrapper">
          <img src={project.imgUrl} alt={project.title} className="img-fluid" />
          <div className="project-overlay">
            {project.videoUrl && <div className="play-button">▶</div>}
            {!project.videoUrl && project.images && <div className="play-button">🖼️</div>}
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
                onClick={(event) => event.stopPropagation()}
              >
                <span>🔗</span> View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
