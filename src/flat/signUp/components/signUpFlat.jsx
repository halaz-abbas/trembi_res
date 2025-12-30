import styles from "./signUp.module.css";

export default function SignupModal({ onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <h2>Create an Account</h2>

        <div className={styles.row}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />

        <div className={styles.passwordField}>
          <input type="password" placeholder="Password" />
          <span className={styles.eye}>👁</span>
        </div>

        <div className={styles.passwordField}>
          <input type="password" placeholder="Confirm Password" />
          <span className={styles.eye}>👁</span>
        </div>

        <button className={styles.signupBtn}>Sign Up</button>

        <div className={styles.divider}>
          <span>or</span>
        </div>

        <button className={styles.googleBtn}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
          />
          Google الاشتراك من خلال
        </button>

        <p className={styles.loginText}>
          Already have an account? <span>Log In</span>
        </p>
      </div>
    </div>
  );
}
