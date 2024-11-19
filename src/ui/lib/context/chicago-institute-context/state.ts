import { IInitialChicagoArtInstituteState } from "./types";

export const initialChicagoArtInstituteState: IInitialChicagoArtInstituteState =
  {
    artworks: [],
    pagination: {
      total: 0,
      limit: 0,
      offset: 0,
      total_pages: 0,
      current_page: 0,
      next_url: "",
    },
    config: {
      iiif_url: "https://www.artic.edu/iiif/2",
    },
  };
