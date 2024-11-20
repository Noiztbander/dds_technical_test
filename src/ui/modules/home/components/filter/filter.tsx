import InputSearch from "@/ui/modules/common/input-search/input-search";
import Select from "@/ui/modules/common/select/select";

import styles from "./filter.module.css";
import TagSection from "./tag-section/tag-section";

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
