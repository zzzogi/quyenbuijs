import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useState } from "react";
import portfolioData from "../data/pageData";

const ContactSection = () => {
  const { language } = useContext(LanguageContext);
  const nav = portfolioData.navigation[language];
  const form = portfolioData.contact_form[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormMessage({ type: "error", text: form.error_message });
      return;
    }

    // Simulate form submission
    setFormMessage({ type: "success", text: form.success_message });
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setFormMessage(null), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title neon-glow">{nav.contact}</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder={form.name_placeholder}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder={form.email_placeholder}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder={form.message_placeholder}
              />
            </div>

            <button type="submit" className="submit-btn neon-glow">
              {form.submit_button}
            </button>

            {formMessage && (
              <div className={`form-message ${formMessage.type}`}>
                {formMessage.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
