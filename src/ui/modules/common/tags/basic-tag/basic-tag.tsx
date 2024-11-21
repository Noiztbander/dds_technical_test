import classNames from "classnames";

import CloseIcon from "../../icons/close-icon";
import styles from "./basic-tag.module.css";
import buttonStyles from "@/ui/styles/buttons.module.css";

const BasicTag = ({
  text,
  onClickHandler,
}: {
  text: string;
  onClickHandler?: () => void;
}) => {
  return (
    <button
      className={classNames(
        styles.tag,
        buttonStyles.btn_hover,
        buttonStyles.color_inverse_black
      )}
      onClick={onClickHandler}>
      <p>{text}</p>
      <CloseIcon color="black" />
    </button>
  );
};

export default BasicTag;
