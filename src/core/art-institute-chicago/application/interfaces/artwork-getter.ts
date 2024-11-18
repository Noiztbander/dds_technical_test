import { IArtworkEntity } from "../../domain/artwork";

export interface IArtworkGetter {
  getArtworks(): Promise<IArtworkEntity>;
}
