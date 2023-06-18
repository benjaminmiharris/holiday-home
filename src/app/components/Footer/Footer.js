import React from "react";

import styles from "./Footer.module.css";
import { Spinnaker } from "next/font/google";
const spinnaker = Spinnaker({ subsets: ["latin-ext"], weight: ["400"] });

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.locationContainer}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54302.56072612918!2d34.9837303!3d31.71835215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sil!4v1686811818448!5m2!1sen!2sil"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h2 style={spinnaker.style} className={styles.logo}>
        LEV RETREAT
      </h2>
      <div className={styles.details}>
        <h5>GET IN TOUCH</h5>
        <p className={styles.termsConditons}>Terms & Conditions</p>
        <h5>BOOK</h5>
      </div>
    </div>
  );
};

export default Footer;
