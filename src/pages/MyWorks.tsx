import { Link } from "react-router-dom";
import { config } from "../config";
import "./MyWorks.css";
import { useState, useEffect } from "react";

const MyWorks = () => {
  // Store current image index for hovered cards
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    if (hoveredCardId === null) return;
    const project = config.projects.find((p) => p.id === hoveredCardId);
    if (!project || !project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }, 1200); // Cycle images every 1.2s on hover

    return () => clearInterval(interval);
  }, [hoveredCardId]);

  const handleMouseEnter = (id: number) => {
    setHoveredCardId(id);
    setCurrentImageIndex(0);
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
    setCurrentImageIndex(0);
  };

  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <a href="/#work" className="back-button" data-cursor="disable">
          ← Back to Home
        </a>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my projects and creations</p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => {
          const isHovered = hoveredCardId === project.id;
          const displayImage =
            isHovered && project.images && project.images.length > 0
              ? project.images[currentImageIndex]
              : project.image;

          return (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="myworks-card" 
              key={project.id} 
              data-cursor="disable"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <div className="myworks-card-number">0{index + 1}</div>
              <div className="myworks-card-image">
                <img src={displayImage} alt={project.title} />
              </div>
              <div className="myworks-card-info">
                <h3>{project.title}</h3>
                <p className="myworks-card-category">{project.category}</p>
                <p className="myworks-card-description">{project.description}</p>
                <p className="myworks-card-tech">{project.technologies}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorks;
