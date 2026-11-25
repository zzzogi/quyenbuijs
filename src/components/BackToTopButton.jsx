import { useContext, useEffect, useState } from "react";
import Icon from "./Icon";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setIsVisible(scrollPercentage > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={portfolioData.ui.back_to_top[language]}
      tabIndex={isVisible ? 0 : -1}
    >
      <Icon name="arrow-up" size={18} />
    </button>
  );
};

export default BackToTopButton;
