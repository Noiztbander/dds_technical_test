import { RequestResponse } from "@/core/types/RequestResponse";
import { IArtworkEntity } from "../domain/artwork";
import { requestConfig } from "@/core/utils/requestConfig";
import { artInstituteChicagoConfig } from "../config";

function responseHandler(res: Response) {
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

const tvShowEntityErrorResponse: { data: IArtworkEntity } = {
  data: {
    data: [],
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
  },
};

export interface IArtworkRepository {
  getArtworks(): Promise<RequestResponse<IArtworkEntity>>;
}

export class ArtworkRepository implements IArtworkRepository {
  async getArtworks(): Promise<RequestResponse<IArtworkEntity>> {
    try {
      const response = await fetch(
        `${artInstituteChicagoConfig.baseUrl}/artworks?fields=id,title,place_of_origin,artwork_type_id,artwork_type_title,image_id&page=1&limit=12`,
        {
          ...requestConfig("GET"),
        }
      ).then(responseHandler);

      return { data: response };
    } catch (err) {
      console.log(err);
      return tvShowEntityErrorResponse;
    }
  }
}
