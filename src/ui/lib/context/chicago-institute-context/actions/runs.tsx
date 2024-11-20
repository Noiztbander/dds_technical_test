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
  UPDATE_FILTER_ARTWORK_TYPES,
} from "./names";
import {
  setConfig,
  setPagination,
  setSearchQuery,
  updateArtworks,
  updateFilterArtworkTypes,
} from "./types";
import { FilterArtworkTypes } from "../types";

export const runUpdateArtworks = (payload: {
  pagination: IPagination;
  artworks: IArtwork[];
}): updateArtworks => ({
  type: UPDATE_ARTWORKS,
  value: payload,
});

export const runSetSearchQuery = (
  query: string | undefined
): setSearchQuery => ({
  type: SET_SEARCH_QUERY,
  value: query,
});

export const runSetPagination = (pagination: IPagination): setPagination => ({
  type: SET_PAGINATION,
  value: pagination,
});

export const runSetConfig = (config: IConfig): setConfig => ({
  type: SET_CONFIG,
  value: config,
});

export const runUpdateFilterArtworkTypes = (
  selectedArtworkTypes: FilterArtworkTypes
): updateFilterArtworkTypes => ({
  type: UPDATE_FILTER_ARTWORK_TYPES,
  value: selectedArtworkTypes,
});
