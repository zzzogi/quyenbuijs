import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";

const ExperienceSection = () => {
  const { language } = useContext(LanguageContext);
  const nav = portfolioData.navigation[language];
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.dataset.id;
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, itemId]));
            }, parseInt(itemId) * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = document.querySelectorAll(".experience-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title neon-glow">{nav.experience}</h2>
        <div className="experience-timeline">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`experience-item ${
                visibleItems.has(exp.id.toString()) ? "animate" : ""
              }`}
              data-id={exp.id}
            >
              <div className="experience-header">
                <div>
                  <h3 className="experience-company">{exp.company}</h3>
                  <h4 className="experience-position">
                    {exp.position[language]}
                  </h4>
                </div>
                <span className="experience-duration">{exp.duration}</span>
              </div>
              <p className="experience-description">
                {exp.description[language]}
              </p>
              <div className="experience-technologies">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
