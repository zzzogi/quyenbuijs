import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import { scrollToSection } from "./Header";
import SocialLinks from "./SocialLinks";

// Wide screens only (CSS hides it below 1360px): a section-progress rail on
// the left and a social rail on the right, filling the empty side gutters.
const SideRails = () => {
  const { language } = useContext(LanguageContext);
  const { section_order, section_titles, ui } = portfolioData;
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    section_order.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [section_order]);

  return (
    <>
      <nav className="rail rail--left" aria-label={ui.main_nav[language]}>
        <ol>
          {section_order.map((id, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`rail-link ${active === id ? "active" : ""}`}
                aria-current={active === id ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
              >
                <span className="rail-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="rail-bar" aria-hidden="true" />
                <span className="rail-label">{section_titles[id][language]}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="rail rail--right">
        <SocialLinks className="rail-socials" size={18} hideTodo />
        <span className="rail-line" aria-hidden="true" />
      </div>
    </>
  );
};

export default SideRails;
