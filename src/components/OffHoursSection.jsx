import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import Section from "./Section";

const OffHoursSection = ({ index }) => {
  const { language } = useContext(LanguageContext);
  const { hobbies, gallery, section_titles, offhours_subtitle } = portfolioData;

  return (
    <Section
      id="offhours"
      index={index}
      title={section_titles.offhours[language]}
      subtitle={offhours_subtitle[language]}
    >
      <ul className="hobby-chips fade-in">
        {hobbies.map((hobby) => (
          <li key={hobby.name.en} className="hobby-chip">
            <span aria-hidden="true">{hobby.icon}</span>
            {hobby.name[language]}
          </li>
        ))}
      </ul>

      <ul className="gallery-grid fade-in">
        {gallery.map((photo) => (
          <li key={photo.src}>
            <img
              src={photo.src}
              alt={photo.alt[language]}
              width="640"
              height="800"
              loading="lazy"
              decoding="async"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default OffHoursSection;
