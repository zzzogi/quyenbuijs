// Enhanced scroll behavior and performance optimizations
const enhanceScrollBehavior = () => {
  // Smooth scrolling polyfill for older browsers
  if (!("scrollBehavior" in document.documentElement.style)) {
    const smoothscroll = () => {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const target = document.querySelector(link.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });
    };
    smoothscroll();
  }
};

export default enhanceScrollBehavior;
