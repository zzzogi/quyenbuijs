import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useState } from "react";

const AchievementsSection = () => {
  const { language } = useContext(LanguageContext);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievementsData = [
    {
      id: 1,
      title: {
        en: "Node.js, Express, MongoDB Bootcamp",
        vi: "Khoá học Node.js, Express, MongoDB nâng cao",
      },
      description: {
        en: "Intermediate level certification for designing website using Node.js, Express, MongoDB",
        vi: "Chứng chỉ cấp về thiết kế, xây dựng website sử dụng Node.js, Express, MongoDB",
      },
      date: "2022",
      issuer: {
        en: "Udemy",
        vi: "Udemy",
      },
      certificateImage: "/quyenbuijs/assets/images/certificates/cert-1.jpg",
      icon: (
        <div>
          <img
            src={"/quyenbuijs/assets/images/icons/nodejs.png"}
            alt="certificate icon"
            style={{
              width: "64px",
              height: "64px",
            }}
          />{" "}
          <img
            src={"/quyenbuijs/assets/images/icons/express.png"}
            alt="certificate icon"
            style={{
              width: "64px",
              height: "64px",
            }}
          />{" "}
          <img
            src={"/quyenbuijs/assets/images/icons/mongo.png"}
            alt="certificate icon"
            style={{
              width: "64px",
              height: "64px",
            }}
          />
        </div>
      ),
    },
    {
      id: 2,
      title: {
        en: "JavaScript Course: From Zero to Expert!",
        vi: "Khoá học Javascript từ Zero tới Hero!",
      },
      description: {
        en: "Newbie to intermediate level certification for Javascript, built a strong foundation of this language.",
        vi: "Chứng chỉ cấp về học ngôn ngữ Javascript từ cơ bản tới nâng cao, xây dựng một nền tảng vững chắc của ngôn ngữ này",
      },
      date: "2022",
      issuer: {
        en: "Udemy",
        vi: "Udemy",
      },
      certificateImage: "/quyenbuijs/assets/images/certificates/cert-2.jpg",
      icon: (
        <img
          src={"/quyenbuijs/assets/images/icons/js.png"}
          alt="certificate icon"
        />
      ),
    },
    {
      id: 3,
      title: {
        en: "Build Websites with HTML and CSS",
        vi: "Khoá học về HTML, CSS",
      },
      description: {
        en: "Builing Responsive Real-World with HTML and CSS",
        vi: "Chứng chỉ cấp cho học viên hoàn thành khoá học xây dựng website responsive sử dụng HTML và CSS",
      },
      date: "2022",
      issuer: {
        en: "Udemy",
        vi: "Udemy",
      },
      certificateImage: "/quyenbuijs/assets/images/certificates/cert-3.jpg",
      icon: (
        <img
          src={"/quyenbuijs/assets/images/icons/html.png"}
          alt="certificate icon"
        />
      ),
    },
    {
      id: 4,
      title: {
        en: "IELTS Certificate",
        vi: "Chứng chỉ IELTS",
      },
      description: {
        en: "International English Language Testing System",
        vi: "Chứng chỉ IELTS - Hệ thống Kiểm tra Anh ngữ Quốc tế",
      },
      date: "2023",
      issuer: {
        en: "IDP",
        vi: "IDP",
      },
      certificateImage: "/quyenbuijs/assets/images/certificates/ielts.jpg",
      icon: (
        <img
          src={"/quyenbuijs/assets/images/icons/uk.png"}
          alt="certificate icon"
          style={{
            width: "64px",
            height: "64px",
          }}
        />
      ),
    },
    // {
    //   id: 5,
    //   title: {
    //     en: "Hackathon Winner 2022",
    //     vi: "Người chiến thắng Hackathon 2022",
    //   },
    //   description: {
    //     en: "First place in national coding competition for developing innovative solutions",
    //     vi: "Giải nhất cuộc thi lập trình quốc gia cho giải pháp đổi mới sáng tạo",
    //   },
    //   date: "2022",
    //   issuer: {
    //     en: "Vietnam Tech Community",
    //     vi: "Cộng đồng Công nghệ Việt Nam",
    //   },
    //   certificateImage: "/quyenbuijs/assets/images/certificates/hackathon-certificate.jpg",
    //   icon: "💻",
    // },
    // {
    //   id: 6,
    //   title: {
    //     en: "Full Stack Development Bootcamp",
    //     vi: "Khóa học Full Stack Development",
    //   },
    //   description: {
    //     en: "Intensive training program covering modern web development technologies",
    //     vi: "Chương trình đào tạo chuyên sâu về các công nghệ web hiện đại",
    //   },
    //   date: "2021",
    //   issuer: {
    //     en: "Le Wagon Vietnam",
    //     vi: "Le Wagon Việt Nam",
    //   },
    //   certificateImage: "/quyenbuijs/assets/images/certificates/fullstack-certificate.jpg",
    //   icon: "🎓",
    // },
  ];

  const handleCardClick = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const handleCloseModal = () => {
    setSelectedAchievement(null);
  };

  const sectionTitle = {
    en: "Achievements & Certifications",
    vi: "Thành Tựu & Chứng Chỉ",
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <h2 className="section-title neon-text">{sectionTitle[language]}</h2>

        <div className="achievements-grid">
          {achievementsData.map((achievement) => (
            <div
              key={achievement.id}
              className="achievement-card neon-border-card"
              onClick={() => handleCardClick(achievement)}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <h3 className="achievement-title">
                {achievement.title[language]}
              </h3>
              <p className="achievement-description">
                {achievement.description[language]}
              </p>
              <div className="achievement-meta">
                <span className="achievement-date">{achievement.date}</span>
                <span className="achievement-issuer">
                  {achievement.issuer[language]}
                </span>
              </div>
              <div className="view-certificate-hint">
                {language === "en"
                  ? "Click to view certificate"
                  : "Nhấn để xem chứng chỉ"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedAchievement && (
        <div className="certificate-modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              ×
            </button>
            <div className="modal-header">
              <div className="modal-icon">{selectedAchievement.icon}</div>
              <h3 className="modal-title">
                {selectedAchievement.title[language]}
              </h3>
            </div>
            <div className="modal-body">
              <img
                src={selectedAchievement.certificateImage}
                alt={selectedAchievement.title[language]}
                className="certificate-image"
              />
              <div className="modal-details">
                <p className="modal-description">
                  {selectedAchievement.description[language]}
                </p>
                <div className="modal-meta">
                  <div className="meta-item">
                    <strong>
                      {language === "en" ? "Issued by:" : "Cấp bởi:"}
                    </strong>
                    <span>{selectedAchievement.issuer[language]}</span>
                  </div>
                  <div className="meta-item">
                    <strong>{language === "en" ? "Date:" : "Ngày:"}</strong>
                    <span>{selectedAchievement.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;
