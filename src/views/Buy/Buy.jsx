import React from "react";
import styles from "./Buy.module.css";

function Buy() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Buy Properties</h2>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Explore Options</h3>
        <p className={styles.sectionText}>
          Discover a wide range of properties available for purchase. Whether
          you're looking for a house, an apartment, or land, we have options
          that fit your needs and preferences.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Expert Guidance</h3>
        <p className={styles.sectionText}>
          Our team of experienced real estate agents is here to assist you in
          finding your dream property. We provide expert guidance throughout the
          buying process, ensuring you make informed decisions and navigate
          smoothly from search to closing.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Start Your Journey</h3>
        <p className={styles.sectionText}>
          Begin your journey to homeownership with ProtAh today. Contact us to
          schedule a consultation and let us help you find the perfect property
          that meets your requirements and aspirations.
        </p>
      </section>
    </div>
  );
}

export default Buy;
