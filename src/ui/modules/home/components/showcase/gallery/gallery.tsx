"use client";

import { useChicagoArtInsTituteContext } from "@/ui/lib/context/chicago-institute-context/provider";
import GalleryItem from "./gallery-item/gallery-item";
import { IArtwork } from "@/core/art-institute-chicago/domain/artwork";
import styles from "./gallery.module.css";
import { useFetchArtworks } from "@/ui/hooks/useFetchArtworks";

const Gallery = () => {
  useFetchArtworks();

  const { state } = useChicagoArtInsTituteContext();

  if (state.artworks.length === 0) {
    return (
      <div className={styles.noArtworks}>
        <h1>No artworks :(</h1>
      </div>
    );
  }

  return (
    <section className={styles.gallery}>
      {state.artworks.map((artwork: IArtwork, index) => (
        <GalleryItem
          style={{
            animation: "forwards fadeIn",
            animationDelay: `${index}00ms`,
            animationDuration: "1s",
          }}
          key={`artwork-${index}-${artwork.image_id}`}
          artwork={artwork}
        />
      ))}
    </section>
  );
};

export default Gallery;
