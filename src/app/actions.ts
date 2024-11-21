"use server";

import { ArtworkGetter } from "@/core/art-institute-chicago/application/artwork/artwork-getter";
import { ArtworkRepository } from "@/core/art-institute-chicago/infrastructure/artwork-repository";

const repository = new ArtworkRepository();
const artworkGetter = new ArtworkGetter(repository);

export const fetchGetArtworks = async ({
  query,
  current_page,
}: {
  query?: string;
  current_page?: number;
}) => {
  const {
    data: artworks,
    pagination,
    config,
  } = await artworkGetter.getArtworks({ current_page, query });

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
