import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { restaurantService } from "../../../services/restaurantService";
import styles from "./Res.module.css";

const Res = ({ details }) => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await restaurantService.getSliders();
        if (response && response.data && Array.isArray(response.data)) {
          // Map API response to image URLs
          const sliderImages = response.data.map(
            (slider) => slider.image || slider.url || slider.path
          );
          setImages(
            sliderImages.length > 0
              ? sliderImages
              : ["/images/Component 2 (1).png"]
          );
        } else {
          // Fallback to default image if no sliders from API
          setImages(["/images/Component 2 (1).png"]);
        }
      } catch (error) {
        console.error("Failed to fetch slider images:", error);
        // Fallback to default image on error
        setImages(["/images/Component 2 (1).png"]);
      } finally {
        setLoading(false);
      }
    };

    fetchSliders();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [images.length]);

  if (!details) return null;

  return (
    <div className={styles.foodComponentContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>{details.name}</h1>
          <p className={styles.description}>{details.description}</p>
          <div className={styles.location}>
            <span className={styles.locationIcon}>📍</span>
            <a
              href={`https://maps.google.com/?q=${details.address}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.locationLink}
            >
              {details.address}
            </a>
          </div>
          <div className={styles.rating}>
            <span className={styles.stars}>⭐️⭐️⭐️⭐️⭐️</span>
            <span className={styles.ratingValue}>{details.rating}</span>
          </div>
          <button
            className={styles.reserveButton}
            onClick={() => navigate("/reserve")}
          >
            Reserve a table
          </button>
        </div>
      </div>
      <div className={styles.imageContent}>
        <div
          className={styles.foodImage}
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        ></div>
      </div>
    </div>
  );
};

export default Res;
