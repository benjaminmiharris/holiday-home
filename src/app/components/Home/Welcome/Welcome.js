import React from "react";
import styles from "./Welcome.module.css";
import { Spinnaker } from "next/font/google";
const spinnaker = Spinnaker({ subsets: ["latin-ext"], weight: ["400"] });

import WelcomeImage from "../../../../../public/about-image.jpg";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className={styles.container} id={"about-section"}>
      <div className={styles.backgroundBlock}></div>
      <div className={styles.content}>
        <Image src={WelcomeImage} className={styles.image} />
        <div className={styles.textContent}>
          <p className={styles.headerBox}>1. Hello There</p>
          <h2 style={spinnaker.style} className={`${styles.heading} `}>
            Welcome to your world of relaxation. Relax and have fun
          </h2>
          <p className={styles.about}>
            Escape to a delightful holiday getaway in Ramat Shilo, Ramat Bet
            Shemesh, Israel. This charming apartment offers spacious living
            areas, a fully equipped kitchen, comfortable bedrooms, and
            well-appointed bathrooms. Experience relaxation and adventure in a
            beautiful setting. Book your stay today for an unforgettable holiday
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
