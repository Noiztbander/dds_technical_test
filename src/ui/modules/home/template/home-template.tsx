import InputSearch from "../../common/input-search/input-search";
import Select from "../../common/select/select";
import Header from "../components/header/header";
import Showcase from "../components/showcase/showcase";

import styles from "./home-template.module.css";

const HomeTemplate = () => {
  return (
    <main className={styles.page}>
      <Header />
      <InputSearch />
      <Select />
      <Showcase />
    </main>
  );
};

export default HomeTemplate;
