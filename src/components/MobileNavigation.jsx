import { useEffect } from "react";
import portfolioData from "../data/pageData";
import Icon from "./Icon";

const MobileNavigation = ({ isOpen, onClose, language }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  return (
    <div
      className={`mobile-nav ${isOpen ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={portfolioData.ui.main_nav[language]}
      aria-hidden={!isOpen}
    >
      <button
        className="mobile-nav-close"
        onClick={onClose}
        aria-label={portfolioData.ui.close_menu[language]}
        tabIndex={isOpen ? 0 : -1}
      >
        <Icon name="x" size={24} />
      </button>
      {portfolioData.navItems.map(({ id, label }, i) => (
        <a
          key={id}
          href={`#${id}`}
          className="mobile-nav-link"
          tabIndex={isOpen ? 0 : -1}
          style={{ transitionDelay: isOpen ? `${100 + i * 50}ms` : "0ms" }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(id);
          }}
        >
          {label[language]}
        </a>
      ))}
    </div>
  );
};

export default MobileNavigation;
