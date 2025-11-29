import React from "react";
import { Link } from "react-router-dom";
import styles from "./PlaceOrder.module.css";

export default function PlaceOrder() {
  return (
    <div className={styles.placeorderPage}>

      <p className={styles.breadcrumb}>
        <Link to="/cart" className={styles.breadcrumbLink}>Cart</Link> &gt; 
        <Link to="/checkout" className={styles.breadcrumbLink}>Checkout</Link> &gt; 
        <Link to="/place-order" className={styles.breadcrumbLink}>Place order</Link> &gt; 
        <Link to="/confirm" className={styles.breadcrumbLink}>Confirm Order</Link>
      </p>

      <h2 className={styles.title}>Your Order is Ready</h2>

      <div className={styles.orderBox}>

        <h3 className={styles.boxTitle}>Order Summary</h3>

        <div className={styles.row}>
          <span>Order Code</span>
          <span>55110022336644 - 55998811</span>
        </div>

        <div className={styles.row}>
          <span>Total Price</span>
          <span className={styles.red}>$540</span>
        </div>

        <div className={styles.row}>
          <span>Name</span>
          <span>Customer name</span>
        </div>

        <div className={styles.row}>
          <span>Phone</span>
          <span>+44 526 584 5364</span>
        </div>

        <div className={styles.row}>
          <span>Delivery address</span>
          <span>Lorem Ipsum has been the industry's standard dummy</span>
        </div>

        <Link to="/confirm" className={styles.confirmBtn}>
          Confirm
        </Link>
      </div>
    </div>
  );
}
