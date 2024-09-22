import React from 'react';
import '../styles/Footer.css';
import { useHandleNavigation } from '../customhook/useHandleNavigation';
export const Footer = () => {
  const handleNavClick = useHandleNavigation();
  return (
    <section className="footer">
      <div className="box-container">
        {/* Portfolio Info */}
        <div className="box">
          <h3>Ankit's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
        </div>

        {/* Quick Links */}
        <div className="box">
          <h3>Quick Links</h3>
          <a onClick={() => handleNavClick('home')}>
            <i className="fas fa-chevron-circle-right"></i> Home
          </a>
          <a
            onClick={() => {
              handleNavClick('about');
            }}
          >
            <i className="fas fa-chevron-circle-right"></i> About
          </a>
          <a onClick={() => handleNavClick('skills')}>
            <i className="fas fa-chevron-circle-right"></i> Skills
          </a>
          <a onClick={() => handleNavClick('education')}>
            <i className="fas fa-chevron-circle-right"></i> Education
          </a>
          <a onClick={() => handleNavClick('work')}>
            <i className="fas fa-chevron-circle-right"></i> Projects
          </a>
          <a onClick={() => handleNavClick('experience')}>
            <i className="fas fa-chevron-circle-right"></i> Internship |
            Volunteering | Contribution
          </a>
        </div>

        {/* Contact Info */}
        <div className="box">
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-phone"></i> +91 951-861-4811
          </p>
          <p>
            <i className="fas fa-envelope"></i> ankitbhujeja2468@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marked-alt"></i> Haryana, India - 125033
          </p>
          <div className="share">
            <a
              href="https://www.linkedin.com/in/ankit-bhujeja/"
              className="fab fa-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://github.com/AnkitBhujeja"
              className="fab fa-github"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="mailto:ankitbhujeja2468@gmail.com"
              className="fas fa-envelope"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="whatsapp://send?text=Hey! I'd like to chat with you.&phone=+919518614811"
              className="fab fa-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://t.me/abhujeja/"
              className="fab fa-telegram-plane"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>
      <h1 className="credit">
        Designed with <i className="fa fa-heart pulse"></i> by{' '}
        <a
          href="https://www.linkedin.com/in/ankit-bhujeja/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ankit Bhujeja
        </a>
      </h1>
    </section>
  );
};
