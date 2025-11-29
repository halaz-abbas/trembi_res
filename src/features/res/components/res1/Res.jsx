import React, { useState, useEffect } from 'react';
import styles from './Res.module.css';

const Res = () => {
  const images = [
    '/images/Component 2 (1).png',
    '/images/Component 2 (1).png',
    '/images/food-2.jpg',
    '/images/Component 2 (1).png',
    '/images/food-3.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.foodComponentContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Best <span className={styles.highlight}>Food</span>, Best <span className={styles.highlight}>Services!</span></h1>
          <p className={styles.description}>Sandwiches, Fries & Burger with best taste awaits you.</p>
          <div className={styles.location}>
            <span className={styles.locationIcon}>📍</span>
            <a href="https://maps.google.com/?q=2256+NW+2nd+Ave,+Miami,+FL,+37214" target="_blank" rel="noopener noreferrer" className={styles.locationLink}>
              2256 NW 2nd Ave, Miami, Fl, 37214
            </a>
          </div>
          <div className={styles.rating}>
            <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
            <span className={styles.ratingValue}>5.0</span>
          </div>
          <button className={styles.reserveButton}>Reserve a table</button>
        </div>
      </div>
      <div className={styles.imageContent}>
        <div 
          className={styles.foodImage}
          style={{backgroundImage: `url(${images[currentImage]})`}}
        ></div>
      </div>
    </div>
  );
};

export default Res;