import React from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { translations } from "../../../utils/translations";
import styles from "./TrustedRestaurants.module.css";

export default function TrustedRestaurants() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.trustedSection}>
      <h2 className={styles.trustedTitle}>
        {t.trustedTitle} <span className={styles.boldText}>{t.termbi}</span>
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
