import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import Icon from "./Icon";

const ContactSection = () => {
  const { language } = useContext(LanguageContext);
  const { contact, personal_info, social_links } = portfolioData;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-content fade-in">
          <span className="section-index">07</span>
          <h2 className="contact-heading">{contact.heading[language]}</h2>
          <p className="contact-pitch">{contact.pitch[language]}</p>
          <a href={social_links.email} className="contact-email">
            {personal_info.email}
          </a>
          <p className="contact-phone">{personal_info.phone}</p>
          <div className="contact-socials">
            <a
              href={social_links.github}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Icon name="github" />
            </a>
            <a
              href={social_links.linkedin}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" />
            </a>
            <a
              href={social_links.email}
              className="social-link"
              aria-label="Email"
            >
              <Icon name="mail" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
