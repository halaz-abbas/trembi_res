import React from "react";
import { Link } from "react-router-dom";
import styles from "./Confirm.module.css";

export default function ConfirmOrder() {
  return (
    <div className={styles.confirmPage}>

      <p className={styles.breadcrumb}>
        <Link to="/cart" className={styles.breadcrumbLink}>Cart</Link> &gt; 
        <Link to="/checkout" className={styles.breadcrumbLink}>Checkout</Link> &gt; 
        <Link to="/place-order" className={styles.breadcrumbLink}>Place order</Link> &gt; 
        <Link to="/confirm" className={styles.breadcrumbLink}>Confirm Order</Link>
      </p>

      <div className={styles.confirmContent}>
        <div className={styles.circle}>
          <span className={styles.checkmark}>✓</span>
        </div>

        <h2 className={styles.successText}>Confirmation ordered Successfully</h2>

        <button className={styles.homeBtn}>Go Home</button>
      </div>

    </div>
  );
}
