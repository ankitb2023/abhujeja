import React from "react";
import "../styles/About.css";
export const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        <i className="fas fa-user-alt"></i> About <span>Me</span>
      </h2>
      <div className="row">
        <div className="image">
          <img
            draggable="false"
            className="tilt"
            src="/images/profile.jpg"
            alt="Profile"
          />
        </div>
        <div className="content">
          <h3>I'm Ankit</h3>
          <span className="tag">
            Passionate Full Stack Web Developer and Problem Solver
          </span>
          <p>
            As a final year student in Electronic and Communication, I am
            passionate about using technology to solve real-world problems.
            <br />
            <br />
            During my studies, I have gained expertise in various programming
            languages such as Java, C#, SQL, and C++. I have also developed
            skills in software development methodologies, database management,
            and Full Stack web development.
            <br />
            Additionally, I have completed several projects that have
            strengthened my understanding of software development.
          </p>
          <div className="box-container">
            <div className="box">
              <p>
                <span>email : </span> ankitbhujeja2468@gmail.com
              </p>
              <p>
                <span>place : </span> Haryana, India - 125033
              </p>
            </div>
          </div>
          <div className="resumebtn">
            <a href="resume.pdf" download className="btn" target="_blank">
              <span>Resume</span> <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
