"use client";
import PrimaryBtn from "../../primary-btn/PrimaryBtn";
import styles from "./Booking.module.css";
// import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

import { Spinnaker } from "next/font/google";
const spinnaker = Spinnaker({ subsets: ["latin-ext"], weight: ["400"] });

const Booking = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className={styles.container} id={"booking-section"}>
      <div className={styles.bookingContainer}>
        {/* <div className={styles.image}></div> */}
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateRangePicker"]}>
                <DateRangePicker
                  localeText={{ start: "Check-in", end: "Check-out" }}
                  calendars={2}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div>
            {/* <div className={styles.message}>Message will be displayed here</div> */}
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
