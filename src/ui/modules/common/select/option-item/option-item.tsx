import { ChangeEvent } from "react";
import styles from "./option-item.module.css";

const OptionItem = ({
  value,
  label,
  checked,
  handleChange,
}: {
  value: string;
  label: string;
  checked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label className={styles.option} htmlFor={value}>
      <input
        id={value}
        type="checkbox"
        name={value}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <span />
      {label}
    </label>
  );
};

export default OptionItem;
