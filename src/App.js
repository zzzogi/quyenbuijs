import WelcomeScreen from "./components/WelcomeSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import BackgroundElements from "./components/BackgroundElement";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HobbySection from "./components/HobbySection";
import ExperienceSection from "./components/ExperienceSection";
import AchievementsSection from "./components/AchievementsSection";
import ProjectsSection from "./components/ProjectSection";
import { useState, useEffect } from "react";
import LanguageProvider from "./context/LanguageContext";
import ThemeProvider from "./context/ThemeContext";
import { ThemeContext } from "./context/ThemeContext";

// Main App Component
const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [showPersistentWelcome, setShowPersistentWelcome] = useState(false);
  const { theme } = ThemeContext;

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setHeaderVisible(true);
    // Show persistent welcome text after a slight delay
    setTimeout(() => setShowPersistentWelcome(true), 1000);
  };

  useEffect(() => {
    // Initialize theme
    document.documentElement.setAttribute("data-theme", theme);

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [theme, showWelcome]);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="app">
          <BackgroundElements />

          {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}

          <Header
            isVisible={headerVisible}
            showPersistentWelcome={showPersistentWelcome}
          />

          <main className="main-content">
            <HeroSection />
            <AboutSection />
            <HobbySection />
            <AchievementsSection />
            <ExperienceSection />
            <ProjectsSection />
            <GallerySection />
            {/* <ContactSection /> */}
          </main>

          <Footer />

          <BackToTopButton />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
