import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import Section from "./Section";
import TechTag from "./TechTag";
import Icon from "./Icon";

const ProjectsSection = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section
      id="projects"
      index={3}
      title={portfolioData.section_titles.projects[language]}
    >
      <div className="projects-grid">
        {portfolioData.projects.map((project) => (
          <article key={project.id} className="project-card fade-in">
            <div className="project-media">
              <img
                src={project.image}
                alt={project.title[language]}
                width="400"
                height="250"
                loading="lazy"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title[language]}</h3>
              <p className="project-description">
                {project.description[language]}
              </p>
              <div className="tech-tags">
                {project.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
              {(project.demo_url || project.github_url) && (
                <div className="project-links">
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo <Icon name="arrow-up-right" size={14} />
                    </a>
                  )}
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <Icon name="arrow-up-right" size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
