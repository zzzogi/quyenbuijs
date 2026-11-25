import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import { scrollToSection } from "./Header";
import { MaybeLink } from "./Todo";
import Icon from "./Icon";

const HeroSection = () => {
  const { language } = useContext(LanguageContext);
  const { hero, personal_info, ui } = portfolioData;
  const { portrait } = hero;

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-inner">
        <div className="hero-copy">
          {personal_info.available_for_freelance && (
            <p className="hero-badge rise delay-1">
              <span className="hero-badge-dot" aria-hidden="true" />
              {hero.badge[language]}
            </p>
          )}
          <p className="hero-eyebrow rise delay-1">{hero.eyebrow[language]}</p>
          <h1 className="hero-title rise delay-2">{personal_info.name}</h1>
          <p className="hero-tagline rise delay-3">{hero.tagline[language]}</p>
          <div className="hero-ctas rise delay-4">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              {hero.cta_projects[language]}
            </a>
            <MaybeLink
              href={personal_info.cv_url}
              className="btn btn-ghost"
              external
            >
              <Icon name="download" size={16} />
              {ui.download_cv[language]}
            </MaybeLink>
            <a
              href="#contact"
              className="btn btn-text"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              {hero.cta_contact[language]}
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-frame">
            <img
              src={portrait.src}
              srcSet={portrait.srcSet}
              sizes="(max-width: 768px) 260px, 380px"
              alt={portrait.alt[language]}
              className="portrait-image"
              width={portrait.width}
              height={portrait.height}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
