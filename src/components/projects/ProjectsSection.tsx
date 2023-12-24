import { useState, useEffect } from "react";
import "./ProjectsSection.css";
import NerveSignalPicture from "../../assets/nerveSignal.png";

type Project = {
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Nerve Signal Generator",
    description: "Project with my fellow students.",
    image: NerveSignalPicture,
  },
  {
    title: "Project 2",
    description: "This is a description of Project 2.",
    image: "url-to-image-2",
  },
  {
    title: "Project 3",
    description: "This is a description of Project 3.",
    image: "url-to-image-3",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className="projects-section">
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-card"
          onClick={() => handleCardClick(project)}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
        </div>
      ))}

      {selectedProject && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={stopPropagation}>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
            <div>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
            <img src={selectedProject.image} alt={selectedProject.title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;