import InputSearch from "@/ui/modules/common/input-search/input-search";

import styles from "./filter.module.css";
import TagSection from "./tag-section/tag-section";
import Select from "../../../common/select/select";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <InputSearch />
      <Select />
      <TagSection />
    </div>
  );
};

export default Filter;
