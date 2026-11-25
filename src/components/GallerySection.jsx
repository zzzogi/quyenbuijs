import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import Section from "./Section";
import Icon from "./Icon";

const AUTOPLAY_MS = 4000;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Centre-snapping carousel: swipe/scroll natively, prev/next + dots, autoplay
// that pauses on hover/focus, when off-screen, or via the pause button.
// The track has side padding so every photo (first and last too) can sit
// in the centre - the centred one is "active".
const GallerySection = ({ index }) => {
  const { language } = useContext(LanguageContext);
  const { gallery, section_titles, ui } = portfolioData;
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);

  const goTo = useCallback((i) => {
    const track = trackRef.current;
    const items = [...(track?.children ?? [])];
    if (!track || items.length === 0) return;
    const target = items[(i + items.length) % items.length];
    track.scrollTo({
      left: target.offsetLeft - (track.clientWidth - target.offsetWidth) / 2,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, []);

  // The slide closest to the track's centre is the active one
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const centre = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    [...track.children].forEach((el, i) => {
      const d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - centre);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  };

  // Only autoplay while the carousel is on screen
  useEffect(() => {
    const track = trackRef.current;
    if (!track || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.3,
    });
    io.observe(track);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || hovered || !inView) return;
    // goTo wraps from the last photo back to the first
    const timer = setInterval(() => goTo(active + 1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [playing, hovered, inView, active, goTo]);

  return (
    <Section id="gallery" index={index} title={section_titles.gallery[language]}>
      <div
        className="carousel fade-in"
        role="region"
        aria-roledescription="carousel"
        aria-label={ui.carousel[language]}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <div
          className="carousel-track"
          ref={trackRef}
          onScroll={onScroll}
          tabIndex={0}
          aria-label={ui.carousel[language]}
        >
          {gallery.map((photo, i) => (
            <div
              key={photo.src}
              className={`carousel-slide ${i === active ? "active" : ""}`}
              onClick={() => i !== active && goTo(i)}
              role="group"
              aria-roledescription="slide"
              aria-label={`${ui.slide[language]} ${i + 1} ${ui.of[language]} ${gallery.length}`}
            >
              <img
                src={photo.src}
                alt={photo.alt[language]}
                width="640"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <div className="carousel-dots">
            {gallery.map((photo, i) => (
              <button
                key={photo.src}
                className={`carousel-dot ${i === active ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`${ui.go_to[language]} ${i + 1}`}
                aria-current={i === active ? "true" : undefined}
              />
            ))}
          </div>
          <span className="carousel-count" aria-live="polite">
            {String(active + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
          </span>
          <div className="carousel-buttons">
            <button
              className="carousel-btn"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? ui.pause[language] : ui.play[language]}
            >
              <Icon name={playing ? "pause" : "play"} size={16} />
            </button>
            <button
              className="carousel-btn"
              onClick={() => goTo(active - 1)}
              aria-label={ui.prev[language]}
            >
              <Icon name="chevron-left" size={18} />
            </button>
            <button
              className="carousel-btn"
              onClick={() => goTo(active + 1)}
              aria-label={ui.next[language]}
            >
              <Icon name="chevron-right" size={18} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default GallerySection;
