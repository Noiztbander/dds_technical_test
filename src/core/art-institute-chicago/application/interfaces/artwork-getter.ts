import { IArtworkEntity, IArtworkTypeEntity } from "../../domain/artwork";

export interface IArtworkGetter {
  getArtworks(): Promise<IArtworkEntity>;
  getArtworkTypes(): Promise<IArtworkTypeEntity>;
}
