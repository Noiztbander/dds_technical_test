import { IArtworkEntity, IArtworkTypeEntity } from "../../domain/artwork";
import { IArtworkRepository } from "../../infrastructure/artwork-repository";
import { IArtworkGetter } from "../interfaces/artwork-getter";

export class ArtworkGetter implements IArtworkGetter {
  constructor(private readonly repository: IArtworkRepository) {}

  async getArtworkTypes(): Promise<IArtworkTypeEntity> {
    const response = await this.repository.getArtworkTypes();

    return response.data;
  }

  async getArtworks({
    query = "",
    current_page = 1,
  }: {
    query?: string;
    current_page?: number;
  }): Promise<IArtworkEntity> {
    const response = await this.repository.getArtworks({ query, current_page });

    return response.data;
  }
}
