import {
  IArtwork,
  IConfig,
  IPagination,
} from "@/core/art-institute-chicago/domain/artwork";
import {
  UPDATE_ARTWORKS,
  SET_SEARCH_QUERY,
  SET_PAGINATION,
  SET_CONFIG,
} from "./names";
import {
  setConfig,
  setPagination,
  setSearchQuery,
  updateArtworks,
} from "./types";

export const runUpdateArtworks = (
  query: string | undefined
): setSearchQuery => ({
  type: UPDATE_ARTWORKS,
  value: query,
});

export const runSetSearchQuery = (artworks: IArtwork[]): updateArtworks => ({
  type: SET_SEARCH_QUERY,
  value: artworks,
});

export const runSetPagination = (pagination: IPagination): setPagination => ({
  type: SET_PAGINATION,
  value: pagination,
});

export const runSetConfig = (config: IConfig): setConfig => ({
  type: SET_CONFIG,
  value: config,
});
