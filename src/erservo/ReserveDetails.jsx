import React, { useState } from "react";
import styles from "./ReserveDetails.module.css";
import Footer2 from "../shared/components/footer2/footer2";

const ReserveDetails = () => {
  const [selectedType, setSelectedType] = useState("table");

  return (
    <>
      <div className={styles.reserveContainer}>
        <h2 className={styles.title}>
          <span>Reserve</span> Details
        </h2>

        {/* Reservation Types */}
        <div className={styles.reserveTypes}>
          <div
            className={`${styles.typeCard} ${selectedType === "table" ? styles.active : ""}`}
            onClick={() => setSelectedType("table")}
          >
            <img src="/images/a table (1).png" alt="Reserve table" />
            <p>Reserve a table</p>
          </div>

          <div
            className={`${styles.typeCard} ${
              selectedType === "multiple" ? styles.active : ""
            }`}
            onClick={() => setSelectedType("multiple")}
          >
            <img src="/images/tables.png" alt="Reserve multiple tables" />
            <p>Reserve multiple tables</p>
          </div>

          <div
            className={`${styles.typeCard} ${selectedType === "all" ? styles.active : ""}`}
            onClick={() => setSelectedType("all")}
          >
            <img src="/images/Resaurant illustration.png" alt="Reserve all restaurant" />
            <p>Reserve all restaurant</p>
          </div>

          <div
            className={`${styles.typeCard} ${selectedType === "event" ? styles.active : ""}`}
            onClick={() => setSelectedType("event")}
          >
            <img src="/images/Event.png" alt="Reserve for event" />
            <p>Reserve for Event</p>
          </div>
        </div>

        {/* Form */}
        <div className={styles.formSection}>
          <div className={styles.formLeft}>
            <div className={styles.formGroup}>
              <label>Booking date</label>
              <input type="date" />
            </div>

            <div className={styles.formGroup}>
              <label>Booking Time</label>
              <input type="time" />
            </div>

            <div className={styles.formGroup}>
              <label>Guests</label>
              <input type="number" placeholder="Enter number" />
            </div>
          </div>

          <div className={styles.formRight}>
            <label>Notes</label>
            <textarea placeholder="Enter your notes, important details or special request" />
          </div>
        </div>

        <button className={styles.reserveBtn}>Reserve Now</button>
      </div>
      <Footer2 />
    </>
  );
};

export default ReserveDetails;
