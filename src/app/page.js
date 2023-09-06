"use client";
import Booking from "./components/Home/Booking/Booking";
import Gallery from "./components/Home/Gallery/Gallery";
import Banner from "./components/Home/HomeBanner/Banner";
import Testemonials from "./components/Home/Testemonials/Testemonials";
import Welcome from "./components/Home/Welcome/Welcome";
import styles from "./page.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function Home({ response }) {
  // console.log("response", response);

  return (
    <>
      <FloatingWhatsApp
        accountName="Ramat Shilo Retreat"
        phoneNumber="+972 53-524-5115"
      />

      <div className={styles.main}>
        <Banner />
        <Welcome />
        <Gallery />
        <Testemonials />
        <Booking />
      </div>
    </>
  );
}

export default Home;
