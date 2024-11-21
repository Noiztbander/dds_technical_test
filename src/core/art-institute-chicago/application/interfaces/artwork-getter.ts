import { IArtworkEntity, IArtworkTypeEntity } from "../../domain/artwork";

export interface IArtworkGetter {
  getArtworkTypes(): Promise<IArtworkTypeEntity>;
  getArtworks({
    query,
    current_page,
    artwork_types,
  }: {
    query?: string;
    current_page?: number;
    artwork_types?: string[];
  }): Promise<IArtworkEntity>;
}
