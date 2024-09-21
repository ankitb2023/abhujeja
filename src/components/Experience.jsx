import React from 'react';
import '../styles/Experience.css'; // Import the CSS for Experience section

const experienceData = [
  {
    company: 'The Sparks Foundation',
    role: 'Web Development Intern',
    duration: 'January 2021 - February 2021',
  },
  {
    company: 'Microsoft Virtual Intern',
    role: 'FutureReady Talent Intern',
    duration: 'December 2021 - February 2022',
  },
  {
    company: 'React.js Training',
    role: 'React Trainee',
    duration: 'June 2021 - July 2021',
  },
  {
    company: 'Google Cloud Ready Facilitator',
    role: 'Facilitator',
    duration: 'March 2021 - June 2021',
  },
  {
    company: 'Coding Club India',
    role: 'Campus Ambassador and Content Writer',
    duration: 'April 2020 - January 2021',
  },
  {
    company: 'Oyesters Training Pvt. Ltd.',
    role: 'Web Development Intern',
    duration: 'July 2020 - August 2020',
  },
];
export const Experience = () => {
  return (
    <section className="experience" id="experience">
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
        <a href="experience/index.html" className="btn">
          <span>View All</span> <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};
