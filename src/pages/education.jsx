import React from "react";
import { educationData } from "../data/educationData";

import "./pages.css";

function Education() {
  const TimelineItem = ({
    dateRange,
    school,
    degree,
    image,
    description,
    achievements,
  }) => (
    <div className="education-timeline-item">
      <div className="education-timeline-image">{image}</div>
      <div className="education-timeline-content">
        <div className="education-timeline-date">
          <span className="education-timeline-range">{dateRange}</span>
        </div>
        <div className="education-timeline-info">
          <h4>{school}</h4>
          <span className="education-timeline-degree">{degree}</span>
          <ul>
            {description.map((item, index) => (
              <li key={index}>
                <span style={{ fontWeight: "bold" }}>{item.name}:</span>{" "}
                {item.detail}
              </li>
            ))}
            {achievements && (
              <p style={{ fontWeight: "bold" }}>Achievements:</p>
            )}
            <ul>
              {achievements &&
                achievements.map((item, i) => (
                  <li key={i}>
                    {item.title}
                    <span className="right-align">{item.date}</span>
                  </li>
                ))}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
  return (
    <div className="education-timeline-container">
      {educationData.map((item, index) => (
        <TimelineItem
          key={index}
          dateRange={item.dateRange}
          school={item.school}
          degree={item.degree}
          description={item.description}
          image={item.image}
          achievements={item.achievements}
        />
      ))}
    </div>
  );
}

export default Education;
