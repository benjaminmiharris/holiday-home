import React, { useEffect, useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useSWR from "swr";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import styles from "./CalendarReact.module.css";
import PrimaryBtn from "../primary-btn/PrimaryBtn";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function CalendarReact() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [guestFullName, setGuestFullName] = useState();
  const [guestEmail, setGuestEmail] = useState();
  const [guestContactNumber, setGuestContactNumber] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState();
  const [addtionalBookingDetails, setAddtionalBookingDetails] = useState();
  const [loadEventData, setLoadEventData] = useState(false);
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [sumNumberOfDays, setSumNumberOfDays] = useState();
  const [price, setPrice] = useState({});

  const [excludeDates, setExcludeDates] = useState([]);

  const { data, error } = useSWR(
    "https://lev-server-zx35.onrender.com/getCalendarEvents",
    fetcher
  );

  let eventData = data;

  const rateCalculator = (numberOfDays) => {
    if (!numberOfDays) {
      console.error("Invalid startDate or endDate");
    }

    if (numberOfDays <= 3) {
      return setPrice({
        price: numberOfDays * 400,
        deposit: numberOfDays * 400 * 0.2,
      });
    }

    if (numberOfDays < 11 && numberOfDays > 3) {
      return setPrice({
        price: numberOfDays * 350,
        deposit: numberOfDays * 350 * 0.2,
      });
    }

    if (numberOfDays > 10) {
      return setPrice({
        price: numberOfDays * 300,
        deposit: numberOfDays * 300 * 0.2,
      });
    }
  };

  const checkNumberOfDays = (startDate, endDate) => {
    if (!startDate || !endDate) {
      console.error("Invalid startDate or endDate");
      return;
    }

    console.log("end date", endDate);
    console.log("start date", startDate);

    const timeDifference = endDate.getTime() - startDate.getTime();

    const daysDifference = timeDifference / (1000 * 3600 * 24);

    setSumNumberOfDays(daysDifference);
  };

  useEffect(() => {
    checkNumberOfDays(startDate, endDate);
  }, [startDate, endDate]);

  useEffect(() => {
    rateCalculator(sumNumberOfDays);
  }, [sumNumberOfDays]);

  const sendEmail = (newEvent) => {
    console.log("email text", newEvent);

    const startDateReformat = new Date(
      newEvent.start.dateTime
    ).toLocaleDateString("en-GB");

    const endDateReformat = new Date(newEvent.end.dateTime).toLocaleDateString(
      "en-GB"
    );

    emailjs
      .send(
        "service_ry7pqjo",
        "template_urxmm6h",
        {
          startdate: startDateReformat,
          enddate: endDateReformat,
          deposit: price.deposit,
          amount: price.price,
          guestEmail: newEvent.details.contactEmail,
        },
        "Q8iP14Sf9fa7WcnHK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (eventData && true) {
      function parseISODate(isoDate) {
        return new Date(isoDate);
      }

      const convertedEventData = eventData.map((event) => {
        const start = event.start.date || event.start.dateTime;
        const end = event.end.date || event.end.dateTime;

        return {
          start: parseISODate(start),
          end: parseISODate(end),
        };
      });

      return setExcludeDates(convertedEventData);
    }
  }, [eventData, loadEventData]);

  function getBrowserTimeZone() {
    // Get the time zone name
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return timeZone;
  }

  const newEvent = {
    summary: `Side Booking - ${guestFullName}`,
    description: `Contact Email: ${guestEmail},  
      Contact Number: ${guestContactNumber}, 
      Number of Guests: ${numberOfGuests}, 
      Additional details: ${addtionalBookingDetails}`,

    start: {
      dateTime: startDate,
      timeZone: getBrowserTimeZone(),
    },
    end: {
      dateTime: endDate,
      timeZone: getBrowserTimeZone(),
    },
    details: {
      contactEmail: guestEmail,
      contactNumber: guestContactNumber,
      numberOfGuests: numberOfGuests,
      additionalDetails: addtionalBookingDetails,
    },
  };

  const handleBookingSubmission = () => {
    // Check if required fields are filled
    if (guestFullName && guestEmail && numberOfGuests) {
      // All required fields are filled, proceed with submission

      console.log(newEvent);
      createCalendarEventHandler(newEvent);
    } else {
      setShowSubmitError(true);
      // Display an error message or handle the case where not all required fields are filled
      console.error("Please fill in all required fields.");
    }
  };

  const createCalendarEventHandler = async (event) => {
    setLoadEventData(true);
    try {
      fetch("https://lev-server-zx35.onrender.com/createEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          console.log("it worked");
          return response.json();
        })
        .then((data) => {
          console.log("Event created successfully:", data);
        })
        .catch((error) => {
          console.error("Error creating event:", error.message);
        });
      setLoadEventData(!loadEventData);
      sendEmail(newEvent);
    } catch (error) {
      console.error("An unexpected error occurred:", error.message);
    }
  };

  const dateRangePickerRender = (excludeDates) => {
    return (
      <div className={styles.datePicker}>
        <DatePicker
          className={styles.datePickerInputStart}
          dateFormat="dd/MM/yyyy"
          placeholderText="Check-in"
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={(date) => setStartDate(date)}
          filterDate={(d) => {
            return new Date() < d;
          }}
          isClearable
          excludeDateIntervals={excludeDates}
          required
        />

        <DatePicker
          className={styles.datePickerInputEnd}
          dateFormat="dd/MM/yyyy"
          placeholderText="Check-out"
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={(date) => setEndDate(date)}
          filterDate={(d) => {
            return new Date() < d;
          }}
          isClearable
          excludeDateIntervals={excludeDates}
          required
        />
      </div>
    );
  };

  return (
    <>
      {loadEventData ? (
        <p style={{ color: "white", fontSize: "1.2rem" }}>
          Thank you for submitting your request. We will reach out to you to
          confirm the booking and proceed with the payment process. This booking
          will be reserved for 24hr prior to the deposit being paid.
        </p>
      ) : (
        <div>
          <InputGroup className="mb-3">
            {excludeDates.length > 0 && dateRangePickerRender(excludeDates)}
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Full Name"
              placeholder="Full Name"
              onChange={(e) => setGuestFullName(e.target.value)}
              required
              isInvalid={showSubmitError && !guestFullName}
            />
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setGuestEmail(e.target.value)}
              required
              isInvalid={showSubmitError && !guestEmail}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Mobile"
              placeholder="Mobile"
              onChange={(e) => setGuestContactNumber(e.target.value)}
              required
            />
            <Form.Control
              type="number"
              placeholder="No of Guests"
              onChange={(e) => setNumberOfGuests(e.target.value)}
              required
              isInvalid={showSubmitError && !guestContactNumber}
              min={1}
              max={2}
            />
          </InputGroup>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Additional details"
              onChange={(e) => setAddtionalBookingDetails(e.target.value)}
            />
          </Form.Group>

          <div className={styles.bookingBtnContainer}>
            <PrimaryBtn onClick={handleBookingSubmission} />
          </div>
        </div>
      )}
    </>
  );
}
