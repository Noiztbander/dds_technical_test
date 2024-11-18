import { ArtworkGetter } from "../application/artwork/artwork-getter";
import { ArtworkRepository } from "../infrastructure/artwork-repository";

const artworkRepository = new ArtworkRepository();

export const artworkGetter = new ArtworkGetter(artworkRepository);
