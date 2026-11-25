import portfolioData from "../data/pageData";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const { personal_info } = portfolioData;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="copyright">
          © {new Date().getFullYear()} {personal_info.name}
        </p>
        <SocialLinks className="footer-socials" size={18} hideTodo />
      </div>
    </footer>
  );
};

export default Footer;
