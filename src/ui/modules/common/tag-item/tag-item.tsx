import { useMemo } from "react";
import MapPointIcon from "../icons/map-point";
import styles from "./tag-item.module.css";

const TagItem = ({
  text,
  icon,
  color = { background: "#282E46", secondary_color: "#B4CBDB" },
  inverse,
}: {
  text: string;
  icon?: boolean;
  color: { background: string; secondary_color: string };
  inverse?: boolean;
}) => {
  const tagColor = useMemo(() => {
    if (inverse) {
      return {
        color: color.background,
        backgroundColor: color.secondary_color,
        border: color.secondary_color,
      };
    }
    return {
      color: color.secondary_color,
      borderColor: color.secondary_color,
      backgroundColor: "transparent",
    };
  }, [color, inverse]);

  return (
    <span className={styles.tag} style={tagColor}>
      {icon && <MapPointIcon color={color.secondary_color} />}
      <p>{text}</p>
    </span>
  );
};

export default TagItem;
