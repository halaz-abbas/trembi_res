import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./RegesterForm.module.css";

export default function RestaurantForm() {
  const [formData, setFormData] = useState({
    restaurantName: '',
    restaurantAddress: '',
    restaurantPhone: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = formData.restaurantName && formData.restaurantAddress && formData.restaurantPhone;
  return (
    <div className={styles.container}>

      {/* LEFT SIDE */}
      <div className={styles.left}>
        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.active}`}>1</div>
          <div className={styles.step}>2</div>
          <div className={styles.step}>3</div>
          <div className={styles.step}>✓</div>
        </div>

        <h2 className={styles.title}>Tell us about your restaurant</h2>

        <form className={styles.form}>
          <label>
            Restaurant name <span>*</span>
          </label>
          <input 
            type="text" 
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleInputChange}
          />

          <label>
            Restaurant address <span>*</span>
          </label>
          <input 
            type="text" 
            name="restaurantAddress"
            value={formData.restaurantAddress}
            onChange={handleInputChange}
          />

          <label>
            Restaurant phone <span>*</span>
          </label>
          <div className={styles.phoneInput}>
            <select>
              <option>🇺🇸 +1</option>
            </select>
            <input 
              type="text" 
              name="restaurantPhone"
              value={formData.restaurantPhone}
              onChange={handleInputChange}
            />
          </div>

          {isFormValid ? (
            <Link to="/register-step2">
              <button type="button" className={styles.btn}>Next</button>
            </Link>
          ) : (
            <button type="button" className={styles.btn} disabled style={{opacity: 0.5}}>Next</button>
          )}

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
