import classnames from "classnames";
import styles from "./basic-spinner.module.css";

const BasicSpinner = ({ className }: { className?: string }) => {
  return <div className={classnames(styles.spinner, className)} />;
};

export default BasicSpinner;
