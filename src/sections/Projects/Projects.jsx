import React from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/Cryptiq.png'
import freshBurger from '../../assets/netflix.jpg'
import hipsster from '../../assets/m-logo.jpg'
import fitLift from '../../assets/Schottky.jpg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Moniz03/Integration-of-Cryptography-and-Steganography-for-Secure-Communication"
          h3="Cryptiq"
          p="Online Data Security Tool"
          skills={['Java', 'Cryptography', 'Security']}
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Moniz03/Netflix-Clone"
          h3="Netflix Clone"
          p="Netflix Clone Website with Jsx"
          skills={['JavaScript', 'React', 'CSS']}
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Moniz03/Monish-Babu-Arunagiri-Portfolio"
          h3="Monishz"
          p="A Personal Portfolio Website"
          skills={['React', 'CSS', 'HTML']}
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Schottky Diode"
          p="Semiconductor Development"
          skills={['Material Science', 'Semiconductors']}
        />
      </div>
    </section>
  );
}

export default Projects;
