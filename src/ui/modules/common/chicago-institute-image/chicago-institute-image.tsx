"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "./chicago-institute-image.module.css";
import { useChicagoArtInsTituteContext } from "@/ui/lib/context/chicago-institute-context/provider";

interface PropTypes {
  image_id: string;
  title: string;
  className?: string;
}

const ChicagoInstituteImage = ({ image_id, title, className }: PropTypes) => {
  const { state } = useChicagoArtInsTituteContext();

  const [isErrorImage, setIsErrorImage] = useState<boolean>(false);

  useEffect(() => {
    setIsErrorImage(false);
  }, [image_id]);

  return (
    <>
      {!isErrorImage ? (
        <Image
          className={className}
          priority={true}
          sizes="auto"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          width={329}
          height={252}
          alt={title}
          src={`${state.config.iiif_url}/${image_id}/full/843,/0/default.jpg`}
          onError={() => {
            setIsErrorImage(true);
          }}
        />
      ) : (
        <div className={styles.imageRepeat}>image not found</div>
      )}
    </>
  );
};

export default ChicagoInstituteImage;
