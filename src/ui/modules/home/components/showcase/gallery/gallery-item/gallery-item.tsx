import ChicagoInstituteImage from "@/ui/modules/common/chicago-institute-image/chicago-institute-image";
import TagItem from "@/ui/modules/common/tag-item/tag-item";

import styles from "./gallery-item.module.css";

const GalleryItem = () => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <ChicagoInstituteImage
          iiif_url="https://www.artic.edu/iiif/2"
          image_id="2d484387-2509-5e8e-2c43-22f9981972eb"
          title="A Sunday on La Grande Jatte — 1884"
        />
      </div>
      title
      <div className={styles.tags}>
        <TagItem />
      </div>
    </article>
  );
};

export default GalleryItem;
