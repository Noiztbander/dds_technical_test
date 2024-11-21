import HomeTemplate from "@/ui/modules/home/template/home-template";
import { ChicagoArtInstituteProvider } from "@/ui/lib/context/chicago-institute-context/provider";
import { fetchGetArtworkTypes } from "./actions";

export default async function Home() {
  const { artworkTypes } = await fetchGetArtworkTypes();

  return (
    <ChicagoArtInstituteProvider artworkTypes={artworkTypes}>
      <HomeTemplate />
    </ChicagoArtInstituteProvider>
  );
}
