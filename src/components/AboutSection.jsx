import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import Section from "./Section";
import { T } from "./Todo";

const AboutSection = ({ index }) => {
  const { language } = useContext(LanguageContext);
  const { about, section_titles } = portfolioData;

  return (
    <Section id="about" index={index} title={section_titles.about[language]}>
      <div className="about-grid fade-in">
        <p className="about-text">{about.text[language]}</p>
        <dl className="about-facts">
          {about.facts.map((fact) => (
            <div key={fact.label.en} className="fact-item">
              <dt className="fact-label">{fact.label[language]}</dt>
              <dd className="fact-value">
                <T>{fact.value[language]}</T>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
};

export default AboutSection;
