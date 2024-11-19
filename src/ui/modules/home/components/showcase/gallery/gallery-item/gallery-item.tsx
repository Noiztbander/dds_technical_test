import ChicagoInstituteImage from "@/ui/modules/common/chicago-institute-image/chicago-institute-image";
import TagItem from "@/ui/modules/common/tag-item/tag-item";

import styles from "./gallery-item.module.css";
import { IArtwork } from "@/core/art-institute-chicago/domain/artwork";

const GalleryItem = ({ artwork }: { artwork: IArtwork }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <ChicagoInstituteImage
          image_id={artwork.image_id}
          title={artwork.title}
        />
      </div>
      <h3 className={styles.title}>{artwork.title}</h3>
      <div className={styles.tags}>
        <TagItem text={artwork.artwork_type_title} />
        <TagItem text={artwork.place_of_origin} />
      </div>
    </article>
  );
};

export default GalleryItem;
