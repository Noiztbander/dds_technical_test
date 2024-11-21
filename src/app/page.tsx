import HomeTemplate from "@/ui/modules/home/template/home-template";
import { ChicagoArtInstituteProvider } from "@/ui/lib/context/chicago-institute-context/provider";
import { fetchGetArtworks, fetchGetArtworkTypes } from "./actions";

export default async function Home() {
  const { artworkTypes } = await fetchGetArtworkTypes();
  const { artworks, pagination, config } = await fetchGetArtworks({});

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
