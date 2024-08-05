import React from 'react';
import styles from './Experience.module.css';
import { useTheme } from '../../common/ThemeContext';

const ExperienceSection = () => {
  const { theme } = useTheme();
  
  return (
    <section id="experience" className={styles.container}>
      <h1 className={styles.sectionTitle}>EXPERIENCE</h1>
      <div className={styles.experienceTimeline}>
        <div className={styles.experienceItem}>
          <div className={styles.experienceDate}>
            2023 SEP - 2023 OCT
          </div>
          <div className={styles.experienceContent}>
            <h3>Lucas TVS</h3>
            <h4>In-Plant Trainee: Embedded Systems</h4>
            <ul>
              <li>Interfaced with 32-bit ARM Cortex M0 based microcontroller.</li>
              <li>Configured and worked with different peripherals of the STM32F030R8Tx controller.</li>
              <li>Used Proteus, STM32CubeMX, ARM Keil uVision softwares to build different circuits, debugged the code and executed different simulations for different needs.</li>
              <li>Further worked on areas where PWM and External Interrupts are used to obtain specific simulations as per need.</li>
              <li>Developed and implemented an Embedded C code solution on Keil uVision, resulting in a 15% reduction in
              simulation time for circuit design, enhancing overall project timelines and efficiency.</li>
            </ul>
          </div>
        </div>
        <div className={styles.experienceItem}>
          <div className={styles.experienceDate}>
            2023-PRESENT
          </div>
          <div className={styles.experienceContent}>
            <h3>SPORTS CLUB, VELLORE INSTITUTE OF TECHNOLOGY, CHENNAI</h3>
            <h4>Photographer</h4>
            <p>
              I served as a core team member of the VIT Chennai Sports Club's photography division. 
              Through this role, I had the opportunity to document one of Chennai's largest sporting events, Vibrance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
