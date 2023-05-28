import React from "react";
import styles from "./SellAndRent.module.css";

function SellAndRent() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sell and Rent Properties</h2>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>List Your Property</h3>
        <p className={styles.sectionText}>
          Showcase your property to potential buyers and tenants. Our experienced team will help you create attractive listings and market your property effectively, maximizing your chances of a successful sale or rental.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Expert Assistance</h3>
        <p className={styles.sectionText}>
          Our real estate professionals are here to guide you through the selling or renting process. We provide expert advice, pricing strategies, and negotiation support to help you achieve the best possible outcomes and secure favorable deals.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Find Potential Buyers or Tenants</h3>
        <p className={styles.sectionText}>
          Let us connect you with potential buyers or tenants who are actively looking for properties like yours. Our extensive network and marketing strategies ensure that your property gets the exposure it deserves, reaching the right audience.
        </p>
      </section>
    </div>
  );
}

export default SellAndRent;
