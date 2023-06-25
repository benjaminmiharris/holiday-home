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
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundled the text with their software.
            Today it's seen all around the web; on templates, websites, and
            stock designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
