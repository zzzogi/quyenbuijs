import portfolioData from "../data/pageData";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a
            href={portfolioData.social_links.github}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <span>🐙</span>
          </a>
          <a
            href={portfolioData.social_links.linkedin}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <span>💼</span>
          </a>
          <a
            href={portfolioData.social_links.email}
            className="social-link"
            title="Email"
          >
            <span>✉️</span>
          </a>
          <a
            href={portfolioData.social_links.twitter}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <span>🐦</span>
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Quyen Bui. Built with passion &amp;
          neon lights.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
