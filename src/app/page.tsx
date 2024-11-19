import { ArtworkRepository } from "@/core/art-institute-chicago/infrastructure/artwork-repository";
import { ArtworkGetter } from "@/core/art-institute-chicago/application/artwork/artwork-getter";
import HomeTemplate from "@/ui/modules/home/template/home-template";

export default async function Home() {
  const repository = new ArtworkRepository();
  const artworkGetter = new ArtworkGetter(repository);

  const discoverArtworks = await artworkGetter.getArtworks();

  console.log(discoverArtworks);

  return <HomeTemplate />;
}
