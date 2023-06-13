"use client";
import React from "react";

import styles from "./Banner.module.css";

import { Spinnaker } from "next/font/google";
import PrimaryBtn from "../../primary-btn/PrimaryBtn";
const spinnaker = Spinnaker({ subsets: ["latin-ext"], weight: ["400"] });

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <p className={`${styles.topText} text`}>The great place</p>
          <h1
            style={spinnaker.style}
            className={`${styles.heading} ${styles.spinnakerFont}`}
          >
            FOR YOUR VACATION
          </h1>
          <p className={`${styles.bottomText} text`}>
            Leave the city behind to explore the great outdoors at our Outposts
            in the Ramat Shilo community, Ramat Bet Shemesh, Israel.
          </p>
          <PrimaryBtn />
        </div>
      </div>
    </div>
  );
};

export default Banner;
