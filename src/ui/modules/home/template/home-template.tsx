import InputSearch from "../../common/input-search/input-search";
import Select from "../../common/select/select";
import BigTitle from "../components/big-title/big-title";
import Showcase from "../components/showcase/showcase";

import styles from "./home-template.module.css";

const HomeTemplate = () => {
  return (
    <main className={styles.page}>
      <BigTitle />
      <InputSearch />
      <Select />
      <Showcase />
    </main>
  );
};

export default HomeTemplate;
