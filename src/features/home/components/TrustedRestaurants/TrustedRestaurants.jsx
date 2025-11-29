import React from "react";
import styles from "./TrustedRestaurants.module.css";

export default function TrustedRestaurants() {
  return (
    <section className={styles.trustedSection}>
      <h2 className={styles.trustedTitle}>
        restaurants already trust in <span className={styles.boldText}>termbi</span>
      </h2>

      <div className={styles.trustedImageWrapper}>
        <img
          src="/images/restaurants.svg"
          alt="Trusted restaurants"
          className={styles.trustedImage}
        />
      </div>
    </section>
  );
}
