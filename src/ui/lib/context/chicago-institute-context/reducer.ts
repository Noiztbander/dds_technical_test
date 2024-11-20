import {
  SET_CONFIG,
  SET_PAGINATION,
  SET_SEARCH_QUERY,
  UPDATE_ARTWORKS,
  UPDATE_FILTER_ARTWORK_TYPES,
} from "./actions/names";
import {
  setConfig,
  setPagination,
  setSearchQuery,
  updateArtworks,
  updateFilterArtworkTypes,
} from "./actions/types";
import { IInitialChicagoArtInstituteState as State } from "./types";

export const ChicagoArtInstituteReducer = {
  [UPDATE_ARTWORKS]: (state: State, action: updateArtworks): State => ({
    ...state,
    artworks: action.value.artworks,
    pagination: action.value.pagination,
  }),
  [SET_SEARCH_QUERY]: (state: State, action: setSearchQuery): State => ({
    ...state,
    filter: { ...state.filter, query: action.value },
  }),
  [SET_PAGINATION]: (state: State, action: setPagination): State => ({
    ...state,
    pagination: action.value,
  }),
  [SET_CONFIG]: (state: State, action: setConfig): State => ({
    ...state,
    config: action.value,
  }),
  [UPDATE_FILTER_ARTWORK_TYPES]: (
    state: State,
    action: updateFilterArtworkTypes
  ): State => ({
    ...state,
    filter: { ...state.filter, selectedArtworkTypes: action.value },
  }),
};
