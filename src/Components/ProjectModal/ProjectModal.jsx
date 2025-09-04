import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./ProjectModal.css";

const ProjectModal = ({ project, closeModal }) => {
  const { title, category, description, imgSrc, myRole, link } = project;

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

          <section className="modal-tech-stack">
            <h4 className="modal-tech-stack-title">Tech Stack</h4>
            <div className="modal-tech-container">
              {project.techStack.map((tech, index) => (
                <span key={index} className="modal-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="modal-my-role">
            <h4 className="modal-my-role-title">My Role</h4>
            <ul className="modal-role-list">
              {myRole.map((role, index) => (
                <li key={index} className="modal-role-item">
                  {role}
                </li>
              ))}
            </ul>
          </section>
          <a
            href={link}
            className="modal-visit-btn"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginBottom: "16px" }}
          >
            Visit Website
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectModal;
