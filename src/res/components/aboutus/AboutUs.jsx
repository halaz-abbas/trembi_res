import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = ({ details }) => {
  if (!details) return null;

  return (
    <div className={styles.aboutUsContainer}>
      <h2 className={styles.aboutUsTitle}>
        About <span className={styles.highlightText}>{details.name}</span>
      </h2>
      <p className={styles.aboutUsParagraph}>{details.about}</p>
    </div>
  );
};

export default AboutUs;
