import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import Section from "./Section";

const HobbySection = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section
      id="hobbies"
      index={5}
      title={portfolioData.section_titles.hobbies[language]}
      subtitle={portfolioData.hobbies_subtitle[language]}
    >
      <div className="hobbies-grid">
        {portfolioData.hobbies.map((hobby) => (
          <article key={hobby.id} className="hobby-card fade-in">
            <div className="hobby-icon" aria-hidden="true">
              {hobby.icon}
            </div>
            <h3 className="hobby-name">{hobby.name[language]}</h3>
            <p className="hobby-description">{hobby.description[language]}</p>
            <p className="hobby-stats">{hobby.stats[language]}</p>
            {/* <div className="hobby-strip">
              {hobby.images.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt=""
                  width="120"
                  height="80"
                  loading="lazy"
                />
              ))}
            </div> */}
          </article>
        ))}
      </div>

      <p className="fun-fact fade-in">{portfolioData.fun_fact[language]}</p>
    </Section>
  );
};

export default HobbySection;
