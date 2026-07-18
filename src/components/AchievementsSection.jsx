import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import Section from "./Section";
import Icon from "./Icon";

const AchievementsSection = () => {
  const { language } = useContext(LanguageContext);
  const [selected, setSelected] = useState(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  // Accessible modal behavior: Escape closes, body scroll locks,
  // focus moves to the dialog and returns to the trigger on close.
  useEffect(() => {
    if (!selected) return;

    previousFocusRef.current = document.activeElement;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "Tab") {
        const focusables = document
          .querySelector(".certificate-modal .modal-content")
          ?.querySelectorAll("button, a[href]");
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, [selected]);

  return (
    <Section
      id="achievements"
      index={4}
      title={portfolioData.section_titles.achievements[language]}
    >
      <div className="achievements-grid">
        {portfolioData.achievements.map((achievement) => (
          <button
            key={achievement.id}
            className="achievement-card fade-in"
            onClick={() => setSelected(achievement)}
          >
            <div className="achievement-icons">
              {achievement.icons.map((icon) => (
                <img
                  key={icon}
                  src={icon}
                  alt=""
                  width="40"
                  height="40"
                  loading="lazy"
                />
              ))}
            </div>
            <h3 className="achievement-title">{achievement.title[language]}</h3>
            <p className="achievement-description">
              {achievement.description[language]}
            </p>
            <p className="achievement-meta">
              {achievement.date} · {achievement.issuer[language]}
            </p>
            <span className="achievement-view">
              {language === "en" ? "View certificate" : "Xem chứng chỉ"}
              <Icon name="arrow-up-right" size={14} />
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="certificate-modal"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title[language]}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              ref={closeButtonRef}
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label={language === "en" ? "Close" : "Đóng"}
            >
              <Icon name="x" size={20} />
            </button>
            <h3 className="modal-title">{selected.title[language]}</h3>
            <p className="modal-meta">
              {selected.date} · {selected.issuer[language]}
            </p>
            <img
              src={selected.certificateImage}
              alt={selected.title[language]}
              className="certificate-image"
            />
            <p className="modal-description">
              {selected.description[language]}
            </p>
          </div>
        </div>
      )}
    </Section>
  );
};

export default AchievementsSection;
