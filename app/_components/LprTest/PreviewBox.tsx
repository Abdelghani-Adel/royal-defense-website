import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  uploadedImage: File | undefined;
  result: ILprTestRes;
};

const PreviewBox = (props: Props) => {
  const { uploadedImage, result } = props;
  const [imgSrc, setImgSrc] = useState<any>("/images/car_placeholder.jpg");

  useEffect(() => {
    if (result.success) {
      const fullImage = `https://lpr.royal-defense.cloud/detections/${result.full_image}`;
      setImgSrc(fullImage);
    }
  }, [result]);

  useEffect(() => {
    if (uploadedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgSrc(reader.result);
      };

      if (imgSrc) {
        reader.readAsDataURL(uploadedImage);
      }
    }
  }, [uploadedImage]);

  return (
    <div className="previewBox">
      <h2>Preview your image</h2>
      <div className="imageWrapper">
        <Image src={imgSrc} fill alt="" />
      </div>
    </div>
  );
};

export default PreviewBox;
