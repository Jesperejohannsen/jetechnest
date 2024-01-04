import { useState, useEffect } from "react";
import "./ProjectsSection.css";
import NerveSignalPicture from "../../assets/nerveSignal.png";
import ReactivitiesPicture from "../../assets/reactivities.png";
import KHCustomsPicture from "../../assets/KhCustoms.png";

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
    title: "Social Activity Tracker",
    description: "The project at hand is a sophisticated Social Activity Tracker that enables users to seamlessly create, manage, and engage in social events. Developed using a technologically diverse stack, including C#, .NET, Identity, Entity Framework, SignalR, AutoMapper, React, Axios, MobX, BrowserRouter, and Semantic UI, the system embodies a microservices architecture for scalability and maintainability. On the backend, C# and .NET provide a robust foundation, Identity ensures secure authentication, Entity Framework streamlines database interactions, and SignalR facilitates real-time communication. AutoMapper optimizes object mapping, enhancing data manipulation efficiency. The frontend, built with React, leverages Axios for API integration, MobX for state management, BrowserRouter for smooth navigation, and Semantic UI for an aesthetically pleasing design. This comprehensive integration of technologies results in a responsive and user-centric platform, exemplifying the effectiveness of a well-rounded technological approach to digital community building",
    image: ReactivitiesPicture,
  },
  {
    title: "Project 3",
    description: "I am currently in the process of developing a professional website for my sister's newly established business venture, specializing in custom clearance services. The primary focus of this website is to serve as an informative platform for clients seeking insights into custom rules, regulations, and consultancy services. While the current iteration of the website is designed as an informative platform, there is a consideration for potential expansions in the future. The modular and extensible nature of the codebase, coupled with the use of React, ensures a smooth integration of additional features and functionalities as the business grows.",
    image: KHCustomsPicture,
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
    <>
    <div className="project-overview">
      <h3>Allow me to share a glimpse into some of the projects I've undertaken during my spare time.</h3>
    </div>
    <div id="projects" className="projects-section">
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
  </>
  );
};

export default ProjectsSection;
