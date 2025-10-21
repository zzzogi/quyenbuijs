import MobileNavigation from "./MobileNavigation";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import portfolioData from "../data/pageData";
import { useState } from "react";

const Header = ({ isVisible, showPersistentWelcome }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const nav = portfolioData.navigation[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className={`header ${isVisible ? "visible" : ""}`}>
        <div className="header-content">
          <div style={{ display: "flex", alignItems: "center" }}>
            <a href="#" className="logo neon-glow">
              Quyenbui.js
            </a>
          </div>

          <div className="nav-container">
            <ul className="nav-menu">
              <li>
                <a
                  href="#about"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  {nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("experience");
                  }}
                >
                  {nav.experience}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                >
                  {nav.projects}
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("gallery");
                  }}
                >
                  {nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  {nav.contact}
                </a>
              </li>
            </ul>

            <div className="controls">
              <button
                className="toggle-btn"
                onClick={() => setLanguage(language === "en" ? "vi" : "en")}
                aria-label="Toggle language"
              >
                {language === "en" ? "VI" : "EN"}
              </button>
              {/* <button
                className="toggle-btn"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button> */}
              <button
                className="mobile-menu-btn"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        language={language}
      />
    </>
  );
};

export default Header;
