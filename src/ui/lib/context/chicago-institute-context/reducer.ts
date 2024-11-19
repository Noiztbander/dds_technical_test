import {
  SET_CONFIG,
  SET_PAGINATION,
  SET_SEARCH_QUERY,
  UPDATE_ARTWORKS,
} from "./actions/names";
import {
  setConfig,
  setPagination,
  setSearchQuery,
  updateArtworks,
} from "./actions/types";
import { IInitialChicagoArtInstituteState as State } from "./types";

export const ChicagoArtInstituteReducer = {
  [UPDATE_ARTWORKS]: (state: State, action: updateArtworks): State => ({
    ...state,
    artworks: action.value,
  }),
  [SET_SEARCH_QUERY]: (state: State, action: setSearchQuery): State => ({
    ...state,
    search_query: action.value,
  }),
  [SET_PAGINATION]: (state: State, action: setPagination): State => ({
    ...state,
    pagination: action.value,
  }),
  [SET_CONFIG]: (state: State, action: setConfig): State => ({
    ...state,
    config: action.value,
  }),
};
