import React from "react";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        <h1 className={styles.logo}>
          term<b style={{ color: "#ff3b30" }}>bi</b>
        </h1>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Loading...</p>
      </div>
    </div>
  );
}