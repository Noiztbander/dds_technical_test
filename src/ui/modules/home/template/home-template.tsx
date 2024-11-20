import BigTitle from "../components/big-title/big-title";
import Filter from "../components/filter/filter";
import Showcase from "../components/showcase/showcase";

import styles from "./home-template.module.css";

const HomeTemplate = () => {
  return (
    <main className={styles.page}>
      <BigTitle />
      <Filter />
      <Showcase />
    </main>
  );
};

export default HomeTemplate;
