import React from "react";
import { Link } from "react-router-dom";
import styles from "./RegesterForm.module.css";

export default function SetPasswordForm() {
  return (
    <div className={styles.container}>

      {/* LEFT SIDE */}
      <div className={styles.left}>
        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.completed}`}>1</div>
          <div className={`${styles.step} ${styles.completed}`}>2</div>
          <div className={`${styles.step} ${styles.active}`}>3</div>
          <div className={styles.step}>✓</div>
        </div>

        <h2 className={styles.title}>Set your password</h2>

        <form className={styles.form}>
          <label>
            Password <span>*</span>
          </label>
          <input type="password" />

          <label>
            Confirm Password <span>*</span>
          </label>
          <input type="password" />

          <Link to="/register-success">
            <button type="button" className={styles.btn}>Register</button>
          </Link>

          <p className={styles.loginText}>
            You already have an account? <a href="/login">Log in</a>
          </p>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.right}>
        <h1 className={styles.logo}>
          term<b style={{ color: "#ff3b30" }}>bi</b>
        </h1>
        <p className={styles.subtitle}>Restaurants Management System</p>

        {/* ضع الصورة التي تريدها هنا */}
        <img src="src/assets/imges/illustration.png" alt="Restaurant System" className={styles.rightImage} />
      </div>
    </div>
  );
}