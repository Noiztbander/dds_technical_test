/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useChicagoArtInsTituteContext } from "../lib/context/chicago-institute-context/provider";
import { fetchGetArtworks } from "@/app/actions";
import {
  runSetConfig,
  runUpdateArtworks,
} from "../lib/context/chicago-institute-context/actions/runs";
import { artworkTypesToStringArrayTransformer } from "../modules/common/multiple-select/utils";

export const useFetchArtworks = () => {
  const { state, dispatch } = useChicagoArtInsTituteContext();

  const updateArtworks = async (current_page: number = 1) => {
    const artworkTypesArr = artworkTypesToStringArrayTransformer(
      state.filter.selectedArtworkTypes
    );

    await fetchGetArtworks({
      query: state.filter.query || "",
      artwork_types: artworkTypesArr || [],
      current_page: current_page,
    }).then((result) => {
      const { pagination, artworks, config } = result;
      dispatch(runSetConfig(config));
      dispatch(runUpdateArtworks({ pagination, artworks }));
    });
  };

  useEffect(() => {
    updateArtworks(1);
  }, []);

  useEffect(() => {
    updateArtworks(1);
  }, [state.filter]);

  return { updateArtworks };
};
