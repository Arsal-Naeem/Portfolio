import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./ProjectModal.css";

const ProjectModal = ({ project, closeModal }) => {
  const { title, category, description, imgSrc, link } = project;

  //Closing the Modal when clicked outside it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("modal-overlay")) {
        closeModal();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [closeModal]);

  return (
    <div className="modal-overlay">
      <section className="modal-content">
        <button
          aria-label="Close"
          className="modal-close-btn"
          onClick={closeModal}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <figure className="modal-image-container">
          <img src={imgSrc} alt={title} />
        </figure>
        <div className="modal-details">
          <header className="modal-header">
            <h2 className="modal-title">{title}</h2>
            <p className="modal-category">{category}</p>
          </header>
          <p className="modal-description">{description}</p>
          <a
            href={link}
            className="modal-visit-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectModal;
