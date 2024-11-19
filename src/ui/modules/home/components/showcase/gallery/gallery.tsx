"use client";

import { useChicagoArtInsTituteContext } from "@/ui/lib/context/chicago-institute-context/provider";
import GalleryItem from "./gallery-item/gallery-item";
import { IArtwork } from "@/core/art-institute-chicago/domain/artwork";

const Gallery = () => {
  const { state } = useChicagoArtInsTituteContext();

  return (
    <section>
      {state.artworks.map((artwork: IArtwork) => (
        <GalleryItem key={artwork.image_id} artwork={artwork} />
      ))}
    </section>
  );
};

export default Gallery;
