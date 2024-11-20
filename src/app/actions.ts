"use server";

import { ArtworkGetter } from "@/core/art-institute-chicago/application/artwork/artwork-getter";
import { ArtworkRepository } from "@/core/art-institute-chicago/infrastructure/artwork-repository";

const repository = new ArtworkRepository();
const artworkGetter = new ArtworkGetter(repository);

export const fetchGetArtworks = async () => {
  const {
    data: artworks,
    pagination,
    config,
  } = await artworkGetter.getArtworks();

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

export const fetchSearchArtworks = async (query: string) => {
  const { data: artworks, pagination } = await artworkGetter.searchArtworks({
    query,
  });

  return { artworks, pagination };
};
