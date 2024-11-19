"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "./chicago-institute-image.module.css";

interface PropTypes {
  image_id: string;
  title: string;
  iiif_url: string;
}

const ChicagoInstituteImage = ({ image_id, title, iiif_url }: PropTypes) => {
  const [isErrorImage, setIsErrorImage] = useState<boolean>(false);

  useEffect(() => {
    setIsErrorImage(false);
  }, [image_id]);

  return (
    <>
      {!isErrorImage ? (
        <Image
          priority={true}
          sizes="auto"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          width={300}
          height={300}
          alt={title}
          src={`${iiif_url}/${image_id}/full/843,/0/default.jpg`}
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
