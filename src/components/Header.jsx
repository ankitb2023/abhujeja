import React, { useState } from 'react';
import '../styles/Header.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // For responsive menu toggle
  const [darkTheme, setDarkTheme] = useState(false); // For theme switching

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-theme'); // Toggles dark theme
  };
  return (
    <header>
      <a href="#home" className="logo">
        <i className="fab fa-angular"></i> Ankit
      </a>
      <div id="menu" className="fas fa-bars" onClick={toggleMenu}></div>
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#work">Projects</a>
          </li>
          <li>
            <a href="#experience">Internships</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <img
              src="/images/moon.png"
              id="icon"
              onClick={toggleTheme}
              alt="Theme Toggle"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
