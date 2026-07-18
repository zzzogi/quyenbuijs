import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import Section from "./Section";
import TechTag from "./TechTag";

const ExperienceSection = () => {
  const { language } = useContext(LanguageContext);

  // Reverse-chronological: most recent first
  const entries = [...portfolioData.experience].reverse();

  return (
    <Section
      id="experience"
      index={2}
      title={portfolioData.section_titles.experience[language]}
    >
      <div className="experience-timeline">
        {entries.map((exp) => (
          <article key={exp.id} className="experience-item fade-in">
            <span className="experience-duration">{exp.duration}</span>
            <div className="experience-body">
              <h3 className="experience-company">{exp.company}</h3>
              <p className="experience-position">{exp.position[language]}</p>
              <p className="experience-description">
                {exp.description[language]}
              </p>
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
    </Section>
  );
};

export default ExperienceSection;
