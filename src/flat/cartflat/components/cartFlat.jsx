import styles from "./cartFlat.module.css";
import NavBar2 from "../../../shared/components/navbar/NavBar2";

export default function CartPage() {
  return (
    <>
      <NavBar2 />
      <div className={styles.cartPage}>
        {/* LEFT SIDE */}
        <div className={styles.cartContent}>
          <div className={styles.emptyCart}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="empty cart"
            />
            <p>Your cart is empty</p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className={styles.cartSidebar}>

          {/* PAYMENT */}
          <div className={styles.card}>
            <h3>Choose Payment Method</h3>

            <label className={styles.radio}>
              <input type="radio" name="payment" />
              <span className={styles.customRadio}></span>
              Card
            </label>

            <label className={styles.radio}>
              <input type="radio" name="payment" />
              <span className={styles.customRadio}></span>
              Cash
            </label>
          </div>

          {/* ORDER TYPE */}
          <div className={styles.card}>
            <h3>Order Type</h3>

            <label className={styles.radio}>
              <input type="radio" name="orderType" />
              <span className={styles.customRadio}></span>
              In Restaurant
            </label>

            <label className={styles.radio}>
              <input type="radio" name="orderType" />
              <span className={styles.customRadio}></span>
              Pick Up
            </label>

            <label className={styles.radio}>
              <input type="radio" name="orderType" />
              <span className={styles.customRadio}></span>
              Delivery
            </label>
          </div>

          {/* COUPON */}
          <div className={styles.card}>
            <h3>Coupon code</h3>
            <div className={styles.coupon}>
              <input type="text" placeholder="Enter coupon code" />
              <button>Check</button>
            </div>
          </div>

          {/* SUMMARY */}
          <div className={`${styles.card} ${styles.summary}`}>
            <h3>Order Summary</h3>

            <div className={styles.row}>
              <span>Total Price</span>
              <span className={styles.price}>$0.00</span>
            </div>

            <div className={styles.row}>
              <span>Delivery</span>
              <span className={styles.price}>$0.00</span>
            </div>

            <hr />

            <div className={`${styles.row} ${styles.total}`}>
              <span>Grand Total</span>
              <span className={styles.price}>$0.00</span>
            </div>

            <button className={styles.checkoutBtn} disabled>
              Checkout
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
