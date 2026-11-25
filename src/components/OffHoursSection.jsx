import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import Section from "./Section";
import Icon from "./Icon";

const OffHoursSection = ({ index }) => {
  const { language } = useContext(LanguageContext);
  const { hobbies, section_titles, offhours_subtitle } = portfolioData;

  return (
    <Section
      id="offhours"
      index={index}
      title={section_titles.offhours[language]}
      subtitle={offhours_subtitle[language]}
    >
      <ul className="hobby-grid">
        {hobbies.map((hobby, i) => (
          <li key={hobby.name.en} className="hobby-card fade-in">
            <div className="hobby-top">
              <span className="hobby-icon" aria-hidden="true">
                <Icon name={hobby.icon} size={22} />
              </span>
              <span className="hobby-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="hobby-name">{hobby.name[language]}</h3>
            <p className="hobby-description">{hobby.description[language]}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default OffHoursSection;
