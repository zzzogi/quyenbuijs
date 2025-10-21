import portfolioData from "../data/pageData";

const MobileNavigation = ({ isOpen, onClose, language }) => {
  const nav = portfolioData.navigation[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  return (
    <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
      <button className="mobile-nav-close" onClick={onClose}>
        ×
      </button>
      <a
        href="#about"
        className="mobile-nav-link"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("about");
        }}
      >
        {nav.about}
      </a>
      <a
        href="#experience"
        className="mobile-nav-link"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("experience");
        }}
      >
        {nav.experience}
      </a>
      <a
        href="#projects"
        className="mobile-nav-link"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("projects");
        }}
      >
        {nav.projects}
      </a>
      <a
        href="#gallery"
        className="mobile-nav-link"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("gallery");
        }}
      >
        {nav.gallery}
      </a>
      <a
        href="#contact"
        className="mobile-nav-link"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("contact");
        }}
      >
        {nav.contact}
      </a>
    </div>
  );
};

export default MobileNavigation;
