"use client";

import { ChangeEvent, useState } from "react";
import ArrowDown from "../icons/arrow-down";
import OptionItem from "./option-item/option-item";
import { useChicagoArtInsTituteContext } from "@/ui/lib/context/chicago-institute-context/provider";
import { runUpdateFilterArtworkTypes } from "@/ui/lib/context/chicago-institute-context/actions/runs";

import styles from "./multiple-select.module.css";

const MultipleSelect = () => {
  const { state, dispatch } = useChicagoArtInsTituteContext();
  const [isOpen, setIsOpen] = useState(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const artworkTypes = {
      ...state.filter.selectedArtworkTypes,
      [event.target.name]: event.target.checked,
    };

    dispatch(runUpdateFilterArtworkTypes(artworkTypes));
  };

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={styles.selectContainer}
      onMouseLeave={() => {
        setIsOpen(false);
      }}>
      <button
        className={styles.button}
        onClick={onClickHandler}
        style={
          isOpen
            ? { borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }
            : {}
        }>
        <p className={styles.text}>Filter by category</p>
        <div style={{ transform: isOpen ? "scale(-1)" : "unset" }}>
          <ArrowDown />
        </div>
      </button>
      <fieldset
        className={styles.fieldset}
        style={{ display: isOpen ? "flex" : "none" }}>
        {state.artworkTypes.map(({ id, title }) => (
          <OptionItem
            key={`opton-item-${id}-${title}`}
            handleChange={onChangeHandler}
            value={title}
            label={title}
            checked={state.filter.selectedArtworkTypes[title] || false}
          />
        ))}
      </fieldset>
    </div>
  );
};

export default MultipleSelect;
