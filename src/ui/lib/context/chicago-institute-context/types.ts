import {
  IArtwork,
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

export interface IInitialChicagoArtInstituteState {
  search_query?: string;
  artworks: IArtwork[];
  pagination: IPagination;
  config: IConfig;
}
