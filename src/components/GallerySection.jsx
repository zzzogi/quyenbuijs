import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";

const GallerySection = () => {
  const { language } = useContext(LanguageContext);
  const nav = portfolioData.navigation[language];

  // Double the images for infinite scroll effect
  const doubledImages = [
    ...portfolioData.gallery_images,
    ...portfolioData.gallery_images,
  ];

  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2 className="section-title neon-glow">{nav.gallery}</h2>
        <div className="gallery-carousel">
          <div className="gallery-track">
            {doubledImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="gallery-image"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
