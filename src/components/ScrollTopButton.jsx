import React, { useState, useEffect } from 'react';
import '../styles/ScrollTopButton.css'; // Assume your CSS styles are in this file.

export const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button depending on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 60) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  // Add event listener on scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <a
      href="#home"
      className={`fas fa-angle-up ${isVisible ? 'active' : ''}`}
      id="scroll-top"
      onClick={scrollToTop}
      aria-label="Scroll to Top"
    ></a>
  );
};
