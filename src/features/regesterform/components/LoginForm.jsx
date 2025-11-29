import React from "react";
import styles from "./RegesterForm.module.css";

export default function LoginForm() {
  return (
    <div className={styles.container}>

      {/* LEFT SIDE */}
      <div className={styles.left}>
        <h2 className={styles.title}>Log In</h2>

        <form className={styles.form}>
          <label>
            Email <span>*</span>
          </label>
          <input type="email" />

          <label>
            Password <span>*</span>
          </label>
          <input type="password" />

          <button type="button" className={styles.btn}>Log In</button>

          <p className={styles.loginText}>
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.right}>
        <h1 className={styles.logo}>
          term<b style={{ color: "#ff3b30" }}>bi</b>
        </h1>
        <p className={styles.subtitle}>Restaurants Management System</p>

        <img src="src/assets/imges/illustration.png" alt="Restaurant System" className={styles.rightImage} />
      </div>
    </div>
  );
}