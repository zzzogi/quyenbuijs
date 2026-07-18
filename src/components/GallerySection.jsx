import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import portfolioData from "../data/pageData";
import Section from "./Section";

const GallerySection = () => {
  const { language } = useContext(LanguageContext);
  const images = portfolioData.gallery_images;

  return (
    <Section
      id="gallery"
      index={6}
      title={portfolioData.section_titles.gallery[language]}
    >
      <div className="gallery-carousel fade-in">
        <div className="gallery-track">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={
                language === "en"
                  ? `Photo ${index + 1} of ${images.length} from Quyen's gallery`
                  : `Ảnh ${index + 1} trong ${images.length} từ thư viện của Quyền`
              }
              className="gallery-image"
              height="280"
              loading="lazy"
            />
          ))}
          {/* Duplicate strip for the seamless marquee loop */}
          {images.map((image) => (
            <img
              key={`dup-${image}`}
              src={image}
              alt=""
              aria-hidden="true"
              className="gallery-image"
              height="280"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default GallerySection;
