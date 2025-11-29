import React from "react";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";

export default function CartPage() {
  return (
    <div className={styles.cartContainer}>
      <nav className={styles.breadcrumb}>
        <Link to="/cart" className={styles.breadcrumbLink}>Cart</Link>
        <span className={styles.divider}>›</span>
        <Link to="/checkout" className={styles.breadcrumbLink}>Checkout</Link>
        <span className={styles.divider}>›</span>
        <Link to="/place-order" className={styles.breadcrumbLink}>Place order</Link>
        <span className={styles.divider}>›</span>
        <Link to="/confirm" className={styles.breadcrumbLink}>Confirm Order</Link>
      </nav>

      <div className={styles.cartContent}>
        <div className={styles.itemsSection}>
          {/* Product Card */}
          <div className={styles.productCard}>
            <img src="/images/food-1.jpg" className={styles.productImage} />
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>Product Name</h3>
              <div className={styles.discountRow}><span className={styles.disc}>20%</span><span className={styles.oldPrice}>360$</span></div>
              <div className={styles.newPrice}>300$</div>
            </div>
            <div className={styles.qtyBox}>
              <button>-</button>
              <span>3</span>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className={styles.summarySection}>
          <div className={styles.summaryBox}>
            <h3>Order Summary</h3>
            <div className={styles.row}><span>Total Price</span><span className={styles.red}>510$</span></div>
            <div className={styles.row}><span>Delivery</span><span className={styles.red}>30$</span></div>
            <hr />
            <div className={`${styles.row} ${styles.grand}`}><span>Grand Total</span><span className={styles.red}>540$</span></div>
            <Link to="/checkout" className={styles.checkoutBtn}>
              Checkout
            </Link>
          </div>

          <div className={styles.paymentBox}>
            <h4>We Accept</h4>
            <div className={styles.payLogos}>
              <img src="/images/Rectangle 61.png" />
              <img src="/images/Rectangle 62.png" />
              <img src="/images/Rectangle 63.png" />
              <img src="/images/Rectangle 64.png" />
              <img src="/images/Rectangle 77.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
