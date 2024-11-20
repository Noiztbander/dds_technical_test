"use client";

import BasicTag from "@/ui/modules/common/tags/basic-tag/basic-tag";
import styles from "./tag-section.module.css";
import { useChicagoArtInsTituteContext } from "@/ui/lib/context/chicago-institute-context/provider";
import { runUpdateFilterArtworkTypes } from "@/ui/lib/context/chicago-institute-context/actions/runs";

const TagSection = () => {
  const { state, dispatch } = useChicagoArtInsTituteContext();

  const removeTag = (name: string) => {
    const updatedTags = { ...state.filter.selectedArtworkTypes, [name]: false };

    dispatch(runUpdateFilterArtworkTypes(updatedTags));
  };

  return (
    <section className={styles.tagSection}>
      {Object.entries(state.filter.selectedArtworkTypes).map(
        ([name, value]) =>
          value && (
            <BasicTag
              key={`basic-tag-${name}`}
              text={name}
              onClickHandler={() => removeTag(name)}
            />
          )
      )}
    </section>
  );
};

export default TagSection;
