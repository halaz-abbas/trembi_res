import React from "react";
import styles from "./FeaturesSection.module.css";

export default function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.featuresTitle}>
        <span className={styles.textPrimary}>termbi</span>{" "}
        <span className={styles.textPrimary}>Features</span>
      </h2>

      <div className={styles.featuresContent}>
        <div className={styles.featuresText}>
          <h3 className={styles.featuresSubtitle}>Dashboard</h3>

          <p className={styles.featuresDescription}>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
            Aliquip Ex Ea Commodo Consequat.
          </p>
        </div>

        <div className={styles.featuresImage}>
          <img src="/images/dashboard.jpg" alt="Dashboard" />
        </div>
      </div>
    </section>
  );
}
