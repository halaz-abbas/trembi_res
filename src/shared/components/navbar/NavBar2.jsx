import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../contexts/LanguageContext";
import { translations } from "../../../utils/translations";
import SignupModal from "../../../flat/signUp/components/signUpFlat";
import LoginModal from "../../../flat/login/components/loginFlat";
import styles from "./NavBar.module.css";

export default function NavBar2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    setShowSignupModal(true);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowSignupModal(false);
    setShowLoginModal(false);
  };

  return (
    <header className={styles.navbar}>
      <nav className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <Link to="/flat">
            <img src="/images/Rectangle 7526.svg" alt="FLAT Logo" />
          </Link>
        </div>

        <div className={styles.searchBox}>
          <input type="text" placeholder={t.search} className={styles.searchInput} />
          <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </div>

        <div className={styles.servicesNavRight}>
          <Link to="/cart" className={styles.cartIconServices}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 5H2m5 8v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6m-10 0h10"/>
            </svg>
          </Link>
          
          <div className={styles.langDropdown}>
            <button type="button" className={styles.langButton}>
              <img src={language === 'ar' ? "/images/syria_flag_flat.svg" : "/images/usa_flag.svg"} alt={language === 'ar' ? 'Arabic' : 'English'} />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.langArrow}>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={styles.langMenu}>
              <button className={styles.langOption} onClick={() => handleLanguageChange('en')}>
                <img src="/images/usa_flag.svg" alt="English" />
                <span>English</span>
              </button>
              <button className={styles.langOption} onClick={() => handleLanguageChange('ar')}>
                <img src="/images/syria_flag_flat.svg" alt="Arabic" />
                <span>العربية</span>
              </button>
            </div>
          </div>
          
          <div className={styles.authButtons}>
            <button onClick={handleSignupClick} className={styles.signupButton}>Sign Up</button>
            <button onClick={handleLoginClick} className={styles.loginButton}>Login</button>
          </div>
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
          <div className={styles.mobileSearchBox}>
            <input type="text" placeholder={t.search} className={styles.mobileSearchInput} />
            <svg className={styles.mobileSearchIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          <div className={styles.servicesActions}>
            <Link to="/cart" className={styles.cartIconServices} onClick={() => setIsMobileMenuOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 5H2m5 8v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6m-10 0h10"/>
              </svg>
              <span>Cart</span>
            </Link>
            <div className={styles.authButtons}>
              <button onClick={handleSignupClick} className={styles.signupButton}>Sign Up</button>
              <button onClick={handleLoginClick} className={styles.loginButton}>Login</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Signup Modal */}
      {showSignupModal && <SignupModal onClose={handleCloseModal} />}
      
      {/* Login Modal */}
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
    </header>
  );
}