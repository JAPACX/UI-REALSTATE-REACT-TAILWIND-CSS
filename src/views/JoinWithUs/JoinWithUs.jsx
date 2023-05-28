import React from "react";
import styles from "./JoinWithUs.module.css";

function JoinWithUs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Join With Us</h2>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Explore Opportunities</h3>
        <p className={styles.sectionText}>
          Discover exciting career opportunities in the real estate industry. Whether you're a seasoned professional or just starting your career, we offer a supportive and dynamic work environment that fosters growth and success.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Work with a Great Team</h3>
        <p className={styles.sectionText}>
          Join our team of experienced real estate professionals who are passionate about delivering exceptional service to our clients. Collaborate with like-minded individuals and contribute to the success of our company.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Contact Us</h3>
        <p className={styles.sectionText}>
          If you're interested in working with us or have any questions, please fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form className={styles.contactForm}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="4" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default JoinWithUs;
