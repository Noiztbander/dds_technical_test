"use client";

import { useChicagoArtInsTituteContext } from "@/ui/lib/context/chicago-institute-context/provider";
import GalleryItem from "./gallery-item/gallery-item";
import { IArtwork } from "@/core/art-institute-chicago/domain/artwork";
import styles from "./gallery.module.css";
import { useEffect } from "react";

const Gallery = () => {
  const { state } = useChicagoArtInsTituteContext();

  useEffect(() => {
    console.log("showcase", state);
  }, [state]);

  return (
    <section className={styles.gallery}>
      {state.artworks.map((artwork: IArtwork) => (
        <GalleryItem key={artwork.image_id} artwork={artwork} />
      ))}
    </section>
  );
};

export default Gallery;
