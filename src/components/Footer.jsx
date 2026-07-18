import portfolioData from "../data/pageData";
import Icon from "./Icon";

const Footer = () => {
  const { social_links, personal_info } = portfolioData;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="copyright">
          © {new Date().getFullYear()} {personal_info.name}
        </p>
        <div className="footer-socials">
          <a
            href={social_links.github}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Icon name="github" size={18} />
          </a>
          <a
            href={social_links.linkedin}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Icon name="linkedin" size={18} />
          </a>
          <a
            href={social_links.email}
            className="social-link"
            aria-label="Email"
          >
            <Icon name="mail" size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
