import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const { language } = useContext(LanguageContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images for Hero section
  const backgroundImages = [
    "/assets/images/profile/profile-1.jpg",
    "/assets/images/profile/profile-2.jpg",
    "/assets/images/profile/profile-3.jpg",
    "/assets/images/profile/profile-4.jpg",
  ];

  // Rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const heroContent = {
    title: "Welcome to Quyen's World",
    subtitle: {
      en: "Full Stack Developer | React Specialist | Cyber Security Enthusiast",
      vi: "Lập Trình Viên Full Stack | Chuyên Gia React | Đam Mê An ninh mạng",
    },
    description: {
      en: "Crafting digital experiences with cutting-edge technology",
      vi: "Tạo nên trải nghiệm số với công nghệ tiên tiến",
    },
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background image slideshow */}
      <div className="hero-background-slideshow">
        {backgroundImages.map((image, index) => (
          // <div
          //   key={index}
          //   className={`background-image ${
          //     index === currentImageIndex ? "active" : ""
          //   }`}
          //   style={{ backgroundImage: `url(${image})` }}
          // ></div>
          <img
            key={index}
            src={image}
            alt="profile image"
            className={`background-image ${
              index === currentImageIndex ? "active" : ""
            }`}
          />
        ))}
        <div className="background-overlay"></div>
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <h1 className={`hero-title neon-glow fade-in-down`}>
          {heroContent.title}
        </h1>

        <p className={`hero-subtitle fade-in-up delay-1`}>
          {heroContent.subtitle[language]}
        </p>

        <p className={`hero-description fade-in-up delay-2`}>
          {heroContent.description[language]}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
