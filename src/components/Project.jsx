import React from 'react';
import '../styles/Project.css';
import { projectsData } from '../data/Project';
import { Link } from 'react-router-dom';

export const Project = () => {
  const miniProjectsData = projectsData.slice(0, 6);
  return (
    <section className="work" id="work">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
      </h2>
      <div className="box-container">
        {miniProjectsData.map((project, index) => (
          <div className="box tilt" key={index}>
            <img draggable="false" src={project.imgSrc} alt={project.title} />
            <div className="content">
              <div className="tag">
                <h3>{project.title}</h3>
              </div>
              <div className="desc">
                <p>{project.description}</p>
                <div className="btns">
                  <a
                    href={project.viewLink}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-eye"></i> View
                  </a>
                  <a
                    href={project.codeLink}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code <i className="fas fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="viewall">
        <Link to="/viewAllProject" className="btn">
          <span>View All</span> <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};
