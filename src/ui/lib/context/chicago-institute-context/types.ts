import {
  IArtwork,
  IArtworkType,
  IConfig,
  IPagination,
} from "@/core/art-institute-chicago/domain/artwork";
import { Dispatch, SetStateAction } from "react";

export interface IAction {
  type: string;
  value: unknown;
}

export interface IAppContext {
  state: IInitialChicagoArtInstituteState;
  dispatch: Dispatch<SetStateAction<IAction>>;
}

export type FilterArtworkTypes = { [key: string]: boolean };

export interface IInitialChicagoArtInstituteState {
  artworks: IArtwork[];
  pagination: IPagination;
  config: IConfig;
  artworkTypes: IArtworkType[];
  filter: {
    query?: string;
    selectedArtworkTypes: FilterArtworkTypes;
  };
}
