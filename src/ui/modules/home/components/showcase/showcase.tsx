import Gallery from "./gallery/gallery";
import PaginationFooter from "./pagination-footer/pagination-footer";
import styles from "./showcase.module.css";

const Showcase = () => {
  return (
    <section className={styles.showcase}>
      <Gallery />
      <PaginationFooter />
    </section>
  );
};

export default Showcase;
