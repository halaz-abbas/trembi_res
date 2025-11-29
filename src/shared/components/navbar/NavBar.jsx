import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isCartOrProductPage = location.pathname.includes('/cart') || location.pathname.includes('/product');

  return (
    <header className={styles.navbar}>
      <nav className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <a href="/">
            <img src="/images/logo.svg" alt="Logo" />
          </a>
        </div>

        {isCartOrProductPage ? (
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search..." className={styles.searchInput} />
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
        ) : (
          <div className={styles.navbarLinks}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
        )}

        <div className={styles.navbarRight}>
          {isCartOrProductPage && (
            <Link to="/cart" className={styles.cartIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </Link>
          )}
          
          <div className={styles.langDropdown}>
            <button type="button" className={styles.langButton}>
              <img src="/images/us-flag.svg" alt="English" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.langArrow}>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={styles.langMenu}>
              <button className={styles.langOption}>
                <img src="/images/us-flag.svg" alt="English" />
                <span>English</span>
              </button>
              <button className={styles.langOption}>
                <img src="/images/us-flag.svg" alt="Arabic" />
                <span>العربية</span>
              </button>
            </div>
          </div>

          {isCartOrProductPage ? (
            <Link to="/profile" className={styles.userAvatar}>
              <img src="/images/user-avatar.jpg" alt="User" />
            </Link>
          ) : (
            <Link to="/login" className={styles.loginButton}>
              Log In
            </Link>
          )}
        </div>

        <button 
          className={styles.mobileMenu}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuContent}>
          {!isCartOrProductPage ? (
            <div className={styles.mobileNavLinks}>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <a href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
            </div>
          ) : (
            <div className={styles.mobileSearchBox}>
              <input type="text" placeholder="Search..." className={styles.mobileSearchInput} />
              <svg className={styles.mobileSearchIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </div>
          )}
          
          <div className={styles.mobileActions}>
            {isCartOrProductPage ? (
              <Link to="/profile" className={styles.mobileUserLink} onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/images/user-avatar.jpg" alt="User" />
                <span>Profile</span>
              </Link>
            ) : (
              <Link to="/login" className={styles.mobileLoginButton} onClick={() => setIsMobileMenuOpen(false)}>
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
