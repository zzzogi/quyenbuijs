import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import Section from "./Section";
import Icon from "./Icon";
import { MaybeLink } from "./Todo";

const CertificationsSection = ({ index }) => {
  const { language } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const previousFocusRef = useRef(null);
  const { certifications, section_titles, ui } = portfolioData;
  const { featured, courses } = certifications;

  // Accessible modal: Escape closes, body scroll locks,
  // focus moves into the dialog and returns to the trigger on close.
  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll("button, a[href]");
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
  }, [open]);

  return (
    <Section
      id="certifications"
      index={index}
      title={section_titles.certifications[language]}
    >
      <div className="cert-layout">
        <button className="cert-featured fade-in" onClick={() => setOpen(true)}>
          <span className="cert-featured-title">{featured.title[language]}</span>
          <span className="cert-score">{featured.score}</span>
          <span className="cert-meta">
            {featured.issuer} · {featured.date}
          </span>
          <span className="cert-view">
            {ui.view_certificate[language]}
            <Icon name="arrow-up-right" size={14} />
          </span>
        </button>

        <div className="cert-courses fade-in">
          <h3 className="subsection-label">{ui.courses[language]}</h3>
          <ul className="course-list">
            {courses.map((course) => (
              <li key={course.title} className="course-item">
                <MaybeLink href={course.url} className="course-link" external>
                  <span className="course-title">{course.title}</span>
                  <span className="course-meta">
                    {course.issuer}
                    {course.date && ` · ${course.date}`}
                  </span>
                </MaybeLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {open && (
        <div
          className="certificate-modal"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={featured.title[language]}
        >
          <div
            className="modal-content"
            ref={dialogRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              className="modal-close"
              onClick={() => setOpen(false)}
              aria-label={ui.close[language]}
            >
              <Icon name="x" size={20} />
            </button>
            <h3 className="modal-title">{featured.title[language]}</h3>
            <p className="modal-meta">
              {featured.score} · {featured.issuer} · {featured.date}
            </p>
            <img
              src={featured.image}
              alt={featured.title[language]}
              className="certificate-image"
              width={featured.image_width}
              height={featured.image_height}
            />
          </div>
        </div>
      )}
    </Section>
  );
};

export default CertificationsSection;
