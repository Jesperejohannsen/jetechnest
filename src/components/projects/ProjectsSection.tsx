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
    description:
      "This collaborative endeavor among my peers and me involved the development of a Nerve Signal Generator, a technological apparatus designed to emulate the characteristics of a nerve signal. The generator afforded users the capability to modulate the intensity of the nerve signal, introduce temporal delays, and incorporate white noise, thereby allowing for a nuanced exploration of signal dynamics. The user interface was constructed using a combination of Python for backend functionality, JavaScript for dynamic interactivity, and HTML/CSS for presentation. The resultant program, encapsulating these multifaceted components, was stored within a SQLite database hosted on a Raspberry Pi platform. Notably, the generated nerve signals were visualized and manipulated through a JavaScript-based chart, facilitating user interaction and customization through graphical manipulation of data points within the chart interface..",
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

const truncateDescription = (description: string) => {
  const words = description.split(" ");
  return words.length > 5 ? `${words.slice(0, 5).join(" ")}...` : description;
};

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
          <p>{truncateDescription(project.description)}</p>
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
