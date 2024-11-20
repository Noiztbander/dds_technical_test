"use client";

import { useChicagoArtInsTituteContext } from "@/ui/lib/context/chicago-institute-context/provider";
import GalleryItem from "./gallery-item/gallery-item";
import { IArtwork } from "@/core/art-institute-chicago/domain/artwork";
import styles from "./gallery.module.css";
import { useEffect, useState } from "react";
import { FilterArtworkTypes } from "@/ui/lib/context/chicago-institute-context/types";
import { artworkTypesToStringArrayTransformer } from "@/ui/modules/common/select/utils";

const Gallery = () => {
  const { state } = useChicagoArtInsTituteContext();

  const [filteredArtworks, setFilteredArtworks] = useState<IArtwork[]>([]);

  const filterArtworksByTag = ({
    artworks,
    selectedArtworkTypes,
  }: {
    artworks: IArtwork[];
    selectedArtworkTypes: FilterArtworkTypes;
  }) => {
    const selectedTags =
      artworkTypesToStringArrayTransformer(selectedArtworkTypes);

    if (selectedTags.length === 0) {
      return artworks;
    }

    return artworks.filter((artwork) =>
      selectedTags.some((word) => artwork.artwork_type_title.includes(word))
    );
  };

  useEffect(() => {
    const filteredArtworks = filterArtworksByTag({
      artworks: state.artworks,
      selectedArtworkTypes: state.filter.selectedArtworkTypes,
    });

    setFilteredArtworks(filteredArtworks);
  }, [state]);

  return (
    <section className={styles.gallery}>
      {filteredArtworks.map((artwork: IArtwork) => (
        <GalleryItem key={artwork.image_id} artwork={artwork} />
      ))}
    </section>
  );
};

export default Gallery;
