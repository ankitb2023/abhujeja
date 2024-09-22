import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import { useHandleNavigation } from '../customhook/useHandleNavigation';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const handleNavClick = useHandleNavigation();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-theme');
  };
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      setDarkTheme(true);
      document.body.classList.add('dark-theme');
    } else {
      setDarkTheme(false);
      document.body.classList.remove('dark-theme');
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, [darkTheme]);
  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let scrollPosition = window.scrollY;
 
      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 300;
        const sectionId = section.getAttribute('id');
 
        if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
 
    window.addEventListener('scroll', handleScroll);
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      <a onClick={() => handleNavClick('home')} className="logo">
        <i className="fab fa-angular"></i> Ankit
      </a>
      <div
        id="menu"
        className={`fas fa-bars ${menuOpen ? 'fa-times' : ''}`}
        onClick={toggleMenu}
      ></div>
      <nav className={`navbar ${menuOpen ? 'nav-toggle' : ''}`}>
        <ul>
          <li>
            <a className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>
              Home
            </a>
          </li>
          <li>
            <a className={activeSection === 'about' ? 'active' : ''}
              onClick={() => {
                handleNavClick('about');
              }}
            >
              About
            </a>
          </li>
          <li>
            <a className={activeSection === 'skills' ? 'active' : ''} onClick={() => handleNavClick('skills')}>Skills</a>
          </li>
          <li>
            <a className={activeSection === 'education' ? 'active' : ''} onClick={() => handleNavClick('education')}>Education</a>
          </li>
          <li>
            <a className={activeSection === 'work' ? 'active' : ''} onClick={() => handleNavClick('work')}>Projects</a>
          </li>
          <li>
            <a className={activeSection === 'experience' ? 'active' : ''} onClick={() => handleNavClick('experience')}>
              Internships
            </a>
          </li>
          <li>
            <a className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>Contact</a>
          </li>
          <li>
            <img
              src={darkTheme ? '/images/sun.png' : '/images/moon.png'}
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
