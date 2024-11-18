import { ArtworkRepository } from "@/core/art-institute-chicago/infrastructure/artwork-repository";
import styles from "./page.module.css";
import { ArtworkGetter } from "@/core/art-institute-chicago/application/artwork/artwork-getter";

export default async function Home() {
  const repository = new ArtworkRepository();
  const artworkGetter = new ArtworkGetter(repository);

  const discoverArtworks = await artworkGetter.getArtworks();

  console.log(discoverArtworks);

  return <div className={styles.page}></div>;
}
