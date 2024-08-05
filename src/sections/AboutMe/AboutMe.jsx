import React from 'react';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <section className={styles['about-me']}>
      <div className={styles['content-wrapper']}>
        <h1>Get To Know Me</h1>
        <p>
          Being a well-rounded person is great, but there's something undeniably thrilling about the ever-evolving world of tech. It's my groove, my happy place! I'm constantly on the lookout for the next big thing, whether it's diving into the latest coding languages or tinkering with cutting-edge gadgets.
        </p>
        <h2>My Circuits are Fried, But I Can Fix Yours</h2>
        <p>
          New tech keeps my mind buzzing with possibilities, and I love figuring out how to integrate it into my life (and maybe even help others do the same).
        </p>
      </div>
    </section>
  );
};

export default AboutMe;