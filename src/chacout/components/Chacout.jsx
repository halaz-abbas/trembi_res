import React from "react";
import { Link } from "react-router-dom";
import styles from "./Chacout.module.css";

export default function Checkout() {
  return (
    <div className={styles.checkoutPage}>

      <div className={styles.checkoutContainer}>

        {/* Payment Details */}
        <div className={styles.paymentBox}>
          <h3>Payment Details</h3>

          <label>Cardholder Name</label>
          <input type="text" placeholder="Enter Cardholder name" />

          <label>Card Number</label>
          <input type="text" placeholder="0000-0000-0000-0000" />

          <div className={styles.grid}>
            <div>
              <label>Expiration Date</label>
              <input type="text" placeholder="MM/YYYY" />
            </div>

            <div>
              <label>CVV</label>
              <input type="text" placeholder="123" />
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className={styles.summarySection}>

          {/* Order Summary */}
          <div className={styles.summaryBox}>
            <h3>Order Summary</h3>

            <div className={styles.row}>
              <span>Total Price</span>
              <span className={styles.price}>$105</span>
            </div>

            <div className={styles.row}>
              <span>Delivery</span>
              <span className={styles.price}>$30</span>
            </div>

            <hr />

            <div className={`${styles.row} ${styles.total}`}>
              <span>Grand Total</span>
              <span className={styles.price}>$540</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className={styles.methodBox}>
            <h3>Choose Payment Method</h3>

            <label className={styles.radio}>
              <input type="radio" name="method" />
              PayPal
            </label>

            <label className={styles.radio}>
              <input type="radio" name="method" defaultChecked />
              Credit Card
            </label>

            <label className={styles.radio}>
              <input type="radio" name="method" />
              Google Pay
            </label>
          </div>
        </div>

      </div>

      <Link to="/place-order" className={styles.placeOrderBtn}>
        Place order
      </Link>
    </div>
  );
}
