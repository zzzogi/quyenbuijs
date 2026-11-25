import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import Icon from "./Icon";
import SocialLinks from "./SocialLinks";
import { MaybeLink } from "./Todo";

const ContactSection = ({ index }) => {
  const { language } = useContext(LanguageContext);
  const { contact, personal_info, social_links, ui } = portfolioData;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-content fade-in">
          <span className="section-index">{String(index).padStart(2, "0")}</span>
          <h2 className="contact-heading">{contact.heading[language]}</h2>
          <p className="contact-pitch">{contact.pitch[language]}</p>
          <p className="contact-availability">{contact.availability[language]}</p>
          <a href={social_links.email} className="contact-email">
            {personal_info.email}
          </a>
          <p className="contact-phone">{personal_info.phone}</p>
          <MaybeLink
            href={personal_info.cv_url}
            className="btn btn-ghost contact-cv"
            external
          >
            <Icon name="download" size={16} />
            {ui.download_cv[language]}
          </MaybeLink>
          <SocialLinks className="contact-socials" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
