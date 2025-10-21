import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useState } from "react";

const HobbySection = () => {
  const { language } = useContext(LanguageContext);
  const [activeHobby, setActiveHobby] = useState(null);

  const hobbiesData = [
    {
      id: 1,
      name: {
        en: "Food Lover",
        vi: "Ăn uống",
      },
      icon: "🍕",
      description: {
        en: "Eating is my passion, I always want to explore the culinary culture of many places on this earth.",
        vi: "Ăn uống là niềm đam mê của tôi, tôi luôn muốn khám phá văn hoá ẩm thực của nhiều nơi trên trái đất này.",
      },
      color: "#FF6B6B",
      stats: {
        en: "50000+ dishes devoured",
        vi: "50000+ đĩa cơm đã ăn",
      },
      images: [
        "/quyenbuijs/assets/images/hobbies/food-1.jpg",
        "/quyenbuijs/assets/images/hobbies/food-2.jpg",
        "/quyenbuijs/assets/images/hobbies/food-3.jpg",
      ],
    },
    {
      id: 2,
      name: {
        en: "Gaming",
        vi: "Chơi Game",
      },
      icon: "🎮",
      description: {
        en: "Strategy games and RPGs are my favorites. Love the storytelling and problem-solving aspects.",
        vi: "Game chiến thuật và RPG là sở thích. Yêu thích yếu tố kể chuyện và giải quyết vấn đề.",
      },
      color: "#4ECDC4",
      stats: {
        en: "1000+ hours played",
        vi: "1000+ giờ chơi",
      },
      images: [
        "/quyenbuijs/assets/images/hobbies/gaming-1.png",
        "/quyenbuijs/assets/images/hobbies/gaming-2.jpg",
        "/quyenbuijs/assets/images/hobbies/gaming-3.jpg",
      ],
    },

    {
      id: 5,
      name: {
        en: "Coffee Brewing",
        vi: "Pha Cà Phê",
      },
      icon: "☕",
      description: {
        en: "Experimenting with different brewing methods and beans. The perfect cup is an art form.",
        vi: "Thử nghiệm nhiều phương pháp pha và loại hạt khác nhau. Ly cà phê hoàn hảo là một nghệ thuật.",
      },
      color: "#AA96DA",
      stats: {
        en: "Daily ritual",
        vi: "Nghi thức hàng ngày",
      },
      images: [
        "/quyenbuijs/assets/images/hobbies/coffee-1.jpg",
        "/quyenbuijs/assets/images/hobbies/coffee-2.jpg",
        "/quyenbuijs/assets/images/hobbies/coffee-3.jpg",
      ],
    },
    {
      id: 6,
      name: {
        en: "Travel",
        vi: "Du Lịch",
      },
      icon: "✈️",
      description: {
        en: "Exploring new cultures and cuisines. Every trip is a new adventure and learning experience.",
        vi: "Khám phá văn hóa và ẩm thực mới. Mỗi chuyến đi là một cuộc phiêu lưu và trải nghiệm học tập.",
      },
      color: "#FCBAD3",
      stats: {
        en: "15+ countries visited",
        vi: "15+ quốc gia đã đến",
      },
      images: [
        "/quyenbuijs/assets/images/hobbies/travel-1.jpg",
        "/quyenbuijs/assets/images/hobbies/travel-2.jpg",
        "/quyenbuijs/assets/images/hobbies/travel-3.jpg",
      ],
    },
  ];

  const sectionTitle = {
    en: "Hobbies & Interests",
    vi: "Sở Thích & Đam Mê",
  };

  const sectionSubtitle = {
    en: "When I'm not coding, you'll find me doing these",
    vi: "Khi không code, bạn sẽ thấy tôi làm những điều này",
  };

  return (
    <section id="hobbies" className="hobbies-section">
      <div className="hobbies-container">
        <h2 className="section-title neon-text">{sectionTitle[language]}</h2>
        <p className="section-subtitle">{sectionSubtitle[language]}</p>

        <div className="hobbies-grid">
          {hobbiesData.map((hobby) => (
            <div
              key={hobby.id}
              className={`hobby-card ${
                activeHobby === hobby.id ? "active" : ""
              }`}
              onMouseEnter={() => setActiveHobby(hobby.id)}
              onMouseLeave={() => setActiveHobby(null)}
              style={{ "--hobby-color": hobby.color }}
            >
              <div className="hobby-icon">{hobby.icon}</div>
              <h3 className="hobby-name">{hobby.name[language]}</h3>
              <p className="hobby-description">{hobby.description[language]}</p>
              <div className="hobby-stats">{hobby.stats[language]}</div>

              {/* Image preview on hover */}
              <div className="hobby-images">
                {hobby.images.map((image, index) => (
                  <div
                    key={index}
                    className="hobby-image"
                    style={{
                      backgroundImage: `url(${image})`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="hobby-glow"></div>
            </div>
          ))}
        </div>

        {/* Fun fact section */}
        <div className="fun-fact">
          <span className="fun-fact-icon">💡</span>
          <p className="fun-fact-text">
            {language === "en"
              ? "Fun fact: I believe in work-life balance and these hobbies keep me creative and inspired!"
              : "Điều thú vị: Tôi tin vào cân bằng công việc-cuộc sống và những sở thích này giúp tôi sáng tạo và đầy cảm hứng!"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HobbySection;
