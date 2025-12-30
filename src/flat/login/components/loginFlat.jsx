import styles from "./login.module.css";

export default function LoginModal({ onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <h2>Welcome Back</h2>

        <input type="email" placeholder="Email" />
        
        <div className={styles.passwordField}>
          <input type="password" placeholder="Password" />
          <span className={styles.eye}>👁</span>
        </div>

        <div className={styles.forgotPassword}>
          <span>Forgot Password?</span>
        </div>

        <button className={styles.loginBtn}>Log In</button>

        <div className={styles.divider}>
          <span>or</span>
        </div>

        <button className={styles.googleBtn}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
          />
          Google تسجيل الدخول من خلال
        </button>

        <p className={styles.signupText}>
          Don't have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
}