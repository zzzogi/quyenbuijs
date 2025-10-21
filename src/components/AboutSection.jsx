import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";

const AboutSection = () => {
  const { language } = useContext(LanguageContext);
  const nav = portfolioData.navigation[language];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title neon-glow">{nav.about}</h2>
        <div className="about-content fade-in">
          <img
            src={"/quyenbuijs/assets/images/about/quyenbui.jpg"}
            alt="Quyen Bui"
            className="profile-image"
          />
          <div className="about-text">
            <p>{portfolioData.about[language]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
