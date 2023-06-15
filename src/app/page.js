import Gallery from "./components/Home/Gallery/Gallery";
import Banner from "./components/Home/HomeBanner/Banner";
import Testemonials from "./components/Home/Testemonials/Testemonials";
import Welcome from "./components/Home/Welcome/Welcome";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Banner />
      <Welcome />
      <Gallery />
      <Testemonials />
    </div>
  );
}
