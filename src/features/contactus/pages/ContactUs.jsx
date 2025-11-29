import { useState } from "react";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    findUs: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.contactPage}>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>

          {/* Left Side */}
          <div className={styles.contactLeft}>
            <h1 className={styles.contactTitle}>
              <span className={styles.red}>Contact</span> Us
            </h1>

            <p className={styles.contactDesc}>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className={styles.contactForm}>

              <input
                placeholder="Name *"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={styles.contactInput}
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={styles.contactInput}
              />

              <input
                type="tel"
                placeholder="Phone number *"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={styles.contactInput}
                required
              />

              <div className={styles.selectWrapper}>
                <select
                  value={formData.findUs}
                  onChange={(e) =>
                    setFormData({ ...formData, findUs: e.target.value })
                  }
                  className={styles.contactSelect}
                >
                  <option value="">How did you find us?</option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
                <svg className={styles.selectIcon} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </div>

              <button type="submit" className={styles.contactBtn}>
                SEND
              </button>
            </form>

            {/* Contact Info */}
            <div className={styles.contactInfo}>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.infoTitle}>PHONE</p>
                  <p className={styles.infoText}>+44 543 871 1234</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 8H5c-1.66 0-3 1.34-3 3v6c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3v-6c0-1.66-1.34-3-3-3zm-7 6l-7-4h14l-7 4z"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.infoTitle}>FAX</p>
                  <p className={styles.infoText}>+44 543 871 1234</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.infoTitle}>EMAIL</p>
                  <p className={styles.infoText}>info@termbi.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side */}
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
