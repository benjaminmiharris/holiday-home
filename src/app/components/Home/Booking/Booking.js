"use client";
import PrimaryBtn from "../../primary-btn/PrimaryBtn";
import styles from "./Booking.module.css";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

import { Spinnaker } from "next/font/google";
const spinnaker = Spinnaker({ subsets: ["latin-ext"], weight: ["400"] });

const Booking = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className={styles.container} id={"booking-section"}>
      <div className={styles.bookingContainer}>
        <div className={styles.image}></div>
        <div className={styles.calendarContainer}>
          <p className={styles.headerBox}>2. Booking</p>
          <h2 style={spinnaker.style} className={styles.header}>
            Booking Calendar
          </h2>
          <p className={styles.bookingMessage}>
            This house is one of the favorite houses of our clients, so they
            talk about it and leave reviews.
          </p>
          <div className={styles.bookingCalendar}>
            <DateRangePicker
              className={styles.calendarCstm}
              onChange={onChange}
              value={value}
            />
          </div>
          <div>
            <div className={styles.message}>Message will be displayed here</div>
          </div>
          <div className={styles.bookingBtnContainer}>
            <PrimaryBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
