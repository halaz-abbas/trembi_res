import React from "react";
import styles from "./Why.module.css";

export default function WhyTermbi() {
  return (
    <section className={styles.whySection}>
      <div className={styles.whyTitle}>
        <h2>
          <span className={styles.highlightRed}>Why</span>{" "}
          <span className={styles.highlightText}>termbi</span>
        </h2>
      </div>

      <p className={styles.whyDescription}>
        Termbi's booking tool allows guests to check table availability in real
        time and then book a table with just a few clicks. Even outside of your
        business hours. Your effort: Low. Your benefit: Up to 30% more bookings.
        <br />
        With Termbi, you are instantly listed on over 100 national and
        international platforms.
      </p>
    </section>
  );
}
