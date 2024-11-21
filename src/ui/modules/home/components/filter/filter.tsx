import InputSearch from "@/ui/modules/common/input-search/input-search";

import styles from "./filter.module.css";
import TagSection from "./tag-section/tag-section";
import MultipleSelect from "@/ui/modules/common/multiple-select/multiple-select";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <InputSearch />
      <MultipleSelect />
      <TagSection />
    </div>
  );
};

export default Filter;
