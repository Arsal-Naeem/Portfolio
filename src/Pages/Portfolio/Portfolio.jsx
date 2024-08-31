import Layout from "../../Components/Layout/Layout";
import ProjectItem from "../../Components/ProjectItem/ProjectItem";
import { projects } from "../../data/Projects";
import ProjectModal from "../../Components/ProjectModal/ProjectModal";
import { useState } from "react";


const Portfolio = () => {
  const [modalProject, setModalProduct] = useState(null);

  const openModal = (project) => {
    console.log(project)
    setModalProduct(project);
  };

  const closeModal = () => {
    console.log("closing")
    setModalProduct(null);
  };
  return (
    <>
      <Layout pageTitle="Portfolio">
        <section className="projects">
          <ul className="project-list">
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                title={project.title}
                category={project.category}
                imgSrc={project.imgSrc}
                link={project.link}
                openModal={() => openModal(project)}
              />
            ))}
          </ul>
        </section>

        
      </Layout>
      {modalProject && <ProjectModal project={modalProject} closeModal={closeModal} /> } 
    </>
  );
};

export default Portfolio;
