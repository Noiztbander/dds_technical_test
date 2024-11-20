/* eslint-disable @typescript-eslint/no-unused-vars */
import { RequestResponse } from "@/core/types/RequestResponse";
import { IArtworkEntity, IArtworkTypeEntity } from "../domain/artwork";
import { requestConfig } from "@/core/utils/requestConfig";
import { artInstituteChicagoConfig } from "../config";
import {
  DEFAULT_ARTWORK_TYPES,
  DEFAULT_CONFIG,
  DEFAULT_PAGINATION,
} from "../domain/constants";

function responseHandler(res: Response) {
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const artworkEntityErrorResponse = (items?: any[]) => ({
  data: {
    data: items || [],
    pagination: DEFAULT_PAGINATION,
    config: DEFAULT_CONFIG,
  },
});

export interface IArtworkRepository {
  getArtworks(): Promise<RequestResponse<IArtworkEntity>>;
  getArtworkTypes(): Promise<RequestResponse<IArtworkTypeEntity>>;
  searchArtworks({
    query,
  }: {
    query: string;
  }): Promise<RequestResponse<IArtworkEntity>>;
}

export class ArtworkRepository implements IArtworkRepository {
  async getArtworks(): Promise<RequestResponse<IArtworkEntity>> {
    try {
      const response = await fetch(
        `${artInstituteChicagoConfig.baseUrl}/artworks?fields=id,title,place_of_origin,artwork_type_title,image_id&page=1&limit=12`,
        {
          ...requestConfig("GET"),
        }
      ).then(responseHandler);

      return { data: response };
    } catch (err) {
      return artworkEntityErrorResponse();
    }
  }

  async getArtworkTypes(): Promise<RequestResponse<IArtworkTypeEntity>> {
    try {
      const response = await fetch(
        `${artInstituteChicagoConfig.baseUrl}/artwork-types?fields=id,title&limit=24`,
        {
          ...requestConfig("GET"),
        }
      ).then(responseHandler);

      return { data: response };
    } catch (err) {
      return artworkEntityErrorResponse(DEFAULT_ARTWORK_TYPES);
    }
  }

  async searchArtworks({
    query,
  }: {
    query: string;
  }): Promise<RequestResponse<IArtworkEntity>> {
    try {
      const response = await fetch(
        `${artInstituteChicagoConfig.baseUrl}/artworks/search?q=${query}&fields=id,title,place_of_origin,artwork_type_title,image_id&page=1&limit=12`,
        {
          ...requestConfig("GET"),
        }
      ).then(responseHandler);

      return { data: response };
    } catch (err) {
      return artworkEntityErrorResponse();
    }
  }
}
