import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import Section from "./Section";
import TechTag from "./TechTag";
import { T } from "./Todo";

const ExperienceSection = ({ index }) => {
  const { language } = useContext(LanguageContext);
  const { experience, education, section_titles, ui } = portfolioData;

  return (
    <Section
      id="experience"
      index={index}
      title={section_titles.experience[language]}
    >
      <div className="experience-timeline">
        {experience.map((exp) => (
          <article key={exp.id} className="experience-item fade-in">
            <span className="experience-duration">{exp.duration[language]}</span>
            <div className="experience-body">
              <h3 className="experience-company">{exp.company[language]}</h3>
              {exp.position && (
                <p className="experience-position">
                  <T>{exp.position[language]}</T>
                </p>
              )}
              <ul className="experience-bullets">
                {exp.bullets[language].map((item) => (
                  <li key={item}>
                    <T>{item}</T>
                  </li>
                ))}
              </ul>
              {exp.technologies.length > 0 && (
                <div className="tech-tags">
                  {exp.technologies.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="education fade-in">
        <h3 className="subsection-label">{ui.education[language]}</h3>
        <div className="education-row">
          <p className="education-main">
            <strong>{education.degree[language]}</strong>
            <span aria-hidden="true"> - </span>
            {education.school[language]}
          </p>
          <p className="education-meta">
            {education.duration} · {education.note[language]}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
