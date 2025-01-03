import ChicagoInstituteImage from "@/ui/modules/common/chicago-institute-image/chicago-institute-image";
import { IArtwork } from "@/core/art-institute-chicago/domain/artwork";
import {
  blackWords,
  CARD_COLOR,
  CardColorEnum,
  darkBlueWords,
  lightblueWords,
  pinkWords,
} from "./constants";
import { useMemo } from "react";
import classnames from "classnames";
import RoundTagItem from "@/ui/modules/common/tags/round-tag-item/round-tag-item";

import styles from "./gallery-item.module.css";

const GalleryItem = ({
  artwork,
  className,
  style,
}: {
  artwork: IArtwork;
  className?: string;
  style?: object;
}) => {
  const getCardColor = useMemo((): {
    background: string;
    secondary_color: string;
  } => {
    let option = CardColorEnum.black;
    const text = artwork.artwork_type_title.toLowerCase();

    const lightBlueCondition = lightblueWords.some((word) =>
      text.includes(word)
    );
    const pinkCondition = pinkWords.some((word) => text.includes(word));
    const blackCondition = blackWords.some((word) => text.includes(word));
    const darkBlueCondition = darkBlueWords.some((word) => text.includes(word));

    if (lightBlueCondition) {
      option = CardColorEnum.light_blue;
    }
    if (pinkCondition) {
      option = CardColorEnum.pink;
    }
    if (blackCondition) {
      option = CardColorEnum.black;
    }
    if (darkBlueCondition) {
      option = CardColorEnum.dark_blue;
    }

    return CARD_COLOR[option];
  }, [artwork]);

  return (
    <article
      className={classnames(className, styles.card)}
      style={{ ...style, backgroundColor: getCardColor.background }}>
      <div className={styles.imageContainer}>
        <ChicagoInstituteImage
          className={styles.img}
          image_id={artwork.image_id}
          title={artwork.title}
        />
      </div>
      <p
        className={styles.title}
        style={{ color: getCardColor.secondary_color }}>
        {artwork.title}
      </p>
      <div className={styles.tags}>
        <RoundTagItem
          inverse={true}
          text={artwork.artwork_type_title}
          color={getCardColor}
        />
        {artwork.place_of_origin && (
          <RoundTagItem
            icon={true}
            text={artwork.place_of_origin}
            color={getCardColor}
          />
        )}
      </div>
    </article>
  );
};

export default GalleryItem;
