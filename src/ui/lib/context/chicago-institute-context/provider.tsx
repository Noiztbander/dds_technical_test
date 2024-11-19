"use client";

import { useReducer, useMemo, createContext, useContext } from "react";

import { IAction, IAppContext } from "./types";
import reducerFactory from "../utils/reducerFactory";
import { initialChicagoArtInstituteState } from "./state";
import { ChicagoArtInstituteReducer } from "./reducer";
import {
  IArtwork,
  IConfig,
  IPagination,
} from "@/core/art-institute-chicago/domain/artwork";

export const AppContext = createContext<IAppContext | null>(null);

export function useChicagoArtInsTituteContext() {
  return useContext(AppContext) as IAppContext;
}

interface AppProviderProps {
  children?: React.ReactNode;
  artworks: IArtwork[];
  pagination: IPagination;
  config: IConfig;
}

export const ChicagoArtInstituteProvider = ({
  children,
  artworks,
  config,
  pagination,
}: AppProviderProps) => {
  const AppReducer = (
    state = initialChicagoArtInstituteState,
    action: IAction
  ) => reducerFactory(state, action, { ...ChicagoArtInstituteReducer });

  const [state, dispatch] = useReducer(AppReducer, {
    artworks,
    config,
    pagination,
  });

  const contextValue = useMemo(() => {
    return { state, dispatch } as IAppContext;
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};