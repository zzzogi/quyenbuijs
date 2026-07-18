import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import { scrollToSection } from "./Header";

const HeroSection = () => {
  const { language } = useContext(LanguageContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { hero, personal_info } = portfolioData;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % hero.portraits.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [hero.portraits.length]);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow rise delay-1">{hero.eyebrow[language]}</p>
          <h1 className="hero-title rise delay-2">{personal_info.name}</h1>
          <p className="hero-tagline rise delay-3">{hero.tagline[language]}</p>
          <div className="hero-ctas rise delay-4">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              {hero.cta_projects[language]}
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => scrollToSection("contact")}
            >
              {hero.cta_contact[language]}
            </button>
          </div>
        </div>

        <div className="hero-portrait rise delay-3">
          <div className="portrait-frame">
            {hero.portraits.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={index === 0 ? personal_info.name : ""}
                className={`portrait-image ${
                  index === currentImageIndex ? "active" : ""
                }`}
                width="480"
                height="600"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
