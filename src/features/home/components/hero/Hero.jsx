import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const updateBackgroundImage = () => {
      const width = window.innerWidth;
      let imagePath;
      
      if (width <= 480) {
        imagePath = '/images/hero-bg-mobile.jpg';
      } else if (width <= 768) {
        imagePath = '/images/hero-bg-tablet.jpg';
      } else {
        imagePath = '/images/hero-bg.png';
      }
      
      setBackgroundImage(imagePath);
    };

    updateBackgroundImage();
    window.addEventListener('resize', updateBackgroundImage);
    
    return () => window.removeEventListener('resize', updateBackgroundImage);
  }, []);

  const heroStyle = {
    backgroundImage: `linear-gradient(135deg, 
      rgba(0, 0, 0, 0.4) 0%, 
      rgba(30, 41, 59, 0.3) 30%, 
      rgba(15, 23, 42, 0.5) 70%, 
      rgba(0, 0, 0, 0.6) 100%
    ), url('${backgroundImage}')`
  };

  return (
    <section className={styles.heroSection} style={heroStyle}>
      <div className={styles.heroContent}>
        <h1>
          Get your own restaurant website
        </h1>

        <p>
          Termbi´s booking solution for restaurants makes a lot of your daily
          business tasks much easier, so that you can fully focus on your guests.
        </p>

        <Link to="/register">
          <button className={styles.heroButton}>
            Try Now
          </button>
        </Link>
      </div>
    </section>
  );
}
