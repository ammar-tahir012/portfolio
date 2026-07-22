import { Link, useLocation } from "react-router-dom";
import { config } from "../config";
import "./MyWorks.css";
import { useEffect } from "react";
import { MdArrowBack, MdArrowOutward } from "react-icons/md";

const MyWorks = () => {
  const location = useLocation();

  // Scroll to anchor on path change (e.g. /myworks#project-2)
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Small timeout to ensure DOM is fully loaded and settled
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const renderFormattedDescription = (text: string) => {
    return text.split("\n").map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={index} style={{ height: "12px" }}></div>;

      if (trimmed.startsWith("• ")) {
        // Bullet point: • Title: Details
        const content = trimmed.substring(2);
        const colonIndex = content.indexOf(":");
        if (colonIndex !== -1) {
          const label = content.substring(0, colonIndex + 1);
          const details = content.substring(colonIndex + 1);
          return (
            <div key={index} className="myworks-bullet-line">
              <span className="bullet-dot">•</span> <strong>{label}</strong>{details}
            </div>
          );
        }
        return (
          <div key={index} className="myworks-bullet-line">
            <span className="bullet-dot">•</span> {content}
          </div>
        );
      }

      // Key-value lines: Type: ...
      const colonIndex = trimmed.indexOf(":");
      if (colonIndex !== -1 && colonIndex < 35) {
        const label = trimmed.substring(0, colonIndex + 1);
        const value = trimmed.substring(colonIndex + 1);
        
        // If it is just a section heading like "Core Technical Architecture:"
        if (!value.trim()) {
          return (
            <h4 key={index} className="myworks-desc-section-heading">
              {label}
            </h4>
          );
        }

        return (
          <div key={index} className="myworks-desc-line">
            <strong>{label}</strong>{value}
          </div>
        );
      }

      return <p key={index} className="myworks-desc-line">{trimmed}</p>;
    });
  };

  return (
    <div className="myworks-page">
      {/* Background ambient lighting */}
      <div className="myworks-bg-glow-1"></div>
      <div className="myworks-bg-glow-2"></div>

      <div className="myworks-container">
        {/* Page Header */}
        <div className="myworks-header">
          <Link to="/" className="back-button" data-cursor="disable">
            ← Back to Home
          </Link>
          <h1>
            All <span>Works</span>
          </h1>
          <p>Explore full descriptions, architecture details, and screenshots of my projects</p>
        </div>

        {/* Detailed Sections List */}
        <div className="myworks-sections-list">
          {config.projects.map((project, index) => {
            const images = project.images && project.images.length > 0 ? project.images : [project.image];
            const techList = project.technologies.split(",").map((tech) => tech.trim());

            return (
              <section 
                key={project.id} 
                id={`project-${project.id}`} 
                className="myworks-project-section"
              >
                {/* Project Header Info */}
                <div className="myworks-project-header">
                  <div className="myworks-project-index">0{index + 1}</div>
                  <div className="myworks-project-title-area">
                    <h2>{project.title}</h2>
                    <p className="myworks-project-category">{project.category}</p>
                  </div>
                </div>

                {/* Screenshot Gallery Slider (Horizontal Scroll) */}
                <div className="myworks-project-gallery">
                  {images.map((img, idx) => (
                    <div key={idx} className="myworks-gallery-image-wrapper">
                      <img 
                        src={img} 
                        alt={`${project.title} screenshot ${idx + 1}`} 
                        className="myworks-gallery-image"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* Project Details Grid */}
                <div className="myworks-project-details-grid">
                  {/* Left Box: Full Description & Architecture */}
                  <div className="myworks-details-text-box">
                    <h3>Technical Architecture & Description</h3>
                    <div className="myworks-project-desc">
                      {renderFormattedDescription(project.description)}
                    </div>
                  </div>

                  {/* Right Box: Tech Stack Tags & Actions */}
                  <div className="myworks-details-tags-box">
                    <h3>Technologies Used</h3>
                    <div className="myworks-tech-tags">
                      {techList.map((tech, idx) => (
                        <span key={idx} className="myworks-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="myworks-project-links">
                      <a
                        href={project.github || project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="myworks-link-btn myworks-github-btn"
                        data-cursor="disable"
                      >
                        GitHub Repository <MdArrowOutward />
                      </a>
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="myworks-link-btn myworks-live-btn"
                          data-cursor="disable"
                        >
                          Visit Live Site <MdArrowOutward />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* Section Separator */}
                {index < config.projects.length - 1 && (
                  <div className="myworks-section-divider"></div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
