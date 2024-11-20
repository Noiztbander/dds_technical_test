import { IArtworkType, IConfig, IPagination } from "./artwork";

export const DEFAULT_PAGINATION: IPagination = {
  total: 0,
  limit: 0,
  offset: 0,
  total_pages: 0,
  current_page: 0,
  next_url: "",
};

export const DEFAULT_CONFIG: IConfig = {
  iiif_url: "https://www.artic.edu/iiif/2",
};

export const DEFAULT_ARTWORK_TYPES: IArtworkType[] = [
  { id: 1, title: "Print" },
  { id: 2, title: "Photograph" },
  { id: 3, title: "Textile" },
  { id: 4, title: "Painting" },
  { id: 5, title: "Botanic" },
  { id: 6, title: "Arquitecture" },
];
