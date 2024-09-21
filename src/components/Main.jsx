import React from 'react';
import { Home } from './Home';
import { About } from './About';
import { Skill } from './Skill';
import { Education } from './Education';
import { Project } from './Project';
import { Experience } from './Experience';
import { Contact } from './Contact';

export const Main = () => {
  return (
    <>
      <Home />
      <About />
      <Skill />
      <Education />
      <Project />
      <Experience />
      <Contact />
    </>
  );
};
