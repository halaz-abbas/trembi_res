import React from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { translations } from "../../../utils/translations";
import styles from "./Why.module.css";

export default function WhyTermbi() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.whySection}>
      <div className={styles.whyTitle}>
        <h2>
          <span className={styles.highlightRed}>{t.why}</span>{" "}
          <span className={styles.highlightText}>{t.termbi}</span>
        </h2>
      </div>

      <p className={styles.whyDescription}>
        {t.whyDescription}
      </p>
    </section>
  );
}
