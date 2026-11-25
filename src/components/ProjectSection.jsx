import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import Section from "./Section";
import TechTag from "./TechTag";
import Icon from "./Icon";
import { T } from "./Todo";

// Fake-UI illustration for internal systems that can't be screenshotted.
// Contains no real data — only generic module names and skeleton rows.
const RinglockIllustration = ({ language }) => {
  const { ui } = portfolioData;
  const nav =
    language === "vi"
      ? ["Tài liệu", "TP Academy", "Hoá đơn", "Đồng bộ MISA"]
      : ["Documents", "TP Academy", "Invoicing", "MISA sync"];
  return (
    <div className="mock" role="img" aria-label={ui.illustration[language]}>
      <div className="mock-window">
        <div className="mock-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="mock-body">
          <div className="mock-side">
            <span className="mock-logo">Ringlock TP</span>
            {nav.map((item, i) => (
              <span key={item} className={`mock-nav ${i === 2 ? "on" : ""}`}>
                {item}
              </span>
            ))}
          </div>
          <div className="mock-main">
            <div className="mock-stats">
              {[0, 1, 2].map((i) => (
                <div key={i} className="mock-stat">
                  <b />
                  <s />
                </div>
              ))}
            </div>
            <div className="mock-table">
              {[72, 56, 80, 64, 48].map((w, i) => (
                <div key={i} className="mock-row">
                  <s style={{ width: `${w}%` }} />
                  <em />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className="mock-caption">{ui.illustration[language]}</span>
    </div>
  );
};

const ProjectLinks = ({ project, language }) => {
  if (project.links.length === 0 && !project.note) return null;
  return (
    <div className="project-links">
      {project.links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label} <Icon name="arrow-up-right" size={14} />
        </a>
      ))}
      {project.note && <span className="project-note">{project.note[language]}</span>}
    </div>
  );
};

const ProjectMedia = ({ project, language, featured }) => {
  if (project.illustration === "ringlock") {
    return (
      <div className="project-media project-media--mock">
        <RinglockIllustration language={language} />
      </div>
    );
  }
  if (!project.image) return null;
  return (
    <div className="project-media">
      <img
        src={project.image.src}
        alt={project.image.alt[language]}
        width={project.image.width}
        height={project.image.height}
        loading="lazy"
        decoding="async"
        sizes={featured ? "(max-width: 1080px) 100vw, 1030px" : undefined}
      />
    </div>
  );
};

const FeaturedProject = ({ project, language }) => {
  const { ui } = portfolioData;
  return (
    <article className="project-card project-card--featured fade-in">
      <ProjectMedia project={project} language={language} featured />
      <div className="featured-body">
        <div className="featured-main">
          <p className="project-kind">{project.kind[language]}</p>
          <h3 className="project-title">{project.title[language]}</h3>
          <dl className="project-facts">
            <dt>{ui.problem[language]}</dt>
            <dd>{project.problem[language]}</dd>
            <dt>{ui.work[language]}</dt>
            <dd>
              <ul className="project-bullets">
                {project.work[language].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </dl>
        </div>
        <div className="featured-aside">
          <p className="aside-label">{ui.result[language]}</p>
          <ul className="metrics">
            {project.metrics.map((m) => (
              <li key={m.label.en} className="metric">
                <span className="metric-value">
                  <T>{m.value[language]}</T>
                </span>
                <span className="metric-label">{m.label[language]}</span>
              </li>
            ))}
          </ul>
          <div className="tech-tags">
            {project.technologies.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>
          <ProjectLinks project={project} language={language} />
        </div>
      </div>
    </article>
  );
};

const ProjectCard = ({ project, language }) => {
  const { ui } = portfolioData;
  return (
    <article className="project-card fade-in">
      <ProjectMedia project={project} language={language} />
      <div className="project-content">
        <p className="project-kind">{project.kind[language]}</p>
        <h3 className="project-title">{project.title[language]}</h3>
        <dl className="project-facts project-facts--compact">
          <dt>{ui.problem[language]}</dt>
          <dd>{project.problem[language]}</dd>
          <dt>{ui.work[language]}</dt>
          <dd>{project.work[language]}</dd>
          <dt>{ui.result[language]}</dt>
          <dd>
            <T>{project.result[language]}</T>
          </dd>
        </dl>
        <div className="tech-tags">
          {project.technologies.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>
        <ProjectLinks project={project} language={language} />
      </div>
    </article>
  );
};

const ProjectsSection = ({ index }) => {
  const { language } = useContext(LanguageContext);
  const { projects, other_projects, section_titles, ui } = portfolioData;
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" index={index} title={section_titles.projects[language]}>
      <div className="featured-list">
        {featured.map((project) => (
          <FeaturedProject key={project.id} project={project} language={language} />
        ))}
      </div>

      <div className="projects-grid">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} language={language} />
        ))}
      </div>

      {other_projects.length > 0 && (
        <p className="other-projects fade-in">
          <span className="other-projects-label">{ui.other_projects[language]}:</span>{" "}
          {other_projects.map((p, i) => (
            <span key={p.url}>
              {i > 0 && " · "}
              <a
                href={p.url}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.title[language]} <Icon name="arrow-up-right" size={14} />
              </a>
            </span>
          ))}
        </p>
      )}
    </Section>
  );
};

export default ProjectsSection;
