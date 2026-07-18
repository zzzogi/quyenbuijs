// Shared section shell: anchor id, container, mono index + title header
const Section = ({ id, index, title, subtitle, children }) => (
  <section id={id} className="section">
    <div className="container">
      <header className="section-header fade-in">
        <span className="section-index">{String(index).padStart(2, "0")}</span>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </header>
      {children}
    </div>
  </section>
);

export default Section;
