import Image from "next/image";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

type Props = {
  detect: ILprTestDetection;
  imagePath: string;
};

const ResultDetection = (props: Props) => {
  const { detect, imagePath } = props;

  return (
    <div className="d-flex flex-column gap-2">
      <p className="m-0">
        <strong>Plate Number: </strong> '<span>{detect?.plate_number}</span>'
      </p>
      <Image
        src={`${imagePath}${detect.plate_image}`}
        alt=""
        width={200}
        height={80}
      />
      <p className="m-0 d-flex justify-content-between align-items-center">
        <strong>Confidence: </strong>
        <span className="confidence">
          <CircularProgressbar
            value={parseFloat(detect?.confidence?.toFixed(1))}
            text={`${parseFloat(detect?.confidence?.toFixed(1))}%`}
          />
        </span>
      </p>
    </div>
  );
};

export default ResultDetection;
