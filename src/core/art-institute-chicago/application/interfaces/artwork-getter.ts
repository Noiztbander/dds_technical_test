import { IArtworkEntity, IArtworkTypeEntity } from "../../domain/artwork";

export interface IArtworkGetter {
  getArtworkTypes(): Promise<IArtworkTypeEntity>;
  getArtworks({
    query,
    current_page,
  }: {
    query?: string;
    current_page?: number;
  }): Promise<IArtworkEntity>;
}
