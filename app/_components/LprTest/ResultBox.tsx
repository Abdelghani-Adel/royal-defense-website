import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import ResultDetection from "./ResultDetection";
import { v4 } from "uuid";

type Props = {
  result: ILprTestRes;
};

const ResultBox = (props: Props) => {
  const { result } = props;
  const [detections, setDetections] = useState([
    {
      confidence: 85.5,
      plate_image: "/images/defaultplate.png",
      plate_number: " 1 7 1 أ أ أ ",
    },
  ]);

  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    if (result.success) {
      setDetections(result.data);
      setImagePath("https://lpr.royal-defense.cloud/detections/");
    }
  }, [result]);

  return (
    <div className="resultBox">
      <h2>LPR Results</h2>

      {detections != null &&
        detections.length > 0 &&
        detections.map((detect) => (
          <ResultDetection key={v4()} detect={detect} imagePath={imagePath} />
        ))}
    </div>
  );
};

export default ResultBox;
