/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ChangeEvent, useEffect, useState } from "react";
import styles from "./select.module.css";
import ArrowDown from "../icons/arrow-down";
import OptionItem from "./option-item/option-item";
import { useChicagoArtInsTituteContext } from "@/ui/lib/context/chicago-institute-context/provider";
import { FilterArtworkTypes } from "@/ui/lib/context/chicago-institute-context/types";
import { runUpdateFilterArtworkTypes } from "@/ui/lib/context/chicago-institute-context/actions/runs";

const Select = () => {
  const { state, dispatch } = useChicagoArtInsTituteContext();
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<FilterArtworkTypes>({});

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(runUpdateFilterArtworkTypes(checkedItems));
  }, [checkedItems]);

  return (
    <div className={styles.selectContainer}>
      <button
        className={styles.button}
        onClick={onClickHandler}
        style={
          isOpen
            ? { borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }
            : {}
        }>
        <p>Filter by category</p>
        <div style={{ transform: isOpen ? "scale(-1)" : "unset" }}>
          <ArrowDown />
        </div>
      </button>
      <fieldset
        className={styles.fieldset}
        style={{ display: isOpen ? "flex" : "none" }}>
        {state.artworkTypes.map(({ id, title }) => (
          <OptionItem
            key={id}
            handleChange={onChangeHandler}
            value={title}
            label={title}
            checked={checkedItems[title] || false}
          />
        ))}
      </fieldset>
    </div>
  );
};

export default Select;
