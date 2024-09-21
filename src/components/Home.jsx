import React from 'react'
import '../styles/Home.css' 
import {ReactTyped} from 'react-typed'; 
import { ParticlesContainer } from './ParticlesContainer';

export const Home = () => {
  return (
    <section className="home" id="home">
    <ParticlesContainer id={"particles-js"}/>
    <div className="content">
      <h3>
        Hi There,<br /> I'm Ankit<span> Bhujeja</span>
      </h3>
      <p>
        I am into{' '}
        <span className="typing-text">
          <ReactTyped
            strings={['Web Development', 'Problem Solving', 'Full Stack Development']}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </span>
      </p>
      <a href="#about" className="btn">
        <span>About Me</span> <i className="fas fa-arrow-circle-down"></i>
      </a>
      <div className="socials">
        <ul className="social-icons">
          <li>
<a className="linkedin" href="https://www.linkedin.com/in/ankit-bhujeja/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
<a className="github" href= "https://github.com/AnkitBhujeja" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a className="email" href="mailto:ankitbhujeja2468@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li>
          <a className="telegram" href="https://t.me/abhujeja" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </li>
          <li>
          <a className="instagram" href="https://www.instagram.com/ankit_bhujeja" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="image">
      <img draggable="false" className="tilt" src="/images/home.png" alt="Home" />
    </div>
  </section>
  )
}
