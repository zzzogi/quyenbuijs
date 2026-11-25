import portfolioData from "../data/pageData";
import Icon from "./Icon";
import { isTodo, T } from "./Todo";

const NETWORKS = [
  { key: "github", label: "GitHub" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "facebook", label: "Facebook" },
  { key: "email", label: "Email" },
];

// Shared by Contact and Footer. A placeholder URL shows a visible marker
// (in Contact) or is skipped (in the compact footer).
const SocialLinks = ({ className = "", size = 20, hideTodo = false }) => {
  const { social_links } = portfolioData;

  return (
    <div className={className}>
      {NETWORKS.map(({ key, label }) => {
        const href = social_links[key];
        if (!href) return null;
        if (isTodo(href)) {
          return hideTodo ? null : (
            <span key={key} className="social-todo">
              <Icon name={key} size={16} /> <T>{href}</T>
            </span>
          );
        }
        const external = key !== "email";
        return (
          <a
            key={key}
            href={href}
            className="social-link"
            aria-label={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <Icon name={key === "email" ? "mail" : key} size={size} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
