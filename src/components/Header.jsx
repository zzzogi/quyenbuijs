import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import portfolioData from "../data/pageData";
import MobileNavigation from "./MobileNavigation";
import Icon from "./Icon";

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    // Observe every section (not only nav items) so the highlight clears
    // while reading a section that has no nav link
    ["hero", ...portfolioData.section_order].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          <a
            href="#hero"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            quyenbui.js
          </a>

          <nav className="nav-menu" aria-label={portfolioData.ui.main_nav[language]}>
            {portfolioData.navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link ${activeSection === id ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
              >
                {label[language]}
              </a>
            ))}
          </nav>

          <div className="controls">
            <button
              className="control-btn lang-btn"
              onClick={() => setLanguage(language === "en" ? "vi" : "en")}
              aria-label={portfolioData.ui.toggle_language[language]}
              lang={language === "en" ? "vi" : "en"}
            >
              {language === "en" ? "VI" : "EN"}
            </button>
            <button
              className="control-btn"
              onClick={toggleTheme}
              aria-label={portfolioData.ui.toggle_theme[language]}
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} size={16} />
            </button>
            <button
              className="control-btn mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label={portfolioData.ui.open_menu[language]}
              aria-expanded={mobileMenuOpen}
            >
              <Icon name="menu" size={18} />
            </button>
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
