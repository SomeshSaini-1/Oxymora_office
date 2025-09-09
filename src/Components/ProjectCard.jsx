import React, { useState } from "react";
import "../css/ProjectCard.css";

const ProjectCard = ({ image, title, description, learnText = "Learn More" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Normal Card */}
      <div className="project-card">
        <div className="project-card-image">
          <img src={image} alt={title} />
        </div>

        <div className="project-card-content">
          <p className="project-card-title">{title}</p>
          <p className="project-card-desc">{description}</p>
          <button
            className="project-learn-btn"
            onClick={() => setIsOpen(true)}
            aria-label={`Open ${title} details`}
          >
            {learnText}
          </button>
        </div>

        <div className="project-go-corner">
          <div className="project-go-arrow">→</div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div
          className="project-modal-overlay"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            <img src={image} alt={title} className="project-modal-image" />
            <h2 className="project-modal-title">{title}</h2>
            <p className="project-modal-desc">{description}</p>

            {/* Extra area for more content — edit as needed */}
            <div className="project-modal-actions">
              <button
                className="project-learn-btn"
                onClick={() => {
                  // example: close modal or navigate
                  setIsOpen(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
