// Welcome Screen Component with Electrical Animations
import { useState, useEffect } from "react";

const WelcomeScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`welcome-screen ${!isVisible ? "hidden" : ""}`}>
      <div className="electrical-flow">
        <div className="electrical-wire"></div>
        <div className="electrical-wire"></div>
        <div className="electrical-wire"></div>
        <div className="electrical-wire"></div>
        <div className="data-stream"></div>
        <div className="data-stream"></div>
        <div className="particle-flow"></div>
        <div className="particle-flow"></div>
        <div className="particle-flow"></div>
        <div className="particle-flow"></div>
      </div>
      <h1 className="welcome-text neon-glow">Welcome to Quyen's World</h1>
    </div>
  );
};

export default WelcomeScreen;
