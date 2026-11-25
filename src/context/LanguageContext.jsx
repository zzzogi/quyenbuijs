import { createContext, useEffect, useState } from "react";
import portfolioData from "../data/pageData";

export const LanguageContext = createContext();

const LANGS = ["vi", "en"];

// Priority: ?lang=en|vi in the URL (shareable EN link) → last choice → Vietnamese
const getInitialLanguage = () => {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
    const stored = localStorage.getItem("language");
    if (LANGS.includes(stored)) return stored;
  } catch {
    // localStorage can throw in private modes - fall through to default
  }
  return "vi";
};

const setMeta = (selector, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute("content", value);
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    const { site } = portfolioData;
    document.documentElement.lang = language;
    document.title = site.title[language];
    setMeta('meta[name="description"]', site.description[language]);
    setMeta('meta[property="og:title"]', site.title[language]);
    setMeta('meta[property="og:description"]', site.description[language]);
    setMeta('meta[property="og:locale"]', language === "vi" ? "vi_VN" : "en_US");
    try {
      localStorage.setItem("language", language);
    } catch {
      // ignore
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
