import React from "react";
import styles from "./footer2.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Section */}
        <div className={styles.footerCol}>
          {/* LOGO */}
          <img
            src="/images/Rectangle 7526.svg"
            alt="Logo"
            className={styles.footerLogo}
          />

          <h4 className={styles.footerTitle}>Keep in touch</h4>

          <div className={styles.footerSocials}>
            <a href="#">📘</a>
            <a href="#">📷</a>
            <a href="#">🐦</a>
          </div>

          <p className={styles.footerProvider}>
            Provided by <span>termbi</span>
          </p>
          <a
            href="https://www.termbi.com"
            className={styles.footerLink}
          >
            www.termbi.com
          </a>
        </div>

        {/* Opening Hours */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerHeading}>Opening Hours</h3>

          <p className={styles.footerHours}>
            → 08 AM TO 12 AM <br />
            <span>MONDAY TO FRIDAY</span>
          </p>

          <p className={styles.footerHours}>
            → 11 AM TO 10 PM <br />
            <span>SATURDAY & SUNDAY</span>
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerHeading}>Quick Link</h3>

          <ul className={styles.footerLinks}>
            <li><a href="#">Reserve a table</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerHeading}>Newsletters</h3>
          <p className={styles.footerNewsText}>
            Stay up to date with our latest news,
            receive exclusive deals, and more
          </p>

          <input
            type="email"
            placeholder="Enter your email address"
            className={styles.footerInput}
          />
          <button className={styles.footerBtn}>
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <p>Copyright @ 2024 | termbi</p>

        <div className={styles.footerSocials}>
          <a href="#">📘</a>
          <a href="#">📷</a>
          <a href="#">🐦</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
