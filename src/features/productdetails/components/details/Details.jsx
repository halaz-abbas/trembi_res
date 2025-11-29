import React, { useState } from "react";
import styles from "../Details.module.css";

export default function ProductDetails() {
  const [qty, setQty] = useState(3);
  const price = 50;
  const total = price * qty;

  return (
    <div className={styles.pdPage}>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Modal */}
      <div className={styles.productModal}>

        {/* Left - Image */}
        <div className={styles.pmLeft}>
          <img src="/images/food-1.jpg" alt="Shrimp Pasta" />
        </div>

        {/* Right - Content */}
        <div className={styles.pmRight}>

          <h2 className={styles.pmTitle}>Shrimp Pasta</h2>
          <div className={styles.pmPrice}>50 $</div>

          <p className={styles.pmDesc}>
            The Shrimp Version Of Vongole Rosso Dish, Clams
            Mixed With Pasta, Tomatoes And Garlic.
          </p>

          <label className={styles.pmLabel}>Product Option</label>
          <div className={styles.pmSelect}>
            <select>
              <option>Choose Option</option>
              <option>Large</option>
              <option>Small</option>
            </select>
          </div>

          <label className={styles.pmLabel}>Special Request</label>
          <textarea
            className={styles.pmTextarea}
            placeholder="Tell Us If You Have: An Allergy, An Ingredient You Don't Like, Etc."
          ></textarea>

          {/* Controls */}
          <div className={styles.pmControls}>

            <button className={styles.pmAdd}>
              Add to Cart <span>{total}$</span>
            </button>

            <div className={styles.pmQty}>
              <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
              <div>{qty}</div>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}