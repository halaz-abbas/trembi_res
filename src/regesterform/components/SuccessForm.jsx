import React from "react";
import styles from "./SuccessForm.module.css";

export default function SuccessForm() {
  return (
    <div className={styles.successContainer}>

      {/* LEFT SIDE */}
      <div className={styles.successLeft}>

        <h1 className={styles.successTitle}>Congratulations!</h1>

        {/* Progress Steps */}
        <div className={styles.progressWrapper}>
          <div className={styles.circle}>1</div>
          <div className={styles.line}></div>
          <div className={styles.circle}>2</div>
          <div className={styles.line}></div>
          <div className={styles.circle}>3</div>
          <div className={styles.line}></div>
          <div className={`${styles.circle} ${styles.check}`}>✓</div>
        </div>

        <h2 className={styles.successCreated}>Your account has been created successfully!</h2>

        <h3 className={styles.successSub}>Get your restaurant started</h3>

        <p className={styles.verifyText}>
          A verification code has been sent to your email.<br />
          Please verify your account via email.{" "}
          <a className={styles.openEmail} href="#">
            Open my email
          </a>
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.successRight}>
        <h1 className={styles.logo}>
          term<b style={{ color: "#ff3b30" }}>bi</b>
        </h1>
        <p className={styles.systemText}>Restaurants Management System</p>

        {/* ضع صورتك هنا */}
        <img src="src/assets/imges/illustration.png" alt="Success Visual" className={styles.successImage} />
      </div>

    </div>
  );
}
