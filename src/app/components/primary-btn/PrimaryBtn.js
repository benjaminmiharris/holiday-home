import React from "react";

import styles from "./PrimaryBtn.module.css";

const PrimaryBtn = () => {
  return (
    <button className={styles.btn}>
      <span className={styles.btnText}>BOOK</span>
    </button>
  );
};

export default PrimaryBtn;
