import React from "react";
import styles from "./PricingPacckages.module.css";

export default function PricingPackages() {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      features: ["Online Booking", "Table Management", "Basic Analytics"]
    },
    {
      name: "Pro",
      price: "$59",
      period: "/month",
      features: ["Everything in Basic", "Advanced Analytics", "Customer Management", "Marketing Tools"]
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      features: ["Everything in Pro", "Multi-location Support", "API Access", "Priority Support"]
    }
  ];

  return (
    <section className={styles.pricingSection}>
      <h2 className={styles.pricingTitle}>
        <span className={styles.textRed}>Pricing</span>{" "}
        <span className={styles.textDark}>Packages</span>
      </h2>

      <div className={styles.pricingCardsWrapper}>
        {pricingPlans?.map((plan, i) => (
          <div key={i} className={styles.pricingCard}>
            
            {/* HEADER */}
            <div className={styles.pricingImage}>
              <div className={styles.pricingImageOverlay}>
                <h3>{plan.name}</h3>
                <p>
                  {plan.price}
                  <span className={styles.period}>{plan.period}</span>
                </p>
              </div>
            </div>

            {/* FEATURES */}
            <div className={styles.pricingFeatures}>
              <ul>
                {plan.features?.map((feature, idx) => (
                  <li key={idx}>✔️ {feature}</li>
                ))}
              </ul>

              <button
                className={styles.pricingButton}
              >
                Select Plan
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
