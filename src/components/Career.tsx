import "./styles/Career.css";
import { config } from "../config";

const renderFormattedBullet = (text: string) => {
  const colonIndex = text.indexOf(":");
  if (colonIndex !== -1 && colonIndex < 45) {
    const title = text.substring(0, colonIndex + 1);
    const body = text.substring(colonIndex + 1);
    return (
      <>
        <strong className="career-bullet-title">{title}</strong>{body}
      </>
    );
  }
  return text;
};

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3 className="career-period">{exp.period}</h3>
              </div>
              <div className="career-details">
                {exp.responsibilities && exp.responsibilities.length > 0 ? (
                  <ul className="career-bullets">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{renderFormattedBullet(resp)}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{exp.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
