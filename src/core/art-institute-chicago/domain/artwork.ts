import { Keyable } from "@/core/types/Keyable";

interface IChicagoArtInstitute extends Keyable {
  pagination: IPagination;
  config: IConfig;
}

export interface IArtworkEntity extends IChicagoArtInstitute {
  data: IArtwork[];
}

export interface IArtworkTypeEntity extends IChicagoArtInstitute {
  data: IArtworkType[];
}

export interface IArtwork {
  id: string | number;
  title: string;
  place_of_origin: string;
  artwork_type_id: string;
  artwork_type_title: string;
  image_id: string;
}

export interface IArtworkType {
  id: string | number;
  title: string;
}

export interface IPagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface IConfig {
  iiif_url: string;
}
