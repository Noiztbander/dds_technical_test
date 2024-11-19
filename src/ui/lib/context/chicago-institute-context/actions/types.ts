import {
  IArtwork,
  IConfig,
  IPagination,
} from "@/core/art-institute-chicago/domain/artwork";
import {
  SET_CONFIG,
  SET_PAGINATION,
  SET_SEARCH_QUERY,
  UPDATE_ARTWORKS,
} from "./names";

export interface updateArtworks {
  type: typeof UPDATE_ARTWORKS;
  value: IArtwork[];
}

export interface setSearchQuery {
  type: typeof SET_SEARCH_QUERY;
  value: string | undefined;
}

export interface setPagination {
  type: typeof SET_PAGINATION;
  value: IPagination;
}

export interface setConfig {
  type: typeof SET_CONFIG;
  value: IConfig;
}
