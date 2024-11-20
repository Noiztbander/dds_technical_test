import CloseIcon from "../../icons/close-icon";

import styles from "./basic-tag.module.css";

const BasicTag = ({
  text,
  onClickHandler,
}: {
  text: string;
  onClickHandler?: () => void;
}) => {
  return (
    <button className={styles.tag} onClick={onClickHandler}>
      <p>{text}</p>
      <CloseIcon color="black" />
    </button>
  );
};

export default BasicTag;
