"use server";

import { ArtworkGetter } from "@/core/art-institute-chicago/application/artwork/artwork-getter";
import { ArtworkRepository } from "@/core/art-institute-chicago/infrastructure/artwork-repository";

const repository = new ArtworkRepository();
const artworkGetter = new ArtworkGetter(repository);

export const fetchGetArtworks = async ({
  query,
  current_page,
  artwork_types,
}: {
  query?: string;
  current_page?: number;
  artwork_types?: string[];
}) => {
  const {
    data: artworks,
    pagination,
    config,
  } = await artworkGetter.getArtworks({ current_page, query, artwork_types });

  console.log({
    query,
    current_page,
    artwork_types,
    artworks,
    pagination,
  });

  return {
    artworks,
    pagination,
    config,
  };
};

export const fetchGetArtworkTypes = async () => {
  const { data: artworkTypes } = await artworkGetter.getArtworkTypes();

  return { artworkTypes };
};
