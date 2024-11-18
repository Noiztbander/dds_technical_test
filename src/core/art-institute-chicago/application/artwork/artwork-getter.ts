import { IArtworkEntity } from "../../domain/artwork";
import { IArtworkRepository } from "../../infrastructure/artwork-repository";
import { IArtworkGetter } from "../interfaces/artwork-getter";

export class ArtworkGetter implements IArtworkGetter {
  constructor(private readonly repository: IArtworkRepository) {}

  async getArtworks(): Promise<IArtworkEntity> {
    const response = await this.repository.getArtworks();

    return response.data;
  }
}
