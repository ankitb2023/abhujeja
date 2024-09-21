import React from 'react';
import '../styles/Project.css';
const projectsData = [
  {
    title: 'Portfolio Website',
    description:
      "Personal portfolio website. Don't need much info about it, just scroll down. You're here only!",
    imgSrc: '/images/projects/portfolio.png',
    viewLink: '#', // Replace with your actual project link
    codeLink: '#', // Replace with your GitHub link
  },
  {
    title: 'Chat Application',
    description:
      'A react application built for chatting. Login with Google or Facebook & enjoy chatting with many features.',
    imgSrc: '/images/projects/chat.png',
    viewLink: 'https://chat-app-dabb6.web.app/signin',
    codeLink: 'https://github.com/ankitb2023/Chat-app',
  },
  {
    title: 'Weather App',
    description:
      'Check the weather status of a city by entering its name or pincode.',
    imgSrc: '/images/projects/weather.png',
    viewLink: 'https://bhujejaweatherapp.netlify.app/',
    codeLink: 'https://github.com/ankitb2023/Weather-App',
  },
  {
    title: 'Tic Tac Toe Game',
    description:
      'A Classic game created with React.js featuring history of moves and an animated winner display.',
    imgSrc: '/images/projects/tictactoe.png',
    viewLink: 'https://zerokatakhel.netlify.app/',
    codeLink: 'https://github.com/ankitb2023/tictacgame',
  },
  {
    title: 'Box-office',
    description:
      'Shows details about movies and web series, including predictions for upcoming seasons.',
    imgSrc: '/images/projects/boxoffice.png',
    viewLink: 'https://ankitbhujeja.github.io/box-office-lighttheme/',
    codeLink: 'https://github.com/ankitb2023/box-office-lighttheme',
  },
  {
    title: 'Basic Ecommerce',
    description:
      'An Ecommerce web app featuring shopping cart and product filter functionality.',
    imgSrc: '/images/projects/ecommerce.png',
    viewLink: 'https://ankitbhujeja.github.io/Ecommerce-cart/',
    codeLink: 'https://github.com/ankitb2023/Ecommerce-cart',
  },
];
export const Project = () => {
  return (
    <section className="work" id="work">
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
        <a href="projects/index.html" className="btn">
          <span>View All</span> <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};
