import HomeTemplate from "@/ui/modules/home/template/home-template";
import { ChicagoArtInstituteProvider } from "@/ui/lib/context/chicago-institute-context/provider";
import { ArtworkRepository } from "@/core/art-institute-chicago/infrastructure/artwork-repository";
import { ArtworkGetter } from "@/core/art-institute-chicago/application/artwork/artwork-getter";

export default async function Home() {
  const repository = new ArtworkRepository();
  const artworkGetter = new ArtworkGetter(repository);

  const {
    data: artworks,
    pagination,
    config,
  } = await artworkGetter.getArtworks();

  const { data: artworkTypes } = await artworkGetter.getArtworkTypes();

  return (
    <ChicagoArtInstituteProvider
      artworks={artworks}
      artworkTypes={artworkTypes}
      pagination={pagination}
      config={config}>
      <HomeTemplate />
    </ChicagoArtInstituteProvider>
  );
}
