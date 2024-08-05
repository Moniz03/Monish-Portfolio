import React from 'react';
import './App.css';
import AboutMe from './sections/AboutMe/AboutMe';
import Contact from './sections/Contact/Contact';
import ExperienceSection from './sections/Experience/Experience';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#hero" className="navbar-item">About</a>
          <a href="#experience" className="navbar-item">Experience</a>
          <a href="#projects" className="navbar-item">Projects</a>
          <a href="#skills" className="navbar-item">Skills</a>
          <a href="#contact" className="navbar-item">Contact</a>
        </div>
      </nav>
      <Hero id="hero" />
      <AboutMe id="about" />
      <ExperienceSection id="experience"/>
      <Projects id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer id="footer" />
    </>
  );
}

export default App;
