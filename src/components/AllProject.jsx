import React from 'react';
import { projectsData } from '../data/Project';
import { Link } from 'react-router-dom';

export const AllProject = () => {
  return (
    <section className="work mt-5" id="work">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
      </h2>
      <div className="box-container">
        {projectsData.map((project, index) => (
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
        <Link to="/" className="btn">
          <span>Back To home</span> <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
    </section>
  );
};
