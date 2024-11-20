"use client";

import { ChangeEvent, useEffect, useState } from "react";
import styles from "./select.module.css";
import ArrowDown from "../icons/arrow-down";
import OptionItem from "./option-item/option-item";

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<
    {
      name: string;
      label: string;
    }[]
  >([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);

  const checkboxes = [
    { name: "checkbox1", label: "Checkbox 1" },
    { name: "checkbox2", label: "Checkbox 2" },
    { name: "checkbox3", label: "Checkbox 3" },
  ];

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
        {checkboxes.map(({ label, name }) => (
          <OptionItem
            key={name}
            handleChange={handleChange}
            value={name}
            label={label}
            checked={checkedItems[name] || false}
          />
        ))}
      </fieldset>
    </div>
  );
};

export default Select;
