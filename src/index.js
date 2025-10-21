import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import enhanceScrollBehavior from "./utils/enhenceScroll";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Initialize enhancements
document.addEventListener("DOMContentLoaded", () => {
  enhanceScrollBehavior();

  // Performance optimization: Throttle scroll events
  let ticking = false;
  const throttleScroll = (callback) => {
    return () => {
      if (!ticking) {
        requestAnimationFrame(callback);
        ticking = true;
      }
      setTimeout(() => {
        ticking = false;
      }, 16); // ~60fps
    };
  };

  // Apply scroll throttling to scroll-dependent features
  const handleScrollThrottled = throttleScroll(() => {
    // This will be handled by React components
  });

  window.addEventListener("scroll", handleScrollThrottled, { passive: true });
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
