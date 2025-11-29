import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <h2 className={styles.aboutUsTitle}>About <span className={styles.highlightText}>us</span></h2>
      <p className={styles.aboutUsParagraph}>
        Welcome to <span className={styles.highlightText}>FLAT BURGUR</span>, where culinary excellence meets warm hospitality.
        Our journey began with a passion for creating unforgettable dining experiences.
        At <span className={styles.highlightText}>FLAT BURGER</span>, we believe in using the freshest ingredients to craft dishes that delight the senses.
      </p>
    </div>
  );
};

export default AboutUs;