"use client";

import { useReducer, useMemo, createContext, useContext } from "react";

import {
  IAction,
  IAppContext,
  IInitialChicagoArtInstituteState,
} from "./types";
import reducerFactory from "../utils/reducerFactory";
import { initialChicagoArtInstituteState } from "./state";
import { ChicagoArtInstituteReducer } from "./reducer";
import { IArtworkType } from "@/core/art-institute-chicago/domain/artwork";

export const AppContext = createContext<IAppContext | null>(null);

export function useChicagoArtInsTituteContext() {
  return useContext(AppContext) as IAppContext;
}

interface AppProviderProps {
  children?: React.ReactNode;
  artworkTypes: IArtworkType[];
}

export const ChicagoArtInstituteProvider = ({
  children,
  artworkTypes,
}: AppProviderProps) => {
  const AppReducer = (
    state: IInitialChicagoArtInstituteState,
    action: IAction
  ) => reducerFactory(state, action, { ...ChicagoArtInstituteReducer });

  const [state, dispatch] = useReducer(AppReducer, {
    ...initialChicagoArtInstituteState,
    artworkTypes,
  });

  const contextValue = useMemo(() => {
    return { state, dispatch } as IAppContext;
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
