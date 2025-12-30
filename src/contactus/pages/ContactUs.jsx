import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';
import styles from './ContactUs.module.css';

export default function ContactUs() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    howDidYouFind: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.contactPage}>
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          {/* Left Side - Content and Form */}
          <div className={styles.contactLeft}>
            <div>
              <h1 className={styles.contactTitle}>
                <span>{t.contactTitle}</span>{' '}
                <span className={styles.red}>{t.us}</span>
              </h1>
              <p className={styles.contactDesc}>
                {t.contactDescription}
              </p>
            </div>

            {/* Contact Form */}
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder={t.name}
                value={formData.name}
                onChange={handleInputChange}
                className={styles.contactInput}
                required
              />
              
              <input
                type="email"
                name="email"
                placeholder={t.email}
                value={formData.email}
                onChange={handleInputChange}
                className={styles.contactInput}
                required
              />
              
              <input
                type="tel"
                name="phone"
                placeholder={t.phone}
                value={formData.phone}
                onChange={handleInputChange}
                className={styles.contactInput}
                required
              />
              
              <div className={styles.selectWrapper}>
                <select
                  name="howDidYouFind"
                  value={formData.howDidYouFind}
                  onChange={handleInputChange}
                  className={styles.contactSelect}
                  required
                >
                  <option value="">{t.howDidYouFind}</option>
                  <option value="google">Google</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend Referral</option>
                  <option value="other">Other</option>
                </select>
                <span className={styles.selectIcon}>▼</span>
              </div>

              <button type="submit" className={styles.contactBtn}>
                {t.send}
              </button>
            </form>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <span className={styles.icon}>📞</span>
                </div>
                <div>
                  <div className={styles.infoTitle}>{t.phoneLabel}</div>
                  <div className={styles.infoText}>+44 543 871 1234</div>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <span className={styles.icon}>📠</span>
                </div>
                <div>
                  <div className={styles.infoTitle}>{t.faxLabel}</div>
                  <div className={styles.infoText}>+44 543 871 1235</div>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <span className={styles.icon}>✉️</span>
                </div>
                <div>
                  <div className={styles.infoTitle}>{t.emailLabel}</div>
                  <div className={styles.infoText}>info@termbi.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className={styles.contactRight}>
            <img 
              src="/images/contact-us.jpg" 
              alt="Contact Us" 
              className={styles.contactImage}
            />
          </div>
        </div>
      </section>
    </div>
  );
}