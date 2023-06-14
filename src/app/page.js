import Gallery from "./components/Home/Gallery/Gallery";
import Banner from "./components/Home/HomeBanner/Banner";
import Welcome from "./components/Home/Welcome/Welcome";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Banner />
      <Welcome />
      <Gallery />
    </div>
  );
}
