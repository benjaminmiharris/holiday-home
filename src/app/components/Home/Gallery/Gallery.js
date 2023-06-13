"use client";

import React from "react";

import PhotoAlbum from "react-photo-album";

import Img1 from "../../../../../public/gallery-img-1.jpg";
import Img2 from "../../../../../public/gallery-img-2.jpg";
import Img3 from "../../../../../public/gallery-img-7.jpg";
import Img4 from "../../../../../public/gallery-img-4.jpg";
import Img5 from "../../../../../public/gallery-img-6.jpg";
import Image from "next/image";

import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.galleryTopRowContainer}>
          <li className={styles.galleryTopRow}>
            <div className={styles.imageContainer}>
              <Image
                width={657}
                height={427}
                alt="Picture of the author"
                src={Img1}
                className={styles.image}
              />
            </div>
          </li>
          <li className={styles.galleryTopRow}>
            <div className={styles.imageContainer}>
              <Image
                width={463}
                height={427}
                alt="Picture of the author"
                src={Img2}
                className={styles.image}
              />
            </div>
          </li>
        </ul>
        <ul className={styles.galleryBottomRowContainer}>
          <li className={styles.galleryBottomRow}>
            <div className={styles.imageContainer}>
              <Image
                width={367}
                height={573}
                alt="Picture of the author"
                src={Img3}
                className={styles.image}
              />
            </div>
          </li>
          <li className={styles.galleryBottomRow}>
            <div className={styles.imageContainer}>
              <Image
                width={367}
                height={573}
                alt="Picture of the author"
                src={Img4}
                className={styles.image}
              />
            </div>
          </li>
          <li className={styles.galleryBottomRow}>
            <div className={styles.imageContainer}>
              <Image
                width={367}
                height={573}
                alt="Picture of the author"
                src={Img5}
                className={styles.image}
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Gallery;
