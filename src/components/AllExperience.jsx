import React from 'react';
import { experienceData } from '../data/Experience';
import { Link } from 'react-router-dom';

export const AllExperience = () => {
  return (
    <section className="experience mt-5" id="experience">
      <h2 className="heading">
        <i className="fas fa-briefcase"></i> Experience
      </h2>
      <div className="timeline">
        {experienceData.map((experience, index) => (
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
        <Link to="/" className="btn">
          <span>Back To Home</span> <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
    </section>
  );
};
