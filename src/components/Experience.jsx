import React from 'react';
import '../styles/Experience.css';
import { Link } from 'react-router-dom';
import { experienceData } from '../data/Experience';

export const Experience = () => {
  const miniExperienceData = experienceData.slice(0, 5);
  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        <i className="fas fa-briefcase"></i> Experience
      </h2>
      <div className="timeline">
        {miniExperienceData.map((experience, index) => (
          <div
            className={`container ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
          >
            <div className="content">
              <div className="tag">
                <h2>{experience.company}</h2>
              </div>
              <div className="desc">
                <h3>{experience.role}</h3>
                <p>{experience.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="morebtn">
        <Link to="/viewAllExperience" className="btn">
          <span>View All</span> <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};
