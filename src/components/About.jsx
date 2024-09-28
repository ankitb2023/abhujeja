import React, { useEffect, useRef } from 'react';
import '../styles/About.css';
import VanillaTilt from 'vanilla-tilt';
export const About = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });
    }
    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);
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
            src="/images/profileupdated.png"
            alt="Profile"
            ref={tiltRef}
          />
        </div>
        <div className="content">
          <h3>I'm Ankit</h3>
          <span className="tag">
            Software Engineer | Full Stack Web Developer
          </span>
          <p>
            I am a Software Engineer with 1.5 years of experience in full-stack
            development, specializing in Core Java, ReactJS, and backend
            technologies
            <br />
            <br />
            I have successfully modernized legacy systems, optimized API
            integrations, and enhanced user monitoring using Elasticsearch and
            Kibana. I excel in team leadership, having led cross-functional
            teams, conducted knowledge transfer sessions, and automated manual
            tasks to increase efficiency.
            <br />
            <br />
            My strong communication skills have allowed me to present project
            demos to steering committees. I am passionate about solving complex
            problems, driving innovation, and delivering scalable,
            high-performance solutions in dynamic environments.
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
