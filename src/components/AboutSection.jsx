import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import Section from "./Section";

const AboutSection = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section
      id="about"
      index={1}
      title={portfolioData.section_titles.about[language]}
    >
      <div className="about-grid fade-in">
        <p className="about-text">{portfolioData.about[language]}</p>
        <dl className="about-facts">
          {portfolioData.about_facts.map((fact) => (
            <div key={fact.label.en} className="fact-item">
              <dt className="fact-label">{fact.label[language]}</dt>
              <dd className="fact-value">{fact.value[language]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
};

export default AboutSection;
