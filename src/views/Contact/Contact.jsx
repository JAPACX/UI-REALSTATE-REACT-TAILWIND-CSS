import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact Us</h2>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Get in Touch</h3>
        <p className={styles.sectionText}>
          We would love to hear from you! If you have any questions, inquiries, or would like to discuss a potential collaboration, please feel free to reach out to us using the contact details below:
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Contact Information</h3>
        <ul className={styles.contactInfoList}>
          <li>
            <span className={styles.contactInfoLabel}>Phone:</span> +1 123-456-7890
          </li>
          <li>
            <span className={styles.contactInfoLabel}>Email:</span> info@protah.com
          </li>
          <li>
            <span className={styles.contactInfoLabel}>Address:</span> 123 Main St, Barranquilla, Atlantico, Colombia
          </li>
        </ul>
      </section>


      
    </div>
  );
}

export default Contact;
