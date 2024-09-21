import React from 'react';
import { Header } from './Header';
import { Home } from './Home';
import { About } from './About';
import { Skill } from './Skill';
import { Education } from './Education';
import { Project } from './Project';
import { Experience } from './Experience';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { ScrollTopButton } from './ScrollTopButton';

export const Main = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skill />
      <Education />
      <Project />
      <Experience />
      <Contact />
      <Footer />
      <ScrollTopButton />
    </>
  );
};
