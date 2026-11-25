import { useContext, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectSection";
import CertificationsSection from "./components/CertificationsSection";
import OffHoursSection from "./components/OffHoursSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import LanguageProvider, { LanguageContext } from "./context/LanguageContext";
import ThemeProvider from "./context/ThemeContext";

const AppContent = () => {
  const { language } = useContext(LanguageContext);

  // Shared scroll-reveal: elements with .fade-in get .visible when entering
  // the viewport. Re-observes on language switch in case of new elements.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [language]);

  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <AboutSection index={1} />
        <ExperienceSection index={2} />
        <ProjectsSection index={3} />
        <CertificationsSection index={4} />
        <OffHoursSection index={5} />
        <ContactSection index={6} />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

const App = () => (
  <LanguageProvider>
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  </LanguageProvider>
);

export default App;
