import styles from "./big-title.module.css";

const BigTitle = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        The <span>archive</span> of the <br /> Art Institute of Chicago
      </h1>

      <p>
        Explore thousands of artworks in the museum’s collection—from our
        renowned icons to lesser-known works from every corner of the globe—as
        well as our books, writings, reference materials, and other resources.
      </p>
    </header>
  );
};

export default BigTitle;
