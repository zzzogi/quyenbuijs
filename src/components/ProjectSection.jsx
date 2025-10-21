import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";

const ProjectsSection = () => {
  const { language } = useContext(LanguageContext);
  const nav = portfolioData.navigation[language];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title neon-glow">{nav.projects}</h2>
        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="project-item fade-in">
              <img
                src={project.image}
                alt={project.title[language]}
                className="project-image"
              />
              <div className="project-content">
                <h3>{project.title[language]}</h3>
                <p className="project-description">
                  {project.description[language]}
                </p>
                <div className="experience-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demo_url ? (
                    <a
                      href={project.demo_url}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  ) : null}
                  {project.github_url ? (
                    <a
                      href={project.github_url}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
